import { useState } from 'react';
import type { ReactNode } from 'react';
import { I18nContext } from './I18nContext';
import type { Locale } from './I18nContext';
import ptBR from './locales/pt-BR.json';
import es from './locales/es.json';
import en from './locales/en.json';

type Translations = typeof ptBR;

const locales: Record<Locale, Translations> = {
    'pt-BR': ptBR,
    'es': es,
    'en': en,
};

export const I18nProvider = ({ children }: { children: ReactNode }) => {
    // Initialize state lazily to avoid confusing useEffect logic with React strict mode
    const [lang, setLangState] = useState<Locale>(() => {
        try {
            const savedLang = localStorage.getItem('lang') as Locale;
            if (savedLang && locales[savedLang]) {
                return savedLang;
            }

            const browserLang = navigator.language;
            if (browserLang.startsWith('pt')) {
                localStorage.setItem('lang', 'pt-BR');
                return 'pt-BR';
            } else if (browserLang.startsWith('es')) {
                localStorage.setItem('lang', 'es');
                return 'es';
            } else {
                localStorage.setItem('lang', 'en');
                return 'en';
            }
        } catch {
            return 'pt-BR';
        }
    });

    const setLang = (newLang: Locale) => {
        setLangState(newLang);
        localStorage.setItem('lang', newLang);
    };

    const t = (path: string) => {
        const keys = path.split('.');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let current: any = locales[lang];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let fallback: any = locales['pt-BR'];

        for (const key of keys) {
            if (current && current[key] !== undefined) {
                current = current[key];
            } else {
                current = undefined;
            }

            if (fallback && fallback[key] !== undefined) {
                fallback = fallback[key];
            } else {
                fallback = undefined;
            }
        }

        return (current as string) || (fallback as string) || path;
    };

    return (
        <I18nContext.Provider value={{ lang, setLang, t }}>
            {children}
        </I18nContext.Provider>
    );
};
