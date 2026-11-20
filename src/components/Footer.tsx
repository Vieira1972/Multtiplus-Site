import { useI18n } from '../i18n';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { publicContact } from '../config/publicContact';

export const Footer = () => {
    // EDIT TEXTS IN: src/i18n/locales/pt-BR.json | en.json | es.json
    // Keys used here: footer.*
    const { t } = useI18n();
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavigation = (id: string) => {
        if (location.pathname === '/') {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate(`/#${id}`);
        }
    };

    return (
        <footer className="bg-[#1F2430] text-[#C9CED8] pt-16 border-t border-white/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <img
                                src="/Images/Logo-Branco.png"
                                alt="Multtiplus"
                                className="h-12 w-12 md:h-14 md:w-14 object-contain flex-shrink-0"
                            />
                            <span className="text-lg md:text-xl font-semibold leading-tight tracking-tight text-white">{t('header.brandName')}</span>
                        </div>
                        <p className="text-[#A8AFBD] text-sm leading-relaxed mb-6">
                            {t('footer.tagline')}
                        </p>
                        <div className="flex gap-4">
                            {/* Social Placeholders */}
                            <div className="w-10 h-10 rounded-full bg-white/5 text-[#C9CED8] hover:bg-[#1781ab] hover:text-white transition-colors flex items-center justify-center cursor-pointer">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/5 text-[#C9CED8] hover:bg-[#1781ab] hover:text-white transition-colors flex items-center justify-center cursor-pointer">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </div>
                        </div>
                        <a
                            href="https://www.odoo.com/pt_BR/partners"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex items-center rounded-xl bg-white px-3 py-2 shadow-md ring-1 ring-white/10 hover:shadow-lg transition-shadow"
                            aria-label="Odoo Silver Partner"
                        >
                            <img src="/partners/odoo-silver-partner.png" alt="Odoo Silver Partner" className="h-16 w-auto" loading="lazy" />
                        </a>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-white">{t('footer.quickLinksTitle')}</h4>
                        <ul className="space-y-3">
                            <li><button onClick={() => handleNavigation('home')} className="text-[#A8AFBD] hover:text-white transition-colors text-left">{t('header.nav.home')}</button></li>
                            <li><button onClick={() => handleNavigation('services')} className="text-[#A8AFBD] hover:text-white transition-colors text-left">{t('header.nav.services')}</button></li>
                            <li><button onClick={() => handleNavigation('partners')} className="text-[#A8AFBD] hover:text-white transition-colors text-left">{t('header.nav.partners')}</button></li>
                            <li><button onClick={() => handleNavigation('about')} className="text-[#A8AFBD] hover:text-white transition-colors text-left">{t('header.nav.about')}</button></li>
                            <li><button onClick={() => handleNavigation('contact')} className="text-[#A8AFBD] hover:text-white transition-colors text-left">{t('header.nav.contact')}</button></li>
                        </ul>
                    </div>

                    {/* Contact & Legal */}
                    <div className="lg:col-span-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                            <div>
                                <h4 className="font-bold text-lg mb-6 text-white">{t('footer.contactTitle')}</h4>
                                <ul className="space-y-3 text-[#A8AFBD] text-sm">
                                    <li>
                                        <a href={`mailto:${publicContact.email}`} className="flex items-center gap-3 hover:text-white transition-colors group">
                                            <svg className="w-5 h-5 text-[#C9CED8] group-hover:text-white transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 00-2-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                            <span className="underline decoration-white/30 underline-offset-4">{t('contact.info.emailClickText')}</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={`https://wa.me/${publicContact.phone.replace(/[^0-9]/g, '')}`} className="flex items-center gap-3 hover:text-white transition-colors group">
                                            <svg className="w-5 h-5 text-[#C9CED8] group-hover:text-white transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                            <span className="underline decoration-white/30 underline-offset-4">{t('contact.info.phoneClickText')}</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-6 text-white">{t('footer.legalTitle')}</h4>
                                <ul className="space-y-3">
                                    <li><Link to="/privacy-policy" className="text-[#A8AFBD] hover:text-white transition-colors">{t('footer.privacy')}</Link></li>
                                    <li><Link to="/terms-of-use" className="text-[#A8AFBD] hover:text-white transition-colors">{t('footer.terms')}</Link></li>
                                    <li><Link to="/cookies-policy" className="text-[#A8AFBD] hover:text-white transition-colors">{t('footer.cookies')}</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="mt-12 bg-[#171B24] py-6 text-center text-[#A8AFBD] text-sm">
                {t('footer.copyright')}
            </div>
        </footer>
    );
};


