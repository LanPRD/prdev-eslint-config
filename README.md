<h1 align="center">@prdev-solutions/eslint-config</h1>

<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/ESLint_logo.svg" alt="ESLint Logo" width="124" height="124">
</p>

<h2 align="center">ESLint v9 (Flat config)</h2>

<p align="center"> 🚀 Uma configuração personalizada do ESLint para garantir qualidade e consistência em seus projetos JavaScript e TypeScript.</p>

<p align="center">
  <img alt="npm" src="https://img.shields.io/npm/v/@prdev-solutions/eslint-config?style=for-the-badge"/>
  <a href="https://github.com/LanPRD">
    <img alt='github' src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/>
  </a>
</p>

<h3 align="center">
  <a href="https://eslint.org/docs/latest/user-guide/getting-started"> Leia mais sobre o ESLint 📚</a>
</h3>

<!-- INSTALLATION -->

## 📦 Instalação

Para instalar esta configuração de ESLint em seu projeto, siga os passos abaixo:

1. Instale o pacote via npm:

   ```bash
   npm install --save-dev eslint prettier @prdev-solutions/eslint-config
   ```

2. Crie ou atualize o arquivo `eslint.config.mjs` na raiz do seu projeto:

   2.1 Para React

   ```javascript
   import ReactConfig from "@prdev-solutions/eslint-config/react.mjs";

   export default [
     // ...
     ...ReactConfig
     // ...
   ];
   ```

   Você pode [extender](https://eslint.org/docs/latest/extend/shareable-configs#overriding-settings-from-shareable-configs) a configuração acima como bem entender.

   2.2 Para Node.js

   ```javascript
   import NodeConfig from "@prdev-solutions/eslint-config/node.mjs";

   export default [
     // ...
     ...NodeConfig
     // ...
   ];
   ```

3. Crie ou atualize o arquivo `prettier.config.cjs` na raiz do seu projeto:

   ```javascript
   // ou reactPrettier
   const { nodePrettier } = require("@prdev-solutions/eslint-config/prettier.cjs");

   module.exports = {
     ...nodePrettier
   };
   ```

4. Adicione o script abaixo em seu package.json (opcional):

   ```json
   "lint": "eslint . --report-unused-disable-directives --max-warnings 0",
   "prettier:check": "npx prettier --check .",
   "prettier:fix": "npx prettier --write ."
   ```

<!-- DOCUMENTATION -->

## 📄 Documentação

Este pacote fornece uma configuração de ESLint pronta para uso, especialmente útil em projetos que utilizam JavaScript/TypeScript e React. A configuração é altamente personalizável e inclui integrações com Prettier para garantir um código bem formatado e padronizado.

### Tecnologias e Ferramentas

Principais bibliotecas e plugins integrados nesta configuração:

- **TypeScript:** Suporte a tipagem estática para JavaScript.
- **Prettier:** Formatação de código automática e consistente.
- **ESLint:** Linting para JavaScript/TypeScript.
- **eslint-plugin-import:** Regras para organizar imports/exportações.
- **eslint-plugin-jsx-a11y:** Regras para acessibilidade em JSX.
- **eslint-plugin-react-hooks:** Regras para garantir o uso correto de hooks em React.
- **eslint-plugin-promise:** Regras para trabalhar com promessas de forma segura.

### ESLint - Configuração padrão

Por padrão os arquivos que serão ignorados pelo ESLint são estes:

```javascript
ignores: [
  "dist",
  ".eslintrc.cjs",
  ".eslintrc.js",
  "node_modules",
  "settings*",
  "**/constants.*",
  "**/settings.*",
  "**/config.*",
  "*.config.*",
  "**/schema.ts"
];
```

Seguido por estas regras:

- **prettierPlugin.configs.recommended.rules**
- **reactHooks.configs.recommended.rules**
- **jsxA11y.configs.recommended.rules**
- **importPlugin.configs.recommended.rules**
- **importPlugin.configs.typescript.rules**
- **promisePlugin.configs.recommended.rules**

---

- **no-explicit-any**: off
- **no-unused-vars**: warn (porém é possível adicionar "\_" caso queira evidenciar a variável não utilizada)
- **prettier**: error (caso não siga as configurações estabelecidas do prettier irá sinalizar erro)
- **complexity**: error - máx. 10 (Limita a complexidade ciclomática a 10)
- **max-depth**: error - máx. 3 (Limita a profundidade máxima de blocos aninhados a 3)
- **camelcase**: error
- **eqeqeq**: error - always
- **prefer-const**: error
- **no-fallthrough**: error
- **array-callback-return**: error
- **import/no-named-as-default**: off

### Prettier - Configuração padrão

```javascript
module.exports = {
  trailingComma: "none",
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  arrowParens: "avoid",
  bracketSpacing: true,
  endOfLine: "lf",
  useTabs: false,
  proseWrap: "never",
  printWidth: 120
};
```

<!-- CONTACT -->

## 🌐 Links

<p align="center">
  <a href="https://portfolio.prdev.com.br/"><img src="https://img.shields.io/badge/Portfolio-255E63?style=for-the-badge&logo=About.me&logoColor=white" alt="Porfolio Allan Prado"/></a>&nbsp;&nbsp;
  <a href="https://www.linkedin.com/in/lanprd/"><img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Allan Prado"/></a>
</p>
