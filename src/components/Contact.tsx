import { useState } from 'react';
import { useI18n } from '../i18n';
import { publicContact } from '../config/publicContact';
import { operationalContact } from '../config/operationalContact';

export const Contact = () => {
    // EDIT TEXTS IN: src/i18n/locales/pt-BR.json | en.json | es.json
    // Keys used here: contact.kicker, contact.title, contact.subtitle, contact.info.*, contact.form.*
    const { t } = useI18n();
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        website: '',
        users: '',
        segment: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [consent, setConsent] = useState(false);
    const [showConsentError, setShowConsentError] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleConsentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConsent(e.target.checked);
        if (e.target.checked) setShowConsentError(false);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) return;
        if (!consent) { setShowConsentError(true); return; }

        const text = `Multtiplus – Nova solicitação de contato\n\n` +
            `Nome: ${formData.name}\n` +
            `Empresa: ${formData.company}\n` +
            `Email: ${formData.email}\n` +
            `Telefone: ${formData.phone}\n` +
            `Site: ${formData.website}\n` +
            `Quantidade de funcionários: ${formData.users}\n` +
            `Segmento: ${formData.segment}\n` +
            `Consentimento LGPD: Sim\n\n` +
            `Mensagem:\n${formData.message}`;

        const encodedMessage = encodeURIComponent(text);
        window.open(`https://wa.me/${operationalContact.whatsapp}?text=${encodedMessage}`, "_blank");

        setSubmitted(true);
        setFormData({ name: '', company: '', email: '', phone: '', website: '', users: '', segment: '', message: '' });
        setConsent(false);
        setShowConsentError(false);
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <section className="py-24 lg:py-32 bg-brand-light relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 xl:gap-24">

                    {/* Info Column */}
                    <div className="w-full lg:w-1/3">
                        <div id="contact" className="scroll-anchor" aria-hidden="true" />
                        <span className="homepage-kicker mb-5">
                            {t('contact.kicker')}
                        </span>
                        <h2 className="odoo-section-title mb-5">
                            {t('contact.title')}
                        </h2>
                        <p className="section-subtitle mb-10">
                            {t('contact.subtitle')}
                        </p>

                        <div className="space-y-8">
                            <ContactInfoItem icon="email" label={t('contact.info.emailLabel')} value={t('contact.info.emailClickText')} href={`mailto:${publicContact.email}`} detail={publicContact.email} copyText={publicContact.email} copyLabel={t('contact.info.copy')} copiedLabel={t('contact.info.copied')} />
                            <ContactInfoItem icon="phone" label={t('contact.info.phoneLabel')} value={t('contact.info.phoneClickText')} href={`https://wa.me/${operationalContact.whatsapp}`} target="_blank" detail={publicContact.phone} />
                        </div>
                    </div>

                    {/* Form Column */}
                    <div className="w-full lg:w-2/3">
                        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100">
                            {submitted ? (
                                <div className="h-full flex items-center justify-center min-h-[400px] flex-col text-center">
                                    <div className="w-20 h-20 bg-[#1781ab]/10 rounded-full flex items-center justify-center text-[#1781ab] mb-6">
                                        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{t('contact.form.successTitle')}</h3>
                                    <p className="text-gray-600">{t('contact.form.successMessage')}</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <InputField name="name" label={t('contact.form.name')} value={formData.name} onChange={handleChange} required />
                                        <InputField name="company" label={t('contact.form.company')} value={formData.company} onChange={handleChange} />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <InputField name="email" label={t('contact.form.email')} type="email" value={formData.email} onChange={handleChange} required />
                                        <InputField name="phone" label={t('contact.form.phone')} type="tel" value={formData.phone} onChange={handleChange} />
                                    </div>
                                    <InputField name="website" label={t('contact.form.website')} type="text" value={formData.website} onChange={handleChange} placeholder="https://www.suaempresa.com.br" />
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <SelectField name="users" label={t('contact.form.users')} placeholder={t('contact.form.selectPlaceholder')} options={t('contact.form.usersOptions') as unknown as string[]} value={formData.users} onChange={handleChange} />
                                        <SelectField name="segment" label={t('contact.form.segment')} placeholder={t('contact.form.selectPlaceholder')} options={t('contact.form.segmentOptions') as unknown as string[]} value={formData.segment} onChange={handleChange} />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.message')}</label>
                                        <textarea
                                            name="message"
                                            rows={4}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1781ab] focus:ring-2 focus:ring-[#1781ab]/20 outline-none transition-all resize-none bg-white focus:bg-white"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>

                                    {/* LGPD Consent */}
                                    <div className="mb-6">
                                        <label className="flex items-start gap-3 cursor-pointer group">
                                            <div className="relative flex items-center pt-1">
                                                <input
                                                    type="checkbox"
                                                    checked={consent}
                                                    onChange={handleConsentChange}
                                                    className="peer h-5 w-5 appearance-none rounded border border-gray-300 bg-white checked:bg-[#1781ab] checked:border-[#1781ab] focus:ring-2 focus:ring-[#1781ab]/20 transition-all cursor-pointer"
                                                />
                                                <svg className="absolute w-3.5 h-3.5 text-white left-0.5 top-1.5 opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors select-none">
                                                {t('contact.form.consentLabel')}
                                                <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#1781ab] hover:underline font-medium" onClick={(e) => e.stopPropagation()}>
                                                    {t('contact.form.privacyLink')}
                                                </a>.
                                            </span>
                                        </label>
                                        {showConsentError && (
                                            <p className="text-red-500 text-xs mt-2 ml-8 font-medium animate-pulse">
                                                {t('contact.form.consentError')}
                                            </p>
                                        )}
                                    </div>

                                    <p className="text-sm text-gray-400 mb-2 opacity-80">{t('contact.form.redirectWhatsApp')}</p>
                                    <button
                                        type="submit"
                                        disabled={!consent}
                                        className={`w-full bg-[#1781ab] hover:bg-[#136c90] text-white font-semibold py-3.5 rounded-full shadow-md hover:shadow-lg hover:shadow-[#1781ab]/25 transform active:scale-[0.99] transition-all flex items-center justify-center gap-2 ${!consent ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
                                        {t('contact.form.submitWhatsApp')}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

const ContactInfoItem = ({ icon, label, value, href, target, detail, copyText, copyLabel, copiedLabel }: { icon: 'email' | 'phone'; label: string; value: string; href?: string; target?: string; detail?: string; copyText?: string; copyLabel?: string; copiedLabel?: string }) => {
    const [copied, setCopied] = useState(false);
    const handleCopy = async () => {
        if (!copyText) return;
        try {
            await navigator.clipboard.writeText(copyText);
        } catch {
            const area = document.createElement('textarea');
            area.value = copyText;
            document.body.appendChild(area);
            area.select();
            document.execCommand('copy');
            document.body.removeChild(area);
        }
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    const extra = (detail || copyText) ? (
        <div className="flex items-center gap-2 mt-1 ml-16">
            {detail && <span className="text-sm text-gray-500 select-all break-all">{detail}</span>}
            {copyText && (
                <button type="button" onClick={handleCopy} className="text-xs font-medium text-[#1781ab] border border-[#1781ab]/30 rounded-full px-2.5 py-0.5 hover:bg-[#1781ab] hover:text-white transition-colors">
                    {copied ? copiedLabel : copyLabel}
                </button>
            )}
        </div>
    ) : null;
    const getIcon = () => {
        if (icon === 'email') return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
        return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
    };

    if (href) {
        return (
            <div>
            <a href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} className="flex items-start gap-4 group cursor-pointer hover:opacity-90">
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-[#1781ab] flex-shrink-0 group-hover:bg-[#1781ab] group-hover:text-white transition-colors duration-300">
                    {getIcon()}
                </div>
                <div>
                    <div className="text-gray-400 text-sm font-medium mb-0.5">{label}</div>
                    <div className="text-brand-dark font-semibold text-lg group-hover:text-[#1781ab] transition-colors duration-300">{value}</div>
                </div>
            </a>
            {extra}
            </div>
        );
    }

    return (
        <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-[#1781ab] flex-shrink-0">
                {getIcon()}
            </div>
            <div>
                <div className="text-gray-400 text-sm font-medium mb-0.5">{label}</div>
                <div className="text-brand-dark font-semibold text-lg">{value}</div>
            </div>
        </div>
    );
};

interface InputFieldProps {
    name: string;
    label: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    placeholder?: string;
}

const InputField = ({ name, label, type = "text", value, onChange, required, placeholder }: InputFieldProps) => (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <input
            type={type}
            name={name}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1781ab] focus:ring-2 focus:ring-[#1781ab]/20 outline-none transition-all bg-white focus:bg-white"
            value={value}
            onChange={onChange}
            required={required}
            placeholder={placeholder}
        />
    </div>
);

interface SelectFieldProps {
    name: string;
    label: string;
    placeholder: string;
    options: string[];
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectField = ({ name, label, placeholder, options, value, onChange }: SelectFieldProps) => (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <select
            name={name}
            className={`w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1781ab] focus:ring-2 focus:ring-[#1781ab]/20 outline-none transition-all bg-white ${value ? 'text-gray-900' : 'text-gray-400'}`}
            value={value}
            onChange={onChange}
        >
            <option value="">{placeholder}</option>
            {(Array.isArray(options) ? options : []).map((opt) => (
                <option key={opt} value={opt} className="text-gray-900">{opt}</option>
            ))}
        </select>
    </div>
);
