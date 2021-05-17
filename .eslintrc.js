module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  plugins: ["prettier"],
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "error",
    semi: ["error", "always", { omitLastInOneLineBlock: true }],
  },
};
