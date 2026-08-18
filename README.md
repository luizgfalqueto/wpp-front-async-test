# WhatsApp Frontend — Desafio Técnico

Implementação de uma interface de conversas inspirada no WhatsApp, desenvolvida com foco principal na experiência de chat, interação entre conversas e organização da arquitetura para permitir evolução futura da aplicação.

O projeto foi desenvolvido em **Next.js + TypeScript**, com gerenciamento de estado utilizando **Zustand** e estilização baseada em CSS Modules.

---

## 📌 Visão geral

O objetivo principal deste projeto foi reproduzir uma experiência de conversação moderna, priorizando as funcionalidades e interações relacionadas ao chat.

Durante o desenvolvimento, a prioridade foi construir uma base sólida para:

- Listagem de conversas;
- Seleção de uma conversa;
- Exibição das mensagens;
- Diferenciação entre mensagens enviadas e recebidas;
- Conversas individuais e em grupo;
- Identificação visual dos participantes;
- Mensagens de sistema;
- Status de envio das mensagens;
- Agrupamento visual de mensagens consecutivas;
- Separadores de data entre mensagens;
- Diferentes tipos de mensagens;
- Internacionalização das mensagens de sistema;
- Estrutura preparada para expansão das demais áreas da aplicação.

A proposta foi priorizar uma experiência de chat consistente e funcional, evitando investir uma quantidade desproporcional de tempo em funcionalidades periféricas que não seriam o foco principal do desafio.

---

# 🏗️ Arquitetura e organização

A aplicação foi estruturada de maneira modular, buscando separar responsabilidades entre componentes, stores, tipos, dados e utilitários.

Uma estrutura simplificada do projeto:

```text
src/
├── app/
│   └── home/
│       └── chat/
│
├── components/
│   ├── MessageList/
│   ├── MessageTail/
│   ├── MessageStatusIcon/
│   └── ...
│
├── database/
│   ├── db.json
│   └── en_db.json
│
├── stores/
│   └── useChatStore.ts
│
├── types/
│   └── message.ts
│
└── utils/
    ├── helpers/
    │   ├── colorHelper.ts
    │   └── contactHelper.ts
    │
    └── translation.ts

# ▶️ Como executar o projeto

## Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

- **Node.js** 20 ou superior;
- **npm**.

Para verificar as versões instaladas:

```bash
node --version
npm --version
