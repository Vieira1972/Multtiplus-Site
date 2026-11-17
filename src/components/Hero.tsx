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
            {/* Ambient Background Glow */}
            <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[350px] sm:h-[450px] bg-gradient-to-b from-[#1781ab]/10 via-[#1781ab]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />

            <div className="w-[calc(100%-48px)] max-w-7xl mx-auto px-6 md:px-8 relative z-10">
                <div className="w-full max-w-5xl mx-auto text-center flex flex-col items-center">

                    {/* Badge */}
                    <div className="hero-kicker-sf mb-6 animate-fade-in-up">
                        <span className="w-2 h-2 rounded-full bg-[#1781ab] animate-pulse mr-1"></span>
                        {t('hero.badge')}
                    </div>

                    {/* Headline */}
                    <h1 className="hero-title-sf text-brand-dark w-full max-w-5xl text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up delay-100">
                        <span className="block">{titleLineOne}</span>
                        <span className="block text-[0.96em] lg:whitespace-nowrap">
                            {titleLineTwoLead} <span className="text-[#1781ab]">{t('hero.title.highlight')}</span>
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p className="hero-subtitle-sf mb-10 max-w-3xl text-balance animate-fade-in-up delay-200">
                        {t('hero.subtitle')}
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up delay-300">
                        <a 
                            href="#services" 
                            className="bg-[#1781ab] hover:bg-[#136c90] text-white font-semibold py-3.5 px-8 rounded-full transition-all shadow-md hover:shadow-lg hover:shadow-[#1781ab]/25 transform hover:-translate-y-0.5 block text-center sm:inline-block"
                        >
                            {t('hero.ctaPrimary')}
                        </a>
                        <a 
                            href="#contact" 
                            className="bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 text-gray-700 font-medium py-3.5 px-8 rounded-full transition-all shadow-sm transform hover:-translate-y-0.5 block text-center sm:inline-block"
                        >
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
