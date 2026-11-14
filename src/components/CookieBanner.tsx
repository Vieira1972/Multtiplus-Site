import { useState, useEffect } from 'react';
import { useI18n } from '../i18n';
import { Link } from 'react-router-dom';

export const CookieBanner = () => {
    const { t } = useI18n();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('multtiplus_cookie_consent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('multtiplus_cookie_consent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('multtiplus_cookie_consent', 'declined');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in-up">
            <div className="container mx-auto px-4">
                <div className="bg-brand-dark/95 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">

                    <div className="flex-1">
                        <h3 className="text-white font-bold mb-2">{t('cookieBanner.title')}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            {t('cookieBanner.body')}{' '}
                            <Link to="/privacy-policy" className="text-[#C9CED8] hover:text-white hover:underline">
                                {t('cookieBanner.link')}
                            </Link>.
                        </p>
                    </div>

                    <div className="flex items-center gap-3 w-full md:w-auto">
                        <button
                            onClick={handleDecline}
                            className="flex-1 md:flex-none py-2.5 px-6 rounded-lg font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 whitespace-nowrap"
                        >
                            {t('cookieBanner.decline')}
                        </button>
                        <button
                            onClick={handleAccept}
                            className="flex-1 md:flex-none bg-[#714B67] hover:bg-[#5F3F58] text-white font-bold py-2.5 px-6 rounded-lg transition-all shadow-lg hover:shadow-[#714B67]/20 whitespace-nowrap"
                        >
                            {t('cookieBanner.accept')}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};
