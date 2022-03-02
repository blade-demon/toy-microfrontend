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
    library: "jQueryWebpackSubApp",
    libraryTarget: "window",
    chunkLoadingGlobal: `webpackJsonp_${packageName}`,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "jquery with webpack",
      filename: "./src/index.html",
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
    port: 9000,
  },
};
