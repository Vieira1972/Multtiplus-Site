import { useI18n } from '../i18n';

export const CustomServices = () => {
    const { t } = useI18n();

    const subitemCounts = [0, 0, 4, 3, 2, 4, 0];
    const categories = subitemCounts.map((subitemCount, index) => ({
        title: t(`customServices.items.${index}.title`),
        items: Array.from({ length: subitemCount }, (_, itemIndex) => t(`customServices.items.${index}.items.${itemIndex}`)),
    }));

    return (
        <section className="relative py-24 lg:py-32 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-12 xl:gap-20 items-start">
                    <div className="lg:sticky lg:top-32">
                        <span className="homepage-kicker mb-5">
                            {t('customServices.kicker')}
                        </span>
                        <h2 className="odoo-section-title mb-6">
                            {t('customServices.title')}
                        </h2>
                        <p className="section-subtitle">
                            {t('customServices.subtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
                        {categories.map((category, index) => (
                            <div
                                key={category.title}
                                className={`service-card group ${index === categories.length - 1 && categories.length % 2 === 1 ? "md:col-span-2" : ""}`}
                                style={{ animationDelay: `${index * 45}ms` }}
                            >
                                <div className="flex items-start gap-3.5">
                                    <div className="service-card-marker mt-0.5">
                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div className="min-w-0">
                                        <div className="mb-2 text-xs font-bold text-tech-blue">
                                            {String(index + 1).padStart(2, '0')}
                                        </div>
                                        <h3 className="text-[0.9375rem] md:text-base font-semibold text-brand-dark leading-normal">
                                            {category.title}
                                        </h3>

                                        {category.items.length > 0 && (
                                            <div className="mt-4 flex flex-wrap gap-1.5">
                                                {category.items.map((item) => (
                                                    <span
                                                        key={item}
                                                        className="service-chip"
                                                    >
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

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
