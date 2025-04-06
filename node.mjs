import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import pluginPromise from "eslint-plugin-promise";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
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
    ]
  },
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

      complexity: ["error", 7],
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
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_"
        }
      ],
      camelcase: "error",
      eqeqeq: ["error", "always"],
      "prefer-const": "error",
      "no-else-return": "error",
      "no-fallthrough": "error",
      "array-callback-return": "error",
      "import/no-named-as-default": "off",
      "@typescript-eslint/no-explicit-any": "off",
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
          proseWrap: "always",
          useTabs: false,
          printWidth: 80
        }
      ]
    },
    settings: {
      "import/resolver": {
        typescript: true,
        node: true
      },
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".d.ts"]
      }
    }
  },
  pluginPromise.configs["flat/recommended"],
  prettierRecommended
);
