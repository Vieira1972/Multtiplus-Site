import { useI18n } from '../i18n';
import logoMark from '../assets/brand/logo-multtiplus-mark.png';

export const About = () => {
    // EDIT TEXTS IN: src/i18n/locales/pt-BR.json | en.json | es.json
    // Keys used here: about.title, about.body, about.bullets.N, about.cta
    const { t } = useI18n();
    const paragraphs = t('about.body').split('\n\n');

    return (
        <section className="relative py-36 lg:py-48 bg-brand-light">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-20 xl:gap-32">

                    {/* Image/Visual Column */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[5/4] group">
                            <img
                                src="/Services/meeting.jpg"
                                alt="Team collaboration"
                                className="w-full h-full object-cover object-[50%_42%] transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent"></div>

                            {/* Visual Card */}
                            <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl text-white">
                                <div className="flex items-center gap-4">
                                    <img
                                        src={logoMark}
                                        alt="Multtiplus Symbol"
                                        className="h-12 md:h-16 w-auto object-contain"
                                    />
                                    <div>
                                        <div className="text-xl font-bold">{t('header.brandName')}</div>
                                        <div className="text-sm text-gray-300">{t('hero.badge')}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decoration */}
                        <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-[#714B67]/10 rounded-2xl hidden lg:block"></div>
                    </div>

                    {/* Content Column */}
                    <div className="w-full lg:w-1/2">
                        <div id="about" className="scroll-anchor" aria-hidden="true" />
                        <span className="homepage-kicker mb-5">
                            {t('header.nav.about')}
                        </span>
                        <h2 className="odoo-section-title mb-6">
                            {t('about.title')}
                        </h2>

                        <div className="space-y-5 text-lg text-gray-500 mb-10 leading-relaxed">
                            {paragraphs.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                            {[0, 1, 2, 3].map((index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#714B67] shadow-sm">
                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="font-medium text-brand-dark text-sm">{t(`about.bullets.${index}`)}</span>
                                </div>
                            ))}
                        </div>

                        <a href="#contact" className="bg-[#714B67] hover:bg-[#5F3F58] text-white font-bold py-3.5 px-8 rounded-full transition-all shadow-lg transform hover:-translate-y-1 inline-block text-center">
                            {t('about.cta')}
                        </a>
                    </div>

                </div>
            </div>

            {/* Smooth elegant organic wave transition to the white section */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none" style={{ lineHeight: 0 }}>
                <svg
                    viewBox="0 0 1440 120"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    className="w-full h-12 md:h-24 lg:h-32 block"
                >
                    <path
                        d="M0,120 L1440,120 L1440,60 C960,0 480,0 0,60 Z"
                        fill="#ffffff"
                    />
                </svg>
            </div>
        </section>
    );
};
