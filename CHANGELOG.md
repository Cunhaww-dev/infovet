# Changelog

Todas as mudanças relevantes do projeto Infovet serão documentadas aqui.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

## Roadmap (Proposta para os próximos 2 meses)

- 0.2.0-dev (meta: 23-02-2026): Tela e fluxo de Pacientes (listar, criar, editar)
- 0.3.0-dev (meta: 23-03-2026): Agenda e Novo Atendimento (fluxo principal)
- 0.4.0-dev (meta: 23-04-2026): Tela de autenticação e acesso (login, logout, proteção de rotas)

---

Guia de uso:

- Tudo que está em desenvolvimento fica em Unreleased.
- Quando finalizar um marco, mova os itens para uma nova versão com data.
- Mantenha o Unreleased curto (1-2 semanas) para facilitar a visão do progresso.

---

## [Unreleased] - Iniciado em 09-02-2026

> Status: Desenvolvimento ativo  
> Ambiente: DEV  
> Produção: ❌ Nada publicado

### Added

- (Aguardando próximas features de telas, formulários e tabelas)

---

## [0.1.0-dev] - 05-02-2026

> Status: Base arquitetural concluída  
> Ambiente: DEV  
> Produção: ❌ Será públicado

### Added

- Estrutura inicial do projeto com Next.js App Router
- Layout base da aplicação
- Sidebar funcional e responsiva com shadcn/ui como casca da aplicação
- Navegação principal (Dashboard, Pacientes, Agenda)
- Estrutura inicial de rotas (dashboard, pacientes, agenda)
- Variante customizada 'minimal' para botões da sidebar com tema verde veterinário
- Indicador visual de rota ativa na navegação
- Logo customizável na sidebar (ícone colapsado e logo expandida)

### Changed

- Ajuste na arquitetura de layout global
- Padronização da sidebar com variantes customizadas
- Estilização dos botões com animações e estados hover/active
- Layout da sidebar com logo responsiva e ajustes visuais

### Fixed

- Correções de import/export nos componentes de navegação
- Ajuste no comportamento do estado ativo dos botões de navegação

### Technical

- Setup do ambiente de desenvolvimento
- Configuração do ESLint e Prettier
