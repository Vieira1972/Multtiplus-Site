import { useMemo } from 'react';
import { useI18n } from '../i18n';
import { extractLegalMeta, LegalPageLayout } from '../components/LegalPageLayout';

// CLIENT EDITING: Edit the terms text in src/content/legal/terms.*.md
import termsPT from '../content/legal/terms.pt-BR.md?raw';
import termsEN from '../content/legal/terms.en.md?raw';
import termsES from '../content/legal/terms.es.md?raw';

export const TermsOfUse = () => {
    const { lang, t } = useI18n();

    const rawMarkdown = useMemo(() => {
        switch (lang) {
            case 'en': return termsEN;
            case 'es': return termsES;
            default: return termsPT;
        }
    }, [lang]);

    return (
        <LegalPageLayout
            title={t('terms.title')}
            kicker={t('terms.kicker')}
            subtitle={t('terms.subtitle')}
            backLabel={t('terms.backToSite')}
            rawMarkdown={rawMarkdown}
            versionLabel={t('legal.version')}
            updatedLabel={t('legal.updated')}
            meta={extractLegalMeta(rawMarkdown)}
        />
    );
};
