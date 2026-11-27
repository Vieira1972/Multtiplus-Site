# Contato do site → lead no Odoo

O formulário de contato (`src/components/Contact.tsx`) envia um `POST` JSON para a URL em
`VITE_LEAD_ENDPOINT` e, em seguida, abre o WhatsApp, mesmo que o envio falhe. Sem a variável,
nada é enviado (só WhatsApp).

Do lado do Odoo quem recebe é o módulo **`crm_external_form`** (repositório `multtiplus_20`),
formulário **"Site Multtiplus - Fale conosco"**, em CRM > Configuração > Formulários externos.

Código no site: `src/services/leadService.ts` (payload e envio), `src/config/leadOptions.ts`
(chaves fixas dos selects), `src/utils/utm.ts` (UTM).

## Configuração

1. No Odoo, abra o formulário e copie a **URL do endpoint** (`https://<odoo>/crm/external-form/<chave>`).
2. Na Vercel, defina `VITE_LEAD_ENDPOINT` com essa URL e faça um novo deploy (a variável entra no
   build; mudar só no painel não basta).
3. Confira no formulário do Odoo:
   - **Origens permitidas (CORS)**: os domínios de produção do site. Previews da Vercel
     (`*.vercel.app`) e `localhost` recebem 403 se não estiverem na lista.
   - **Campo isca**: `hp`.

"Gerar nova chave" no Odoo invalida a URL: atualize a variável na Vercel e faça deploy.

## Payload

As chaves precisam bater com a coluna "Chave no payload" do mapeamento no Odoo.

```json
{
  "nome": "Maria Silva",
  "empresa": "Empresa X",
  "email": "maria@empresax.com.br",
  "telefone": "+55 47 99999-0000",
  "site": "empresax.com.br",
  "funcionarios": "11-25",
  "segmento": "retail",
  "mensagem": "Quero implantar o Odoo...",
  "aceite_privacidade": true,
  "aceite_privacidade_em": "2026-11-27T18:03:12.512Z",
  "idioma": "pt-BR",
  "utm_source": "google",
  "utm_medium": "cpc",
  "utm_campaign": "odoo-erp",
  "pagina": "https://www.multtiplus.com.br/?utm_source=google#contact",
  "referencia": "https://www.google.com/",
  "hp": ""
}
```

| Chave | Sempre vem | Observação |
|---|---|---|
| `nome`, `email`, `mensagem` | sim | obrigatórios também no Odoo |
| `empresa`, `telefone`, `site` | sim (podem vir vazios) | texto livre |
| `funcionarios`, `segmento` | sim (podem vir vazios) | chave fixa, ver abaixo |
| `aceite_privacidade` | sim | sempre `true`: o botão só habilita com a caixa marcada |
| `aceite_privacidade_em` | sim | ISO 8601 UTC, momento do envio |
| `idioma` | sim | `pt-BR`, `en` ou `es` |
| `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content` | só se vierem na URL de entrada | guardados na sessão do navegador |
| `pagina`, `referencia` | sim (`referencia` pode vir vazia) | |
| `hp` | sim | campo isca: vazio para pessoas |

### Chaves fixas dos selects

`funcionarios`: `1-5`, `6-10`, `11-25`, `26-50`, `50+`

`segmento`: `retail`, `industry`, `logistics`, `services`, `hospitality`, `food_service`, `events`

São iguais em qualquer idioma do site. O de/para do mapeamento no Odoo troca cada chave pelo
rótulo em português. Para criar uma opção:

1. Site: chave em `src/config/leadOptions.ts` e rótulo nos três `src/i18n/locales/*.json`
   (`contact.form.usersOptions` / `contact.form.segmentOptions`).
2. Odoo: linha nova no de/para do mapeamento `funcionarios` ou `segmento`. Sem ela o lead é criado
   do mesmo jeito, mas com a chave crua nas notas.

Chave nova no payload: o Odoo coloca nas notas e registra um aviso no envio; "Mapear chaves novas"
cria a linha de mapeamento a partir dos envios recebidos.

## Respostas

| Código | O site faz |
|---|---|
| 201 `{"ok": true}` lead criado | segue para o WhatsApp |
| 200 `{"ok": true}` campo isca preenchido, nada criado | segue para o WhatsApp |
| 422 payload recusado (fica em "Envios recebidos" para reprocessar) | `console.warn` e segue para o WhatsApp |
| 400 / 403 / 404, erro de rede, mais de 8 s | `console.warn` e segue para o WhatsApp |

O contato nunca se perde no site: no pior caso ele chega só pelo WhatsApp.
