<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/ESLint_logo.svg" alt="ESLint Logo" width="124" height="124">
</p>

<h1 align="center">@prdev-solutions/eslint-config</h1>

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

<br />

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
- **eslint-plugin-react:** Boas práticas para desenvolvimento com React.
- **eslint-plugin-react-hooks:** Regras para garantir o uso correto de hooks em React.
- **eslint-plugin-promise:** Regras para trabalhar com promessas de forma segura.

<br />

<!-- INSTALLATION -->

## 📦 Instalação

Para instalar esta configuração de ESLint em seu projeto, siga os passos abaixo:

1. Instale o pacote via npm:

   ```bash
   npm install --save-dev eslint @prdev-solutions/eslint-config
   ```

2. Crie ou atualize o arquivo .eslintrc.js na raiz do seu projeto:

   2.1 Para React

   ```javascript
   {
    extends: "@prdev-solutions/eslint-config/react"
   }
   ```

   2.2 Para Node.js

   ```javascript
   {
    extends: "@prdev-solutions/eslint-config/node"
   }
   ```

<!-- CONTACT -->

## 🌐 Links

<p align="center">
  <a href="https://portfolio.prdev.com.br/"><img src="https://img.shields.io/badge/Portfolio-255E63?style=for-the-badge&logo=About.me&logoColor=white" /></a>&nbsp;&nbsp;
  <a href="https://www.linkedin.com/in/lanprd/"><img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" /></a>
</p>
