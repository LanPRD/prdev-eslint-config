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
import { prettierNode } from "./prettier.mjs";

export default defineConfig(
  ignoresConfig,
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,js}"],
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.node
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      import: importPlugin
    },
    rules: {
      ...importPlugin.configs.recommended.rules,
      ...importPlugin.configs.typescript.rules,
      ...baseRules,
      ...createPrettierRules(prettierNode)
    },
    settings: {
      ...importSettings,
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".d.ts"]
      }
    }
  },
  pluginPromise.configs["flat/recommended"],
  prettierRecommended
);
