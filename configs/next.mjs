import next from "@next/eslint-plugin-next";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactHooks from "eslint-plugin-react-hooks";
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
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
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
      import: importPlugin,
      "@next/next": next
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      ...importPlugin.configs.recommended.rules,
      ...importPlugin.configs.typescript.rules,
      ...next.configs.recommended.rules,
      ...next.configs["core-web-vitals"].rules,
      ...baseRules,
      ...createPrettierRules(prettierReact)
    },
    settings: importSettings
  },
  pluginPromise.configs["flat/recommended"],
  prettierRecommended
);
