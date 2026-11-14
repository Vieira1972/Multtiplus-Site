import type { PrivacyPolicyContent } from './types';

export const privacyPolicyPT: PrivacyPolicyContent = {
    titleLines: ["Política de", "Privacidade"],
    meta: {
        version: "1.0",
        lastUpdated: "17 de fevereiro de 2026"
    },
    intro: "A Multtiplus valoriza a privacidade de seus usuários e está comprometida com a proteção de seus dados pessoais. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e compartilhamos suas informações, em conformidade com a Lei Geral de Proteção de Dados (LGPD).",
    sections: [
        {
            id: "dados-coletados",
            heading: "1. Dados Coletados",
            body: [
                { type: "p", text: "Coletamos apenas os dados necessários para a prestação de nossos serviços e melhoria da sua experiência." },
                { type: "p", text: "Os dados que podem ser coletados incluem:" },
                {
                    type: "ul", items: [
                        "Nome completo;",
                        "Endereço de e-mail;",
                        "Número de telefone;",
                        "Nome da empresa;",
                        "Informações técnicas de navegação (cookies, endereço IP)."
                    ]
                }
            ]
        },
        {
            id: "finalidades",
            heading: "2. Finalidade do Uso dos Dados",
            body: [
                { type: "p", text: "Utilizamos seus dados para as seguintes finalidades:" },
                {
                    type: "ul", items: [
                        "Responder a solicitações de contato e orçamentos;",
                        "Prestar os serviços contratados;",
                        "Enviar comunicações institucionais e atualizações;",
                        "Cumprir obrigações legais e regulatórias;",
                        "Melhorar a segurança e funcionamento do site."
                    ]
                }
            ]
        },
        {
            id: "compartilhamento",
            heading: "3. Compartilhamento de Dados",
            body: [
                { type: "p", text: "Não vendemos nem comercializamos seus dados pessoais. Seus dados podem ser compartilhados apenas nas seguintes situações:" },
                {
                    type: "ul", items: [
                        "Com fornecedores e parceiros essenciais para a prestação do serviço;",
                        "Quando exigido por lei ou autoridade competente;",
                        "Para proteção dos direitos da Multtiplus em conflitos."
                    ]
                }
            ]
        },
        {
            id: "seguranca",
            heading: "4. Segurança dos Dados",
            body: [
                { type: "p", text: "Adotamos medidas técnicas e administrativas para proteger seus dados pessoais contra acessos não autorizados, perda, alteração ou destruição. Utilizamos criptografia e protocolos seguros." }
            ]
        },
        {
            id: "retencao",
            heading: "5. Retenção de Dados",
            body: [
                { type: "p", text: "Manteremos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletados, inclusive para fins de cumprimento de obrigações legais, contratuais, de prestação de contas ou requisição de autoridades competentes." }
            ]
        },
        {
            id: "direitos",
            heading: "6. Seus Direitos (LGPD)",
            body: [
                { type: "p", text: "Você possui os seguintes direitos em relação aos seus dados:" },
                {
                    type: "ul", items: [
                        "Confirmação da existência de tratamento;",
                        "Acesso aos dados;",
                        "Correção de dados incompletos, inexatos ou desatualizados;",
                        "Anonimização, bloqueio ou eliminação de dados desnecessários;",
                        "Portabilidade dos dados;",
                        "Eliminação dos dados tratados com consentimento;",
                        "Revogação do consentimento."
                    ]
                }
            ]
        },
        {
            id: "contato",
            heading: "7. Encarregado de Dados (DPO)",
            body: [
                { type: "p", text: "Para exercer seus direitos ou tirar dúvidas sobre esta Política, entre em contato com nosso Encarregado de Proteção de Dados:" }
            ]
        }
    ],
    dpo: {
        label: "E-mail para contato:",
        email: "dpo@multtiplus.com.br" // Placeholder email, standard practice
    }
};
