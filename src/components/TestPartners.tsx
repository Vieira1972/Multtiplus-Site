import { useI18n } from '../i18n';

export const TestPartners = () => {
    // EDIT TEXTS IN: src/i18n/locales/pt-BR.json | en.json | es.json
    // Keys used here: partners.kicker, partners.title, partners.subtitle
    const { t } = useI18n();

    return (
        <section id="partners" className="relative py-36 lg:py-48 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Editorial section header */}
                <div className="text-center max-w-3xl mx-auto mb-24">
                    <span className="inline-block text-tech-blue font-bold tracking-[0.18em] uppercase text-xs mb-4 px-3 py-1 rounded-full border border-tech-blue/30 bg-tech-blue/5">
                        {t('partners.kicker')}
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-6 leading-tight">
                        {t('partners.title')}
                    </h2>
                    <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
                        {t('partners.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                    {[1, 2, 3, 4, 5, 6].map((num, index) => (
                        <PartnerCard
                            key={num}
                            name={`Partner ${num}`}
                            initials={`P${num}`}
                            delay={index * 100}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

const PartnerCard = ({ name, initials, delay }: { name: string; initials: string; delay: number }) => (
    <div
        className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100/80 group flex flex-col items-center justify-center hover:-translate-y-1 animate-fade-in-up"
        style={{ animationDelay: `${delay}ms` }}
    >
        <div className="w-20 h-20 mb-5 relative flex items-center justify-center">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-brand-light to-white flex items-center justify-center text-gray-400 font-bold text-xl group-hover:from-brand-light group-hover:text-tech-blue transition-all duration-300 border border-gray-100 shadow-sm">
                {initials}
            </div>
        </div>

        <h3 className="text-base font-semibold text-gray-400 group-hover:text-brand-dark transition-colors duration-300">
            {name}
        </h3>
    </div>
);
