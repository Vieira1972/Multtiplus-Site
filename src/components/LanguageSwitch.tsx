import { useI18n } from '../i18n';

export const LanguageSwitch = () => {
    const { lang, setLang } = useI18n();

    return (
        <div className="flex items-center gap-2">
            <button
                onClick={() => setLang('pt-BR')}
                className={`text-sm font-medium ${lang === 'pt-BR' ? 'text-[#1781ab]' : 'text-gray-500 hover:text-[#1781ab]'}`}
            >
                PT
            </button>
            <span className="text-gray-600">|</span>
            <button
                onClick={() => setLang('en')}
                className={`text-sm font-medium ${lang === 'en' ? 'text-[#1781ab]' : 'text-gray-500 hover:text-[#1781ab]'}`}
            >
                EN
            </button>
            <span className="text-gray-600">|</span>
            <button
                onClick={() => setLang('es')}
                className={`text-sm font-medium ${lang === 'es' ? 'text-[#1781ab]' : 'text-gray-500 hover:text-[#1781ab]'}`}
            >
                ES
            </button>
        </div>
    );
};
