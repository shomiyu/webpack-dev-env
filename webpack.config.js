const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const globule = require('globule');

const dir = {
  src: 'src',
  dist: 'dist',
};

const template = [];
const documents = globule.find(
  [`./${dir.src}/pages/**/*.html`, `./${dir.src}/pages/**/*.pug`],
  {
    ignore: `./${dir.src}/pages/**/_*.pug`,
  },
);

documents.forEach((document) => {
  const filename = document
    .replace(`./${dir.src}/pages/`, '')
    .replace('.pug', '.html');

  template.push(
    new HtmlWebpackPlugin({
      filename: filename,
      template: document,
      inject: false,
      minify: false,
    }),
  );
});

module.exports = {
  mode: 'development',
  entry: {
    main: [`./${dir.src}/js/index.js`, `./${dir.src}/scss/common.scss`],
  },
  output: {
    path: path.resolve(__dirname, dir.dist),
    filename: './assets/js/[name].bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          'postcss-loader',
          'sass-loader',
          'import-glob-loader',
        ],
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              sources: false,
            },
          },
          {
            loader: 'pug-html-loader',
            options: {
              pretty: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './assets/css/[name].css',
    }),
    new ESLintPlugin({
      fix: true,
    }),
    new StyleLintPlugin({
      fix: true,
      failOnError: true,
    }),
    ...template,
  ],
};
