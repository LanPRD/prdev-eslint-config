<h1 align="center">@prdev-solutions/eslint-config</h1>

<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/ESLint_logo.svg" alt="ESLint Logo" width="124" height="124">
</p>

<h2 align="center">ESLint v9+ (Flat Config)</h2>

<p align="center">Uma configuracao personalizada do ESLint para garantir qualidade e consistencia em seus projetos JavaScript e TypeScript.</p>

<p align="center">
  <img alt="npm" src="https://img.shields.io/npm/v/@prdev-solutions/eslint-config?style=for-the-badge"/>
  <a href="https://github.com/LanPRD">
    <img alt='github' src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/>
  </a>
</p>

<h3 align="center">
  <a href="https://eslint.org/docs/latest/user-guide/getting-started">Leia mais sobre o ESLint</a>
</h3>

## Instalacao

Para instalar esta configuracao de ESLint em seu projeto, siga os passos abaixo:

1. Instale o pacote via npm:

```bash
npm install --save-dev eslint prettier @prdev-solutions/eslint-config
```

2. Crie ou atualize o arquivo `eslint.config.mjs` na raiz do seu projeto:

### React (Vite)

```javascript
import ReactConfig from "@prdev-solutions/eslint-config/react.mjs";

export default [...ReactConfig];
```

### Next.js

```javascript
import NextConfig from "@prdev-solutions/eslint-config/next.mjs";

export default [...NextConfig];
```

### Node.js

```javascript
import NodeConfig from "@prdev-solutions/eslint-config/node.mjs";

export default [...NodeConfig];
```

Voce pode [extender](https://eslint.org/docs/latest/extend/shareable-configs#overriding-settings-from-shareable-configs)
a configuracao acima como bem entender.

3. Crie ou atualize o arquivo `prettier.config.cjs` na raiz do seu projeto:

```javascript
const { reactPrettier } = require("@prdev-solutions/eslint-config/prettier.cjs");
// ou nodePrettier para projetos Node.js

module.exports = {
  ...reactPrettier
};
```

4. Adicione os scripts abaixo em seu package.json (opcional):

```json
{
  "scripts": {
    "lint": "eslint . --report-unused-disable-directives --max-warnings 0",
    "prettier:check": "npx prettier --check .",
    "prettier:fix": "npx prettier --write ."
  }
}
```

## Documentacao

Este pacote fornece configuracoes de ESLint prontas para uso em projetos JavaScript/TypeScript. Disponiveis para React,
Next.js e Node.js.

### Configuracoes Disponiveis

| Config      | Uso          | Plugins Inclusos                                                |
| ----------- | ------------ | --------------------------------------------------------------- |
| `react.mjs` | React + Vite | react-hooks, react-refresh, jsx-a11y, import, promise, prettier |
| `next.mjs`  | Next.js      | react-hooks, jsx-a11y, @next/next, import, promise, prettier    |
| `node.mjs`  | Node.js      | import, promise, prettier                                       |

### Arquivos Ignorados

Por padrao, os seguintes arquivos/pastas sao ignorados pelo ESLint:

```javascript
ignores: [
  "dist",
  "__tests__",
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

### Regras Principais

| Regra                                | Valor          | Descricao                                                   |
| ------------------------------------ | -------------- | ----------------------------------------------------------- |
| `@typescript-eslint/no-explicit-any` | off            | Permite uso de `any`                                        |
| `@typescript-eslint/no-unused-vars`  | warn           | Avisa sobre variaveis nao utilizadas (ignora `_prefixadas`) |
| `complexity`                         | error (max 10) | Limita complexidade ciclomatica                             |
| `max-depth`                          | error (max 3)  | Limita profundidade de blocos aninhados                     |
| `camelcase`                          | error          | Exige camelCase                                             |
| `eqeqeq`                             | error (always) | Exige `===` e `!==`                                         |
| `prefer-const`                       | error          | Prefere `const` quando possivel                             |
| `no-else-return`                     | error          | Evita `else` apos `return`                                  |
| `no-fallthrough`                     | error          | Evita fallthrough em switch                                 |
| `array-callback-return`              | error          | Exige return em callbacks de array                          |

### Prettier - Configuracao

```javascript
{
  trailingComma: "none",
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  arrowParens: "avoid",
  bracketSpacing: true,
  endOfLine: "lf",
  useTabs: false,
  proseWrap: "always",
  experimentalTernaries: true,
  printWidth: 120  // React/Next.js
  // printWidth: 80  // Node.js
}
```

## Estrutura do Projeto

```
@prdev-solutions/eslint-config/
├── configs/
│   ├── base.mjs      # Configuracoes compartilhadas
│   ├── prettier.mjs  # Configuracao do Prettier (ESM)
│   ├── react.mjs     # Config React/Vite
│   ├── node.mjs      # Config Node.js
│   └── next.mjs      # Config Next.js
├── react.mjs         # Entry point React
├── node.mjs          # Entry point Node.js
├── next.mjs          # Entry point Next.js
└── prettier.cjs      # Export Prettier (CommonJS)
```

## Links

<p align="center">
  <a href="https://portfolio.prdev.com.br/"><img src="https://img.shields.io/badge/Portfolio-255E63?style=for-the-badge&logo=About.me&logoColor=white" alt="Porfolio Allan Prado"/></a>&nbsp;&nbsp;
  <a href="https://www.linkedin.com/in/lanprd/"><img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Allan Prado"/></a>
</p>
