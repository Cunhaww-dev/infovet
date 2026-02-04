Segue um **README básico, limpo e alinhado com o estado atual real do projeto**.
Ele documenta **o que já existe**, **o propósito do Infovet** e **o que vem a seguir**, sem prometer o que ainda não foi feito.

Você pode copiar e colar direto no `README.md`.

---

# Infovet 🐾

Infovet é um sistema web de **prontuário eletrônico para médicos veterinários**, focado em organizar pacientes, atendimentos e histórico clínico de forma simples, rápida e eficiente.

O projeto está sendo desenvolvido com **Next.js (App Router)**, **TypeScript**, **Tailwind CSS** e **shadcn/ui**, priorizando uma base sólida de layout, navegação e escalabilidade antes da implementação das regras de negócio.

---

## 🎯 Objetivo do Projeto

Criar uma aplicação que permita ao médico veterinário:

- Visualizar rapidamente seus atendimentos
- Gerenciar pacientes (animais e tutores)
- Registrar prontuários e históricos clínicos
- Manter um fluxo de trabalho claro e intuitivo

---

## 🧱 Stack Atual

- **Next.js (App Router)**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **Lucide Icons**

---

## 🗂 Estrutura Atual do Projeto

```
src/
├─ app/
│  ├─ layout.tsx        # Casca global da aplicação (sidebar, header)
│  ├─ page.tsx          # Entrada da aplicação (redirect)
│  └─ dashboard/
│     └─ page.tsx       # Tela inicial do sistema
│
├─ components/
│  ├─ ui/               # Componentes base do shadcn/ui
│  ├─ atoms/
│  ├─ molecules/
│  ├─ organisms/
│  ├─ app-sidebar.tsx   # Sidebar principal da aplicação
│  ├─ nav-main.tsx
│  ├─ nav-projects.tsx
│  ├─ nav-user.tsx
│  └─ nav-single.tsx    # Navegação de itens únicos (Dashboard, Pacientes, etc.)
│
├─ hooks/
├─ lib/
```

---

## 🧭 Navegação Atual

A aplicação utiliza uma **sidebar como casca principal**, contendo:

- Itens de navegação únicos (Dashboard, Pacientes, Agenda, Novo Atendimento)
- Grupos colapsáveis apenas quando há hierarquia real
- Estrutura preparada para escalar conforme o sistema cresce

---

## 🚧 Status do Projeto

🟡 **Em desenvolvimento inicial**

No momento, o foco está em:

- Estrutura do projeto
- Layout base
- Sidebar e navegação
- Organização de componentes

Ainda **não há regras de negócio, autenticação ou persistência de dados** implementadas.

---

## 🔜 Próximos Passos

### 1️⃣ Estrutura de Rotas

- Criar as rotas principais do sistema:
  - `/pacientes`
  - `/pacientes/[id]`
  - `/agenda`
  - `/atendimentos/novo`

### 2️⃣ Ajustes no Layout da Sidebar

- Refinar estilos e variantes dos botões
- Ajustar estados ativos e UX
- Consolidar navegação conforme o domínio veterinário

### 3️⃣ Criação das Telas do Sistema

- Tela de listagem de pacientes
- Ficha do paciente (prontuário)
- Tela de novo atendimento
- Dashboard com visão geral

---

## 📌 Observações

Este projeto está sendo construído com foco em **clareza arquitetural**, **boas práticas** e **facilidade de evolução**, evitando acoplamentos prematuros e decisões irreversíveis no início.

---

Se quiser, no próximo passo posso:

- revisar esse README como se fosse para um repositório público
- ajudar a escrever **CONTRIBUTING.md**
- ou já partir direto para a **primeira tela real (Pacientes)**

Qual você prefere seguir agora?
