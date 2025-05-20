# 🎭 Testes Automatizados com Playwright

Este projeto contém testes end-to-end (E2E) automatizados usando [Playwright](https://playwright.dev/), com foco em cenários reais de navegação, login e validação de elementos da interface.

## 📁 Estrutura do Projeto

```
playwright/
├── tests/
│ └── login.spec.ts # Testes de login
├── pages/
│ └── LoginPage.ts # Page Object Model para a tela de login
├── utils/
│ └── helpers.ts # Funções auxiliares (opcional)
├── playwright.config.ts # Configuração do Playwright
├── package.json
└── README.md
```

## 🚀 Instalação e Execução

### 1. Clone o repositório

```
git clone https://github.com/idclarissa/playwright.git
cd playwright
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

## 🔍 Principais Funcionalidades Testadas

1 - Acesso à página de login

2 - Preenchimento de email e senha

3 - Validação de mensagens de erro

4 - Login com credenciais válidas

Verificação de redirecionamento e visibilidade de elementos-chave

## 📦 Scripts úteis
No package.json, você pode adicionar:

```
"scripts": {
  "test": "npx playwright test",
  "test:ui": "npx playwright test --ui",
  "test:trace": "npx playwright test --trace on",
  "test:headed": "npx playwright test --headed --project=chromium"
}
```
## 🧱 Boas Práticas Aplicadas

- Page Object Model (POM): Reutilização de ações e componentes de página.

- Testes isolados: Cada teste funciona de forma independente.

- Uso de expect() do Playwright Test para validações claras.

- Configuração com playwright.config.ts para personalização de projetos e navegadores.

## 🧪 Exemplo de Teste
```
test('usuário consegue fazer login com sucesso', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.login('usuario@exemplo.com', 'senha123');

  await expect(page.getByText('Products')).toBeVisible();
});
```
## 💡 Dicas de Debug

page.pause() – Pausa o teste para inspeção.

--debug – Roda em modo interativo com o Playwright Inspector.

--slow-mo=200 (via launchOptions) – Deixa as ações mais lentas.

### 🤝 Contribuindo
Sugestões, melhorias e correções são bem-vindas. Sinta-se livre para abrir uma issue ou pull request.

### 🌐 Referências
Documentação do Playwright
Playwright Test Runner
