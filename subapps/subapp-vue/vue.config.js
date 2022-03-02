const { defineConfig } = require("@vue/cli-service");
const { name } = require("./package");
const port = 3004;

module.exports = defineConfig({
  configureWebpack: {
    devServer: {
      hot: true,
      // disableHostCheck: true,
      port,
      client: {
        overlay: {
          warnings: false,
          errors: true,
        },
      },
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: "umd",
      chunkLoadingGlobal: `webpackJsonp_${name}`,
    },
  },
  transpileDependencies: true,
});
