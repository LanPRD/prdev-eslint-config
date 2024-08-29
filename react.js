module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.js", "node_modules"],
  parser: "@typescript-eslint/parser",
  plugins: ["jsx-a11y"],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
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
    "import/resolver": {
      typescript: {}, // Configura o resolver para TypeScript
    },
  },
};
