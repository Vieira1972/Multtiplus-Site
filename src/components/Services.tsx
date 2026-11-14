import { useI18n } from '../i18n';

export const Services = () => {
    // EDIT TEXTS IN: src/i18n/locales/pt-BR.json | en.json | es.json
    // Keys: services.kicker, services.title, services.subtitle, services.items.N.title, services.items.N.description
    const { t } = useI18n();

    const serviceImages = [
        { src: '/Services/Restaurantes.jpg', position: '55% 70%' },
        { src: '/Services/Serviços.jpg', position: '35% 55%' },
        { src: '/Services/Distribuição.jpg', position: '70% 24%' },
        { src: '/Services/Varejo.jpg', position: '50% 42%' },
        { src: '/Services/Industria.jpg', position: '50% 58%' },
        { src: '/Services/Governo.jpg', position: '50% 32%' }
    ];

    return (
        <section className="relative py-36 lg:py-48 bg-brand-light">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Editorial section header */}
                <div id="services" className="scroll-anchor" aria-hidden="true" />
                <div className="text-center max-w-3xl mx-auto mb-24">
                    <span className="homepage-kicker mb-4">
                        {t('services.kicker')}
                    </span>
                    <h2 className="odoo-section-title mb-6">
                        {t('services.title')}
                    </h2>
                    <p className="section-subtitle max-w-2xl mx-auto">
                        {t('services.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto justify-items-center">
                    {serviceImages.map((image, index) => (
                        <ServiceCard
                            key={index}
                            imageSrc={image.src}
                            imagePosition={image.position}
                            title={t(`services.items.${index}.title`)}
                            description={t(`services.items.${index}.description`)}
                            cta={t('services.cardCta')}
                        />
                    ))}
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

const ServiceCard = ({ imageSrc, imagePosition, title, description, cta }: { imageSrc: string; imagePosition: string; title: string; description: string; cta: string }) => (
    <div
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        className="w-full max-w-[22.5rem] h-full bg-white rounded-2xl p-3 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100/80 group cursor-pointer hover:-translate-y-1 overflow-hidden flex flex-col"
    >
        <div className="px-5 pt-5">
            <h3 className="font-handwritten text-3xl sm:text-[2rem] font-bold leading-none text-brand-dark mb-5 group-hover:text-odoo-purple transition-colors duration-300">
                {title}
            </h3>
        </div>
        <div className="h-56 md:h-60 lg:h-64 rounded-xl overflow-hidden border border-gray-100 bg-brand-light mb-6">
            <img
                src={imageSrc}
                alt={title}
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                style={{ objectPosition: imagePosition }}
                loading="lazy"
            />
        </div>
        <div className="px-5 pb-5 flex flex-col flex-1">
            <p className="text-gray-500 text-sm leading-relaxed">
                {description}
            </p>
            <div className="mt-auto pt-6 flex items-center text-odoo-purple font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                {cta} <span className="ml-2">-&gt;</span>
            </div>
        </div>
    </div>
);
