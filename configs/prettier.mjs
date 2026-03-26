export const prettierBase = {
  trailingComma: "none",
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  arrowParens: "avoid",
  bracketSpacing: true,
  endOfLine: "lf",
  useTabs: false,
  proseWrap: "always",
  experimentalTernaries: true
};

export const prettierReact = {
  ...prettierBase,
  printWidth: 120
};

export const prettierNode = {
  ...prettierBase,
  printWidth: 80
};
