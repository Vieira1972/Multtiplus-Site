import { useMemo } from 'react';
import { useI18n } from '../i18n';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { PrivacyPolicyPDF } from '../components/PrivacyPolicyPDF';
import { parseMarkdownToContent } from '../utils/privacyPolicyParser';
import { LegalPageLayout } from '../components/LegalPageLayout';

// CLIENT EDITING: Edit the policy text in src/content/legal/privacy.*.md
import privacyPT from '../content/legal/privacy.pt-BR.md?raw';
import privacyEN from '../content/legal/privacy.en.md?raw';
import privacyES from '../content/legal/privacy.es.md?raw';

export const PrivacyPolicy = () => {
    const { lang, t } = useI18n();

    const rawMarkdown = useMemo(() => {
        switch (lang) {
            case 'en': return privacyEN;
            case 'es': return privacyES;
            default: return privacyPT;
        }
    }, [lang]);

    const content = useMemo(() => {
        return parseMarkdownToContent(rawMarkdown);
    }, [rawMarkdown]);

    return (
        <LegalPageLayout
            title={t('privacy.title')}
            kicker={t('privacy.kicker')}
            subtitle={t('privacy.subtitle')}
            backLabel={t('privacy.backToSite')}
            rawMarkdown={rawMarkdown}
            versionLabel={t('legal.version')}
            updatedLabel={t('legal.updated')}
            meta={content.meta}
            actions={
                <PDFDownloadLink
                    document={<PrivacyPolicyPDF content={content} />}
                    fileName="multtiplus-privacy-policy-v1.0-2026-02-17.pdf"
                    className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 px-6 rounded-full transition-all shadow-sm"
                >
                    {/* @ts-ignore */}
                    {({ loading }) => (
                        <>
                            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            {loading ? t('privacy.buildingPdf') : t('privacy.downloadPdf')}
                        </>
                    )}
                </PDFDownloadLink>
            }
            footerPanel={content.dpo.email && (
                <>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-[#2EAADC] flex-shrink-0">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-brand-dark">{content.dpo.label}</h3>
                    </div>
                    <a href={`mailto:${content.dpo.email}`} className="text-[#1B7FA8] font-medium hover:text-[#2EAADC] hover:underline text-lg break-all sm:ml-16">
                        {content.dpo.email}
                    </a>
                </>
            )}
        />
    );
};
