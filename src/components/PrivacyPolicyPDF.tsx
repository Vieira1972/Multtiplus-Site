import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import type { PrivacyPolicyContent } from '../content/privacyPolicy/types';

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        padding: 40,
        fontFamily: 'Helvetica',
    },
    header: {
        marginBottom: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#0F2743',
        paddingBottom: 10,
    },
    title: {
        fontSize: 24,
        color: '#0F2743',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    meta: {
        fontSize: 10,
        color: '#666666',
        marginBottom: 20,
    },
    intro: {
        fontSize: 12,
        color: '#333333',
        marginBottom: 20,
        lineHeight: 1.5,
        textAlign: 'justify',
    },
    section: {
        marginBottom: 15,
    },
    sectionHeading: {
        fontSize: 14,
        color: '#0F2743',
        fontWeight: 'bold',
        marginBottom: 8,
    },
    paragraph: {
        fontSize: 12,
        color: '#333333',
        marginBottom: 6,
        lineHeight: 1.5,
        textAlign: 'justify',
    },
    listItem: {
        flexDirection: 'row',
        marginBottom: 4,
    },
    bullet: {
        width: 15,
        fontSize: 12,
        color: '#0F2743',
    },
    listItemText: {
        fontSize: 12,
        color: '#333333',
        lineHeight: 1.5,
    },
    dpo: {
        marginTop: 20,
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#EEEEEE',
    },
    dpoLabel: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#0F2743',
    },
    dpoEmail: {
        fontSize: 12,
        color: '#0066FF',
    },
    footer: {
        position: 'absolute',
        bottom: 30,
        left: 40,
        right: 40,
        textAlign: 'center',
        fontSize: 10,
        color: '#999999',
    },
});

type Props = {
    content: PrivacyPolicyContent;
};

export const PrivacyPolicyPDF = ({ content }: Props) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.header}>
                <Text style={styles.title}>{content.titleLines.join(' ')}</Text>
                <Text style={styles.meta}>
                    Version: {content.meta.version} | Last Updated: {content.meta.lastUpdated}
                </Text>
            </View>

            <Text style={styles.intro}>{content.intro}</Text>

            {content.sections.map((section) => (
                <View key={section.id} style={styles.section} wrap={false}>
                    <Text style={styles.sectionHeading}>{section.heading}</Text>
                    {section.body.map((item, index) => {
                        if (item.type === 'p') {
                            return <Text key={index} style={styles.paragraph}>{item.text}</Text>;
                        }
                        if (item.type === 'ul' && item.items) {
                            return (
                                <View key={index}>
                                    {item.items.map((listItem, listIndex) => (
                                        <View key={listIndex} style={styles.listItem}>
                                            <Text style={styles.bullet}>•</Text>
                                            <Text style={styles.listItemText}>{listItem}</Text>
                                        </View>
                                    ))}
                                </View>
                            );
                        }
                        return null;
                    })}
                </View>
            ))}

            <View style={styles.dpo} wrap={false}>
                <Text style={styles.paragraph}>{content.dpo.label}</Text>
                <Text style={styles.dpoEmail}>{content.dpo.email}</Text>
            </View>

            <Text style={styles.footer} fixed>
                Multtiplus - www.multtiplus.com.br
            </Text>
        </Page>
    </Document>
);
