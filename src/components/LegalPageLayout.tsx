import { useEffect, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Header } from './Header';
import { Footer } from './Footer';

type LegalMeta = {
    version?: string;
    lastUpdated?: string;
};

type LegalPageLayoutProps = {
    title: string;
    kicker: string;
    subtitle: string;
    backLabel: string;
    rawMarkdown: string;
    versionLabel: string;
    updatedLabel: string;
    meta?: LegalMeta;
    actions?: ReactNode;
    footerPanel?: ReactNode;
};

export const extractLegalMeta = (markdown: string): LegalMeta => {
    const meta: LegalMeta = {};

    markdown.split('\n').forEach((line) => {
        const trimmed = line.trim();
        if (!trimmed.startsWith('**')) return;

        const normalized = trimmed.toLowerCase();
        const value = trimmed.split('**')[2]?.trim();
        if (!value) return;

        if (normalized.includes('version') || normalized.includes('vers')) {
            meta.version = value;
        }

        if (
            normalized.includes('last updated') ||
            normalized.includes('updated') ||
            normalized.includes('atualiza') ||
            normalized.includes('actualiza') ||
            normalized.includes('ltima')
        ) {
            meta.lastUpdated = value;
        }
    });

    return meta;
};

const removeDocumentChrome = (markdown: string) => (
    markdown
        .split('\n')
        .filter((line) => {
            const trimmed = line.trim().toLowerCase();
            if (trimmed.startsWith('# ')) return false;
            if (!trimmed.startsWith('**')) return true;
            return !(
                trimmed.includes('version') ||
                trimmed.includes('vers') ||
                trimmed.includes('updated') ||
                trimmed.includes('atualiza') ||
                trimmed.includes('actualiza') ||
                trimmed.includes('ltima')
            );
        })
        .join('\n')
);

export const LegalPageLayout = ({
    title,
    kicker,
    subtitle,
    backLabel,
    rawMarkdown,
    versionLabel,
    updatedLabel,
    meta,
    actions,
    footerPanel,
}: LegalPageLayoutProps) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documentMeta = meta ?? extractLegalMeta(rawMarkdown);
    const bodyMarkdown = removeDocumentChrome(rawMarkdown);

    return (
        <div className="min-h-screen bg-white font-sans antialiased text-brand-dark selection:bg-[#2EAADC]/30 flex flex-col">
            <Header />

            <main className="flex-grow">
                <section className="relative overflow-hidden bg-white pt-40 pb-20 md:pt-48 md:pb-28">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <span className="inline-block text-[#1B7FA8] font-bold tracking-[0.18em] uppercase text-xs mb-6 px-3 py-1 rounded-full border-y border-r border-[#2EAADC]/30 border-l-2 border-l-accent-yellow bg-[#2EAADC]/10">
                            {kicker}
                        </span>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-brand-dark">
                            {title}
                        </h1>

                        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                            {subtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                            <Link to="/" className="inline-flex items-center gap-2 text-[#1B7FA8] hover:text-[#2EAADC] transition-colors text-sm font-semibold group order-2 sm:order-1">
                                <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                {backLabel}
                            </Link>
                            {actions && (
                                <div className="order-1 sm:order-2">
                                    {actions}
                                </div>
                            )}
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

                <section className="py-16 md:py-24 bg-brand-light">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <article className="max-w-4xl mx-auto bg-white p-6 sm:p-8 md:p-12 lg:p-16 rounded-2xl shadow-sm border border-gray-100/80">
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-between items-start sm:items-center text-sm text-gray-500 mb-10 pb-8 border-b border-gray-100">
                                {documentMeta.version && (
                                    <span className="font-medium bg-brand-light px-3 py-1.5 rounded-full border border-gray-100">
                                        {versionLabel} {documentMeta.version}
                                    </span>
                                )}
                                {documentMeta.lastUpdated && (
                                    <span className="font-medium">
                                        {updatedLabel}: {documentMeta.lastUpdated}
                                    </span>
                                )}
                            </div>

                            <div className="max-w-none text-gray-600">
                                <ReactMarkdown
                                    components={{
                                        h1: () => null,
                                        h2: ({ node: _node, ...props }) => <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4 mt-10 first:mt-0 leading-tight" {...props} />,
                                        h3: ({ node: _node, ...props }) => <h3 className="text-xl font-bold text-brand-dark mb-3 mt-8 leading-tight" {...props} />,
                                        p: ({ node: _node, ...props }) => <p className="mb-5 leading-relaxed" {...props} />,
                                        ul: ({ node: _node, ...props }) => <ul className="list-disc pl-6 space-y-3 mt-4 mb-6 marker:text-[#2EAADC]" {...props} />,
                                        li: ({ node: _node, ...props }) => <li className="pl-2 leading-relaxed" {...props} />,
                                        hr: ({ node: _node, ...props }) => <hr className="my-10 border-gray-100" {...props} />,
                                        strong: ({ node: _node, ...props }) => <strong className="font-bold text-brand-dark" {...props} />,
                                        a: ({ node: _node, ...props }) => <a className="text-[#1B7FA8] hover:text-[#2EAADC] hover:underline font-medium" {...props} />,
                                    }}
                                >
                                    {bodyMarkdown}
                                </ReactMarkdown>
                            </div>

                            {footerPanel && (
                                <div className="mt-14 pt-10 border-t border-gray-100 bg-brand-light -mx-6 sm:-mx-8 md:-mx-12 lg:-mx-16 px-6 sm:px-8 md:px-12 lg:px-16 pb-6 sm:pb-8 md:pb-12 lg:pb-16 -mb-6 sm:-mb-8 md:-mb-12 lg:-mb-16 rounded-b-2xl">
                                    {footerPanel}
                                </div>
                            )}
                        </article>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};
