import type { PrivacyPolicyContent } from './types';

export const privacyPolicyEN: PrivacyPolicyContent = {
    titleLines: ["Privacy", "Policy"],
    meta: {
        version: "1.0",
        lastUpdated: "February 17, 2026"
    },
    intro: "Multtiplus values your privacy and is committed to protecting your personal data. This Privacy Policy describes how we collect, use, store, and share your information in compliance with the General Data Protection Law (LGPD).",
    sections: [
        {
            id: "collected-data",
            heading: "1. Collected Data",
            body: [
                { type: "p", text: "We only collect data necessary for providing our services and improving your experience." },
                { type: "p", text: "The data that may be collected includes:" },
                {
                    type: "ul", items: [
                        "Full name;",
                        "Email address;",
                        "Phone number;",
                        "Company name;",
                        "Technical browsing information (cookies, IP address)."
                    ]
                }
            ]
        },
        {
            id: "purposes",
            heading: "2. Purpose of Data Use",
            body: [
                { type: "p", text: "We use your data for the following purposes:" },
                {
                    type: "ul", items: [
                        "Responding to contact requests and quotes;",
                        "Providing contracted services;",
                        "Sending institutional communications and updates;",
                        "Complying with legal and regulatory obligations;",
                        "Improving site security and functionality."
                    ]
                }
            ]
        },
        {
            id: "sharing",
            heading: "3. Data Sharing",
            body: [
                { type: "p", text: "We do not sell or trade your personal data. Your data may only be shared in the following situations:" },
                {
                    type: "ul", items: [
                        "With essential suppliers and partners for service provision;",
                        "When required by law or competent authority;",
                        "To protect Multtiplus's rights in disputes."
                    ]
                }
            ]
        },
        {
            id: "security",
            heading: "4. Data Security",
            body: [
                { type: "p", text: "We adopt technical and administrative measures to protect your personal data against unauthorized access, loss, alteration, or destruction. We use encryption and secure protocols." }
            ]
        },
        {
            id: "retention",
            heading: "5. Data Retention",
            body: [
                { type: "p", text: "We will keep your personal data only for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of complying with legal, contractual, accountability obligations, or requests from competent authorities." }
            ]
        },
        {
            id: "rights",
            heading: "6. Your Rights (LGPD)",
            body: [
                { type: "p", text: "You have the following rights regarding your data:" },
                {
                    type: "ul", items: [
                        "Confirmation of the existence of processing;",
                        "Access to data;",
                        "Correction of incomplete, inaccurate, or outdated data;",
                        "Anonymization, blocking, or elimination of unnecessary data;",
                        "Data portability;",
                        "Elimination of data treated with consent;",
                        "Revocation of consent."
                    ]
                }
            ]
        },
        {
            id: "contact",
            heading: "7. Data Protection Officer (DPO)",
            body: [
                { type: "p", text: "To exercise your rights or ask questions about this Policy, please contact our Data Protection Officer:" }
            ]
        }
    ],
    dpo: {
        label: "Contact Email:",
        email: "dpo@multtiplus.com.br"
    }
};
