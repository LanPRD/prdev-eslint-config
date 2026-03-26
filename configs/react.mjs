import jsxA11y from "eslint-plugin-jsx-a11y";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig } from "eslint/config";
import globals from "globals";

import {
  baseRules,
  createPrettierRules,
  ignoresConfig,
  importPlugin,
  importSettings,
  js,
  pluginPromise,
  prettierRecommended,
  tseslint
} from "./base.mjs";
import { prettierReact } from "./prettier.mjs";

export default defineConfig(
  ignoresConfig,
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended, reactRefresh.configs.vite],
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      "jsx-a11y": jsxA11y,
      "react-hooks": reactHooks,
      import: importPlugin
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      ...importPlugin.configs.recommended.rules,
      ...importPlugin.configs.typescript.rules,
      ...baseRules,
      ...createPrettierRules(prettierReact),
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }]
    },
    settings: importSettings
  },
  pluginPromise.configs["flat/recommended"],
  prettierRecommended
);
