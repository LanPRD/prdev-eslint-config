module.exports = {
  env: {
    node: true, // Ambiente Node.js
    es2021: true, // Permite sintaxe ES2021 (inclui módulos)
  },
  parser: "@typescript-eslint/parser", // Define o parser para TypeScript
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended", // Regras recomendadas para TypeScript
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript", // Suporte ao TypeScript no plugin de importação
    "plugin:promise/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module", // Permite o uso de import/export
    project: "./tsconfig.json", // Aponta para o arquivo de configuração do TypeScript
  },
  ignorePatterns: ["dist", ".eslintrc.js", "node_modules"],
  rules: {
    complexity: ["error", 5], // Limita a complexidade ciclomática a 5
    "max-depth": ["error", 3], // Limita a profundidade máxima de blocos aninhados a 3
    "no-magic-numbers": [
      "error",
      {
        ignore: [0, 1], // Números permitidos globalmente
        ignoreArrayIndexes: true, // Ignora sintaxe de array como números mágicos
        ignoreDefaultValues: true, // Ignora valores padrão como números mágicos
        enforceConst: true, // Exige o uso de const para números mágicos
        detectObjects: false, // Detecta números mágicos dentro de objetos
      },
    ], // Adiciona suporte para detectar números mágicos em objetos
    "no-unused-vars": "off", // Desativa a regra padrão para evitar conflitos com @typescript-eslint/no-unused-vars
    "@typescript-eslint/no-unused-vars": ["error"], // Adiciona verificação de variáveis não utilizadas em TypeScript
    "no-use-before-define": "off", // Desativa a regra padrão para evitar conflitos com @typescript-eslint/no-use-before-define
    "@typescript-eslint/no-use-before-define": ["error"], // Verifica o uso de variáveis antes de serem definidas em TypeScript
    camelcase: "error", // Enforce o uso de camelCase
    eqeqeq: ["error", "always"], // Exige o uso de === e !==
    "prefer-const": "error", // Sugere o uso de const onde possível
    "no-else-return": "error", // Remove else desnecessários após return
    "no-fallthrough": "error", // Proíbe o fallthrough em cases de switch
    "array-callback-return": "error", // Exige que os callbacks de arrays sempre retornem algo
    "import/no-named-as-default": "off", // Desativa a regra para evitar conflitos com o uso de imports nomeados
    "@typescript-eslint/no-explicit-any": "off", // Desativa a regra que proíbe o uso de `any`
    "prettier/prettier": [
      "error",
      {
        trailingComma: "none",
        tabWidth: 2,
        semi: true,
        singleQuote: false,
        arrowParens: "avoid",
        bracketSpacing: true,
        endOfLine: "lf",
        proseWrap: "never",
        printWidth: 120,
      },
    ],
  },
  settings: {
    "import/parsers": {
      [require.resolve("@typescript-eslint/parser")]: [".ts", ".tsx", ".d.ts"],
    },
  },
};
