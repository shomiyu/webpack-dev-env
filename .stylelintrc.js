module.exports = {
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-prettier/recommended',
  ],
  plugins: ['stylelint-prettier', 'stylelint-scss', 'stylelint-order'],
  ignoreFiles: ['**/node_modules/**', '/**/*.js'],
  rules: {
    'prettier/prettier': [true, { singleQuote: true }],
    'order/properties-alphabetical-order': true,
    'string-quotes': 'single',
    'color-hex-case': 'lower',
    'function-url-quotes': 'always',
    'no-descending-specificity': null,
    'no-duplicate-selectors': null,
  },
};
