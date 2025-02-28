import js from "@eslint/js";
import next from "@next/eslint-plugin-next";
import * as importPlugin from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import pluginPromise from "eslint-plugin-promise";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
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
    ]
  },
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
      ...importPlugin.configs?.recommended.rules,
      ...importPlugin.configs?.typescript.rules,
      ...next.configs.recommended.rules,
      ...next.configs["core-web-vitals"].rules,

      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_"
        }
      ],
      "@typescript-eslint/no-use-before-define": ["error"],
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
          useTabs: false,
          proseWrap: "always",
          printWidth: 120
        }
      ],
      complexity: ["error", 5],
      "max-depth": ["error", 3],
      "no-magic-numbers": [
        "error",
        {
          ignore: [0, 1, -1],
          ignoreArrayIndexes: true,
          ignoreDefaultValues: true,
          enforceConst: true,
          detectObjects: false,
          ignoreClassFieldInitialValues: true
        }
      ],
      camelcase: "error",
      eqeqeq: ["error", "always"],
      "prefer-const": "error",
      "no-else-return": "error",
      "no-fallthrough": "error",
      "array-callback-return": "error",
      "import/no-named-as-default": "off"
    },
    settings: {
      "import/resolver": {
        typescript: true,
        node: true
      },
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx", ".d.ts"]
      }
    }
  },
  pluginPromise.configs["flat/recommended"],
  prettierRecommended
);
