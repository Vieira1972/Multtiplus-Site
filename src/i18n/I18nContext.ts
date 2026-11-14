import { createContext } from 'react';

export type Locale = 'pt-BR' | 'es' | 'en';

export interface I18nContextType {
    lang: Locale;
    setLang: (lang: Locale) => void;
    t: (path: string) => string;
}

export const I18nContext = createContext<I18nContextType | undefined>(undefined);
