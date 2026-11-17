import { useI18n } from '../i18n';

export const Hero = () => {
    // EDIT TEXTS IN: src/i18n/locales/pt-BR.json | en.json | es.json
    // Keys used here: hero.badge, hero.title.line1, hero.title.highlight, hero.subtitle, hero.ctaPrimary, hero.ctaSecondary
    const { t } = useI18n();
    const titleWords = t('hero.title.line1').split(' ');
    const titleLineOne = titleWords.length > 2 ? titleWords.slice(0, -2).join(' ') : t('hero.title.line1');
    const titleLineTwoLead = titleWords.length > 2 ? titleWords.slice(-2).join(' ') : '';

    return (
        <section 
            id="home" 
            className="relative min-h-screen flex items-center pt-32 overflow-hidden bg-white text-gray-900"
        >
            <div className="w-[calc(100%-48px)] max-w-7xl mx-auto px-6 md:px-8 relative z-10">
                <div className="w-full max-w-5xl mx-auto text-center flex flex-col items-center">

                    {/* Badge */}
                    <div className="homepage-kicker hero-kicker-sf font-bold mb-6 animate-fade-in-up">
                        {t('hero.badge')}
                    </div>

                    {/* Headline */}
                    <h1 className="odoo-title text-[#1781ab] w-full max-w-5xl text-center text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl mb-6 animate-fade-in-up delay-100">
                        <span className="block">{titleLineOne}</span>
                        <span className="block text-[0.95em] lg:whitespace-nowrap lg:-translate-x-1 xl:-translate-x-2">
                            {titleLineTwoLead} {t('hero.title.highlight')}
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p className="section-subtitle hero-subtitle-sf font-bold mb-10 max-w-2xl animate-fade-in-up delay-200">
                        {t('hero.subtitle')}
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up delay-300">
                        <a href="#services" className="bg-[#714B67] hover:bg-[#5F3F58] text-white font-bold py-3.5 px-8 rounded-full transition-all shadow-lg transform hover:-translate-y-1 block text-center sm:inline-block">
                            {t('hero.ctaPrimary')}
                        </a>
                        <a href="#contact" className="bg-[#F3F4F6] hover:bg-[#E9ECEF] border border-[#E5E7EB] text-[#714B67] font-medium py-3.5 px-8 rounded-full transition-all block text-center sm:inline-block">
                            {t('hero.ctaSecondary')}
                        </a>
                    </div>
                </div>
            </div>

            {/* Smooth elegant organic wave transition to the light-gray section */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none" style={{ lineHeight: 0 }}>
                <svg
                    viewBox="0 0 1440 120"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    className="w-full h-12 md:h-24 lg:h-32 block"
                >
                    <path
                        d="M0,120 L1440,120 L1440,60 C960,0 480,0 0,60 Z"
                        fill="#F5F5F7"
                    />
                </svg>
            </div>
        </section>
    );
};
