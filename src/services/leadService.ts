import type { Locale } from '../i18n/I18nContext';
import type { EmployeeRange, Segment } from '../config/leadOptions';
import { getLandingReferrer, getUtm, type UtmParams } from '../utils/utm';

// Payload for the Odoo module crm_external_form (form "Site Multtiplus - Fale conosco").
// The keys must match the "Chave no payload" of its mapping lines.
// Contract documented in docs/odoo-lead-endpoint.md
export type LeadPayload = UtmParams & {
    nome: string;
    empresa: string;
    email: string;
    telefone: string;
    site: string;
    funcionarios: EmployeeRange | '';
    segmento: Segment | '';
    mensagem: string;
    aceite_privacidade: true;
    /** ISO 8601 UTC: when the visitor submitted the form with the consent box checked. */
    aceite_privacidade_em: string;
    idioma: Locale;
    pagina: string;
    referencia: string;
    /** Honeypot: always empty for humans. Configured as "Campo isca" in Odoo. */
    hp: string;
};

export type LeadFormData = {
    name: string;
    company: string;
    email: string;
    phone: string;
    website: string;
    employeeRange: EmployeeRange | '';
    segment: Segment | '';
    message: string;
    honeypot: string;
};

export type LeadResult =
    | { status: 'sent' }
    | { status: 'skipped' }
    | { status: 'failed'; error: string };

const ENDPOINT = import.meta.env.VITE_LEAD_ENDPOINT?.trim();
const TIMEOUT_MS = 8000;

export const buildLeadPayload = (form: LeadFormData, lang: Locale): LeadPayload => ({
    nome: form.name.trim(),
    empresa: form.company.trim(),
    email: form.email.trim(),
    telefone: form.phone.trim(),
    site: form.website.trim(),
    funcionarios: form.employeeRange,
    segmento: form.segment,
    mensagem: form.message.trim(),
    aceite_privacidade: true,
    aceite_privacidade_em: new Date().toISOString(),
    idioma: lang,
    ...getUtm(),
    pagina: window.location.href,
    referencia: getLandingReferrer(),
    hp: form.honeypot,
});

/**
 * Sends the lead to Odoo. Never throws: the caller always continues to
 * WhatsApp, so a failure here must not cost us the contact.
 *
 * Odoo answers 201 (lead created) or 200 (honeypot: discarded) with {"ok": true},
 * 422 when the payload is refused (kept in "Envios recebidos" for reprocessing),
 * 403 for a non-allowed origin and 404 for an unknown key in the URL.
 */
export const submitLead = async (payload: LeadPayload): Promise<LeadResult> => {
    if (!ENDPOINT) return { status: 'skipped' };

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

    try {
        const response = await fetch(ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify(payload),
            signal: controller.signal,
        });
        if (!response.ok) {
            const body = await response.json().catch(() => ({})) as { error?: string };
            return { status: 'failed', error: `HTTP ${response.status}${body.error ? `: ${body.error}` : ''}` };
        }
        return { status: 'sent' };
    } catch (err) {
        return { status: 'failed', error: err instanceof Error ? err.message : String(err) };
    } finally {
        clearTimeout(timer);
    }
};
