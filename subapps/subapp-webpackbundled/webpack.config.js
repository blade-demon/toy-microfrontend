const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const packageName = require("./package.json").name;

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
    // 这里改成跟主应用中注册的一致
    library: `${packageName}-[name]`,
    libraryTarget: "umd",
    chunkLoadingGlobal: `webpackJsonp_${packageName}`,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack bundled app",
      template: "./src/index.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    compress: true,
    port: 3003,
  },
};
