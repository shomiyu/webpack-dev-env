const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const StyleLintPlugin = require("stylelint-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: ["./src/js/index.js", "./src/scss/common.scss"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./assets/js/[name].bundle.js",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },
          "postcss-loader",
          "sass-loader",
          "import-glob-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./assets/css/[name].css",
    }),
    new ESLintPlugin({
      fix: true,
    }),
    new StyleLintPlugin({
      fix: true,
      failOnError: true,
    }),
  ],
};
