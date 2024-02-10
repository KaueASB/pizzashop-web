# iFood (React)

Dashboard para gestão do estabelecimento e controle de pedidos estilo iFood.

## Ferramentas

- React
- React Router DOM
- React Query
- Tailwind
- shadcn/ui
- Vitest
- Playwright
- Mock Service Worker (Mock da API)

## Disclaimer

**Atenção:** A API ainda está sendo implementada. Para simular as requisições à API enquanto ela não está pronta, utilizei a ferramenta MSW (Mock Service Worker) para criar mocks de respostas.

## Aprendizados importantes

- Autenticação JWT
- Caching e revalidação
- Conexão com back-end (API)
- Testes unitários
- Testes E2E

## Projeto

Para rodar o projeto, você pode usar o **npm**, **yarn** ou o **pnpm**

```bash
pnpm install
pnpm dev:test
```

## Testes

Testes E2E (terminal):

```bash
pnpm playwright test
```

Testes E2E (ui):

```bash
pnpm playwright test --ui
```

## Funcionalidades

- Cadastro de estabelecimento
- Login de estabelecimento (magic link)
<!-- - Cadastro como cliente
- Criação de novos pedidos
- Gestão do cardápio
- Gestão de avaliações -->
- Gestão de pedidos
- Gestão do perfil do estabelecimento
<!-- - Loja aberta/fechada -->
- Métricas p/ dashboard
  <!-- - Gráfico de pedidos nos últimos 15 dias
  - Gráfico de valores nos últimos 15 dias
  - Média de avaliações (mês/geral)
  - Média de pedidos por dia (mês/geral) -->
<!-- - Notificações sonoras de novos pedidos (alterar favicon) -->
