import type { PrivacyPolicyContent } from './types';

export const privacyPolicyES: PrivacyPolicyContent = {
    titleLines: ["Política de", "Privacidad"],
    meta: {
        version: "1.0",
        lastUpdated: "17 de febrero de 2026"
    },
    intro: "Multtiplus valora su privacidad y se compromete a proteger sus datos personales. Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y compartimos su información, cumpliendo con la Ley General de Protección de Datos (LGPD).",
    sections: [
        {
            id: "datos-coletados",
            heading: "1. Datos Recopilados",
            body: [
                { type: "p", text: "Solo recopilamos los datos necesarios para proporcionar nuestros servicios y mejorar su experiencia." },
                { type: "p", text: "Los datos que pueden ser recopilados incluyen:" },
                {
                    type: "ul", items: [
                        "Nombre completo;",
                        "Dirección de correo electrónico;",
                        "Número de teléfono;",
                        "Nombre de la empresa;",
                        "Información técnica de navegación (cookies, dirección IP)."
                    ]
                }
            ]
        },
        {
            id: "finalidades",
            heading: "2. Finalidad del Uso de Datos",
            body: [
                { type: "p", text: "Utilizamos sus datos para los siguientes fines:" },
                {
                    type: "ul", items: [
                        "Responder a solicitudes de contacto y presupuestos;",
                        "Proporcionar los servicios contratados;",
                        "Enviar comunicaciones institucionales y actualizaciones;",
                        "Cumplir con obligaciones legales y reglamentarias;",
                        "Mejorar la seguridad y funcionalidad del sitio."
                    ]
                }
            ]
        },
        {
            id: "compartilhamento",
            heading: "3. Compartición de Datos",
            body: [
                { type: "p", text: "No vendemos ni comercializamos sus datos personales. Sus datos solo pueden ser compartidos en las siguientes situaciones:" },
                {
                    type: "ul", items: [
                        "Con proveedores y socios esenciales para la prestación del servicio;",
                        "Cuando lo requiera la ley o autoridad competente;",
                        "Para proteger los derechos de Multtiplus en conflictos."
                    ]
                }
            ]
        },
        {
            id: "seguranca",
            heading: "4. Seguridad de los Datos",
            body: [
                { type: "p", text: "Adoptamos medidas técnicas y administrativas para proteger sus datos personales contra accesos no autorizados, pérdida, alteración o destrucción. Utilizamos cifrado y protocolos seguros." }
            ]
        },
        {
            id: "retencao",
            heading: "5. Retención de Datos",
            body: [
                { type: "p", text: "Mantendremos sus datos personales solo durante el tiempo necesario para cumplir con los fines para los que fueron recopilados, incluidos los fines de cumplir con obligaciones legales, contractuales, de rendición de cuentas o solicitudes de autoridades competentes." }
            ]
        },
        {
            id: "direitos",
            heading: "6. Sus Derechos (LGPD)",
            body: [
                { type: "p", text: "Usted tiene los siguientes derechos con respecto a sus datos:" },
                {
                    type: "ul", items: [
                        "Confirmación de la existencia de tratamiento;",
                        "Acceso a los datos;",
                        "Corrección de datos incompletos, inexactos o desactualizados;",
                        "Anonimización, bloqueo o eliminación de datos innecesarios;",
                        "Portabilidad de los datos;",
                        "Eliminación de los datos tratados con consentimiento;",
                        "Revocación del consentimiento."
                    ]
                }
            ]
        },
        {
            id: "contato",
            heading: "7. Encargado de Protección de Datos (DPO)",
            body: [
                { type: "p", text: "Para ejercer sus derechos o hacer preguntas sobre esta Política, comuníquese con nuestro Encargado de Protección de Datos:" }
            ]
        }
    ],
    dpo: {
        label: "Correo electrónico de contacto:",
        email: "dpo@multtiplus.com.br"
    }
};
