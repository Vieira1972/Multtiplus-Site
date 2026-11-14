import { useMemo } from 'react';
import { useI18n } from '../i18n';
import { extractLegalMeta, LegalPageLayout } from '../components/LegalPageLayout';

// CLIENT EDITING: Edit the policy text in src/content/legal/cookies.*.md
import cookiesPT from '../content/legal/cookies.pt-BR.md?raw';
import cookiesEN from '../content/legal/cookies.en.md?raw';
import cookiesES from '../content/legal/cookies.es.md?raw';

export const CookiesPolicy = () => {
    const { lang, t } = useI18n();

    const rawMarkdown = useMemo(() => {
        switch (lang) {
            case 'en': return cookiesEN;
            case 'es': return cookiesES;
            default: return cookiesPT;
        }
    }, [lang]);

    return (
        <LegalPageLayout
            title={t('cookies.title')}
            kicker={t('cookies.kicker')}
            subtitle={t('cookies.subtitle')}
            backLabel={t('cookies.backToSite')}
            rawMarkdown={rawMarkdown}
            versionLabel={t('legal.version')}
            updatedLabel={t('legal.updated')}
            meta={extractLegalMeta(rawMarkdown)}
        />
    );
};
