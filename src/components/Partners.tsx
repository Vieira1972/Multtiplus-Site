import { useI18n } from '../i18n';
import { useState } from 'react';

type Partner = {
    name: string;
    logo: string;
    href?: string;
    logoPanelVariant?: 'default' | 'contrast';
};

export const Partners = () => {
    // EDIT TEXTS IN: src/i18n/locales/pt-BR.json | en.json | es.json
    // Keys used here: partners.kicker, partners.title, partners.subtitle
    const { t } = useI18n();
    const partners: Partner[] = [
        { name: t('partners.items.p1'), logo: '/partners/aws-logo.png' },
        { name: t('partners.items.p2'), logo: '/partners/azure-logo.png' },
        { name: t('partners.items.p3'), logo: '/partners/google-logo.png' },
        { name: t('partners.items.p4'), logo: '/partners/APIX%2002.png', href: 'https://apixtech.com.br/pt', logoPanelVariant: 'contrast' },
        { name: t('partners.items.p5'), logo: '/partners/tis-angola.svg', logoPanelVariant: 'contrast' },
        { name: t('partners.items.p6'), logo: '/partners/clarity-tec.png' },
    ];

    return (
        <section className="relative py-36 lg:py-48 bg-brand-light">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Editorial section header */}
                <div id="partners" className="scroll-anchor" aria-hidden="true" />
                <div className="text-center max-w-3xl mx-auto mb-24">
                    <span className="homepage-kicker mb-4">
                        {t('partners.kicker')}
                    </span>
                    <h2 className="odoo-section-title mb-6">
                        {t('partners.title')}
                    </h2>
                    <p className="section-subtitle max-w-2xl mx-auto">
                        {t('partners.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                    {partners.map((partner, index) => (
                        <PartnerCard
                            key={partner.name}
                            name={partner.name}
                            logo={partner.logo}
                            href={partner.href}
                            logoPanelVariant={partner.logoPanelVariant}
                            delay={index * 100}
                        />
                    ))}
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

const PartnerCard = ({ name, logo, href, logoPanelVariant, delay }: Partner & { delay: number }) => {
    const [imageFailed, setImageFailed] = useState(false);
    const panelClassName = logoPanelVariant === 'contrast'
        ? 'bg-[#E4E8EE] border-[#D4DAE3]'
        : 'bg-[#F1F3F6] border-[#E5E7EB]';

    const cardClassName = "bg-white rounded-2xl p-7 md:p-8 min-h-[180px] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100/80 group flex flex-col items-center justify-center hover:-translate-y-1 animate-fade-in-up";
    const cardContent = (
        <>
            <div className={`w-full h-24 md:h-28 mb-5 rounded-2xl border flex items-center justify-center px-7 py-6 transition-all duration-300 group-hover:border-odoo-purple/25 ${panelClassName}`}>
                {imageFailed ? (
                    <span className="text-base font-semibold text-brand-dark text-center">
                        {name}
                    </span>
                ) : (
                    <img
                        src={logo}
                        alt={name}
                        className="max-h-12 md:max-h-16 max-w-full object-contain"
                        loading="lazy"
                        onError={() => setImageFailed(true)}
                    />
                )}
            </div>

            <h3 className="text-base font-semibold text-brand-dark text-center group-hover:text-odoo-purple transition-colors duration-300">
                {name}
            </h3>
        </>
    );

    if (href) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${cardClassName} cursor-pointer`}
                style={{ animationDelay: `${delay}ms` }}
            >
                {cardContent}
            </a>
        );
    }

    return (
        <div
            className={cardClassName}
            style={{ animationDelay: `${delay}ms` }}
        >
            {cardContent}
        </div>
    );
};
