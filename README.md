# 🎭 Testes Automatizados com Playwright

Este projeto tem como objetivo a automação de testes E2E (end-to-end) utilizando o Playwright, uma poderosa ferramenta open-source para testes de aplicações web.

## 🛠 Tecnologias utilizadas

- Playwright — Framework de automação de testes.

- Node.js — Ambiente de execução JavaScript.

- TypeScript — (opcional, se estiver usando tipagem).

- Jest ou Test Runner nativo do Playwright.

- Git — Controle de versão.

## 🚀 Como executar o projeto

### 1. Clone o repositório

```
git clone https://github.com/idclarissa/test-playwright.git
cd test-playwright
```
2. Instale as dependências

```
npm install
```
3. Execute os testes
Modo interativo (com UI):

```
npx playwright test --ui
```

Modo headless (sem interface):
```
npx playwright test
```
Com trace ativado:
```
npx playwright test --trace on
```

## Técnicas e boas práticas aplicadas

✅ Page Object Model (POM) — Organização dos elementos e ações em classes, facilitando manutenção e reutilização de código.

✅ Testes paralelos e isolados, aproveitando o runner do próprio Playwright.

✅ Selectors robustos e confiáveis, priorizando data-test-id ou identificadores únicos.

✅ Uso de Fixtures para reaproveitamento de contexto e configuração.

✅ Relatórios HTML interativos para análise de execução.

✅ Screenshots e gravação de vídeo automática em casos de falha.

✅ Good Practices: esperas automáticas do Playwright (não usar waits fixos), testes desacoplados e claros.

## 📁 Estrutura do Projeto
```
test-playwright/
├── tests/            → Casos de teste
├── pages/            → Page Objects
├── fixtures/         → Configurações e dados de apoio
├── reports/          → Relatórios gerados
├── playwright.config.ts → Configuração global
├── package.json      → Dependências e scripts
## 📦 Scripts úteis
No package.json, você pode adicionar:

```
```
"scripts": {
  "test": "npx playwright test",
  "test:ui": "npx playwright test --ui",
  "test:trace": "npx playwright test --trace on",
  "test:headed": "npx playwright test --headed --project=chromium"
}
```

## 💡 Dicas úteis para Playwright

- Use page.locator() para interações mais inteligentes e seguras.

- Prefira page.fill() para preencher campos e page.getByRole() para acessibilidade e estabilidade dos seletores.

- Configure retries no playwright.config.ts para ambientes instáveis.

- Habilite vídeos e screenshots apenas em falhas para economizar espaço e análise mais eficiente.


### 🌐 Referências
Documentação do Playwright
Playwright Test Runner
