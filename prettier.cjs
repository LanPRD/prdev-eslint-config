const defaultPrettier = {
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

const reactPrettier = {
  printWidth: 120,
  ...defaultPrettier
};

const nodePrettier = {
  printWidth: 80,
  ...defaultPrettier
};

module.exports = { reactPrettier, nodePrettier };
