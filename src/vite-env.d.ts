/// <reference types="vite/client" />

interface ImportMetaEnv {
    /** URL of the Odoo controller that creates the crm.lead. Empty = WhatsApp only. */
    readonly VITE_LEAD_ENDPOINT?: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
