import type { PrivacyPolicyContent, Section } from '../content/privacyPolicy/types';

export const parseMarkdownToContent = (markdown: string): PrivacyPolicyContent => {
    const lines = markdown.split('\n');
    const content: PrivacyPolicyContent = {
        titleLines: ["Política de", "Privacidade"], // Default fallback
        meta: { version: "1.0", lastUpdated: "" },
        intro: "",
        sections: [],
        dpo: { label: "Encarregado de Dados (DPO)", email: "" }
    };

    let currentSection: Section | null = null;
    let inIntro = true;

    // Simple state machine
    for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed) continue;

        // Title (H1)
        if (trimmed.startsWith('# ')) {
            // We might parse this, but usually title is hardcoded or split. 
            // Let's rely on standard logic or simple split if needed.
            // For now, keep hardcoded defaults or try to parse if user wants.
            const title = trimmed.replace('# ', '');
            // Attempt to split common titles like "Privacy Policy" -> ["Privacy", "Policy"]
            const parts = title.split(' ');
            if (parts.length >= 2) {
                const mid = Math.ceil(parts.length / 2);
                content.titleLines = [parts.slice(0, mid).join(' '), parts.slice(mid).join(' ')];
            } else {
                content.titleLines = [title, ""];
            }
            continue;
        }

        // Meta
        if (trimmed.startsWith('**Version:**') || trimmed.startsWith('**Versão:**') || trimmed.startsWith('**Versión:**')) {
            content.meta.version = trimmed.split('**')[2].trim();
            continue;
        }
        if (trimmed.startsWith('**Last Updated:**') || trimmed.startsWith('**Última atualização:**') || trimmed.startsWith('**Última actualización:**')) {
            content.meta.lastUpdated = trimmed.split('**')[2].trim();
            continue;
        }

        // DPO specific checks (Last section usually)
        if (trimmed.startsWith('**Contact Email:**') || trimmed.startsWith('**E-mail para contato:**') || trimmed.startsWith('**Correo de contacto:**')) {
            content.dpo.email = trimmed.split(':')[1].trim();
            continue;
        }

        // Headings (H2)
        if (trimmed.startsWith('## ')) {
            inIntro = false;
            // Save previous section
            if (currentSection) {
                content.sections.push(currentSection);
            }
            const heading = trimmed.replace('## ', '');

            // Check if it's the DPO section to extract the label
            if (heading.includes('DPO') || heading.includes('Encarregado')) {
                content.dpo.label = heading;
                // parsed separately, but we can treat as a section too if we want
            }

            currentSection = {
                id: heading.toLowerCase().replace(/[^a-z0-9]/g, '-'),
                heading: heading,
                body: []
            };
            continue;
        }

        // Body Content
        if (inIntro) {
            content.intro += (content.intro ? " " : "") + trimmed;
        } else if (currentSection) {
            // Check for list item
            if (trimmed.startsWith('- ')) {
                const item = trimmed.replace('- ', '');
                const lastItem = currentSection.body[currentSection.body.length - 1];
                if (lastItem && lastItem.type === 'ul' && lastItem.items) {
                    lastItem.items.push(item);
                } else {
                    currentSection.body.push({ type: 'ul', items: [item] });
                }
            } else {
                // Paragraph
                currentSection.body.push({ type: 'p', text: trimmed });
            }
        }
    }

    // Push last section
    if (currentSection) {
        content.sections.push(currentSection);
    }

    return content;
};
