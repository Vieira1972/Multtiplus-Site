import { useI18n } from '../i18n';

export const TestHero = () => {
    // EDIT TEXTS IN: src/i18n/locales/pt-BR.json | en.json | es.json
    // Keys used here: hero.badge, hero.title.line1, hero.title.highlight, hero.subtitle, hero.ctaPrimary, hero.ctaSecondary
    const { t } = useI18n();

    return (
        <section 
            id="home" 
            className="relative min-h-screen flex items-center pt-32 overflow-hidden bg-white text-gray-900"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center">

                    {/* Badge */}
                    <div className="inline-block px-4 py-1.5 rounded-full bg-brand-light border border-tech-blue/20 text-tech-blue text-sm font-semibold tracking-wide mb-8 animate-fade-in-up">
                        {t('hero.badge')}
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up delay-100">
                        {t('hero.title.line1')} <span className="text-tech-blue">
                            {t('hero.title.highlight')}
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-lg sm:text-xl text-gray-500 mb-10 max-w-2xl animate-fade-in-up delay-200">
                        {t('hero.subtitle')}
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up delay-300">
                        <a href="#services" className="bg-tech-blue hover:bg-tech-blue-hover text-brand-deep font-bold py-3.5 px-8 rounded-full transition-all shadow-lg hover:shadow-tech-blue/20 transform hover:-translate-y-1 block text-center sm:inline-block">
                            {t('hero.ctaPrimary')}
                        </a>
                        <a href="#contact" className="bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3.5 px-8 rounded-full transition-all block text-center sm:inline-block">
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
