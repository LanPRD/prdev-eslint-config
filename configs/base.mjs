import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import pluginPromise from "eslint-plugin-promise";
import tseslint from "typescript-eslint";

export const ignoresConfig = {
  ignores: [
    "dist",
    "build",
    ".next",
    ".turbo",
    ".vercel",
    ".swc",
    "node_modules",
    "__tests__",
    "coverage",
    "data",
    "docs",
    "public",
    "prisma",
    ".eslintrc.cjs",
    ".eslintrc.js",
    "settings*",
    "**/constants.*",
    "**/settings.*",
    "**/config.*",
    "*.config.*",
    "**/schema.ts"
  ]
};

export const importSettings = {
  "import/resolver": {
    typescript: {
      alwaysTryTypes: true,
      project: true
    },
    node: true
  },
  "import/parsers": {
    "@typescript-eslint/parser": [".ts", ".tsx", ".d.ts"]
  }
};

export const baseRules = {
  "@typescript-eslint/no-explicit-any": "off",
  "@typescript-eslint/no-unused-vars": [
    "warn",
    {
      argsIgnorePattern: "^_",
      varsIgnorePattern: "^_",
      caughtErrorsIgnorePattern: "^_"
    }
  ],
  complexity: ["error", 10],
  "max-depth": ["error", 3],
  camelcase: "error",
  eqeqeq: ["error", "always"],
  "prefer-const": "error",
  "no-else-return": "error",
  "no-fallthrough": "error",
  "array-callback-return": "error",
  "import/no-named-as-default": "off"
};

export function createPrettierRules(config) {
  return {
    "prettier/prettier": ["error", config]
  };
}

export { importPlugin, js, pluginPromise, prettierRecommended, tseslint };
