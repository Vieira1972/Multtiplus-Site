import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useI18n } from '../i18n';
import { LanguageSwitch } from './LanguageSwitch';
import logoMark from '../assets/brand/logo-multtiplus-mark.png';

export const Header = () => {
    // EDIT TEXTS IN: src/i18n/locales/pt-BR.json | en.json | es.json
    // Keys used here: header.nav.home, header.nav.services, header.nav.partners, header.nav.about, header.nav.contact, header.cta
    const { t } = useI18n();
    const location = useLocation();
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const handleNavigation = (id: string) => {
        if (location.pathname === '/') {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate(`/#${id}`);
        }
    };

    return (
        <header
            className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-48px)] max-w-7xl h-20 bg-white shadow-md rounded-3xl border border-white/30 flex items-center"
        >
            <div className="w-full px-6 md:px-8">
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <div className="flex-1 flex items-center justify-start">
                        <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => handleNavigation('home')}>
                            <img
                                src={logoMark}
                                alt="Multtiplus Logo"
                                className="h-12 md:h-14 w-auto object-contain flex-shrink-0"
                            />
                            <span className="text-sm sm:text-base font-semibold leading-tight tracking-tight text-brand-dark transition-colors whitespace-nowrap">
                                {t('header.brandName')}
                            </span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center justify-center gap-8">
                        <button onClick={() => handleNavigation('home')} className="font-medium transition-colors duration-300 text-sm uppercase tracking-wide text-gray-600 hover:text-[#1781ab] text-left">{t('header.nav.home')}</button>
                        <button onClick={() => handleNavigation('services')} className="font-medium transition-colors duration-300 text-sm uppercase tracking-wide text-gray-600 hover:text-[#1781ab] text-left">{t('header.nav.services')}</button>
                        <button onClick={() => handleNavigation('partners')} className="font-medium transition-colors duration-300 text-sm uppercase tracking-wide text-gray-600 hover:text-[#1781ab] text-left">{t('header.nav.partners')}</button>
                        <button onClick={() => handleNavigation('about')} className="font-medium transition-colors duration-300 text-sm uppercase tracking-wide text-gray-600 hover:text-[#1781ab] text-left">{t('header.nav.about')}</button>
                        <button onClick={() => handleNavigation('contact')} className="font-medium transition-colors duration-300 text-sm uppercase tracking-wide text-gray-600 hover:text-[#1781ab] text-left">{t('header.nav.contact')}</button>
                    </nav>

                    {/* Right Side Actions */}
                    <div className="flex-1 flex items-center justify-end gap-6">
                        <div className="hidden lg:flex items-center gap-6">
                            <LanguageSwitch />
                            <button
                                onClick={() => handleNavigation('contact')}
                                className="px-6 py-2 rounded-full font-semibold text-sm transition-all transform hover:-translate-y-0.5 bg-[#1781ab] hover:bg-[#136c90] text-white shadow-md"
                            >
                                {t('header.cta')}
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden flex items-center gap-4">
                            <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 text-brand-dark">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div 
                    className="fixed inset-[-100vh] lg:hidden bg-black/50 z-[90]" 
                    style={{ left: '-100vw', right: '-100vw', top: '-100vh', bottom: '-100vh' }}
                    onClick={() => setIsMobileMenuOpen(false)} 
                />
            )}

            {/* Mobile Menu Drawer */}
            <div className={`fixed top-[-20px] right-[calc(50%-50vw)] h-[100vh] w-[280px] sm:w-[320px] bg-white shadow-2xl z-[100] transform transition-transform duration-300 ease-in-out lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}>
                <div className="p-6 flex justify-end">
                    <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-brand-dark mt-4 mr-4">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <nav className="flex-1 flex flex-col gap-6 px-8 py-4 overflow-y-auto mt-8">
                    <button onClick={() => { setIsMobileMenuOpen(false); handleNavigation('home'); }} className="font-bold text-lg text-brand-dark text-left uppercase tracking-wide">{t('header.nav.home')}</button>
                    <button onClick={() => { setIsMobileMenuOpen(false); handleNavigation('services'); }} className="font-bold text-lg text-brand-dark text-left uppercase tracking-wide">{t('header.nav.services')}</button>
                    <button onClick={() => { setIsMobileMenuOpen(false); handleNavigation('partners'); }} className="font-bold text-lg text-brand-dark text-left uppercase tracking-wide">{t('header.nav.partners')}</button>
                    <button onClick={() => { setIsMobileMenuOpen(false); handleNavigation('about'); }} className="font-bold text-lg text-brand-dark text-left uppercase tracking-wide">{t('header.nav.about')}</button>
                    <button onClick={() => { setIsMobileMenuOpen(false); handleNavigation('contact'); }} className="font-bold text-lg text-brand-dark text-left uppercase tracking-wide">{t('header.nav.contact')}</button>
                </nav>
                <div className="p-8 border-t border-gray-100 flex flex-col gap-6 mb-8">
                    <LanguageSwitch />
                    <button
                        onClick={() => { setIsMobileMenuOpen(false); handleNavigation('contact'); }}
                        className="w-full py-3 rounded-full font-semibold text-sm bg-[#1781ab] hover:bg-[#136c90] text-white shadow-md"
                    >
                        {t('header.cta')}
                    </button>
                </div>
            </div>
        </header>
    );
};
