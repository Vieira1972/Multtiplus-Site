export type ContentItem = {
    type: 'p' | 'ul';
    text?: string;
    items?: string[];
};

export type Section = {
    id: string;
    heading: string;
    body: ContentItem[];
    subSections?: {
        heading: string;
        body: ContentItem[];
    }[];
};

export type PrivacyPolicyContent = {
    titleLines: [string, string];
    meta: {
        version: string;
        lastUpdated: string;
    };
    intro: string;
    sections: Section[];
    dpo: {
        label: string;
        email: string;
    };
};
