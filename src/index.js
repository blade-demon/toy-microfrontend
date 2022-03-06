import React from "react";
import ReactDOM from "react-dom";
import { registerMicroApps, start } from "qiankun"; // 引入依赖
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// 注册微应用
registerMicroApps([
  {
    name: "subapp-webpackbundled", // app name registered
    entry: "http://localhost:3003",
    container: "#micro-container",
    activeRule: "/subapp-webpackbundled",
  },
  {
    name: "subapp-purehtml", // app name registered
    entry: "http://localhost:3002",
    container: "#micro-container",
    activeRule: "/subapp-purehtml",
  },
  {
    name: "subapp-react", // app name registered
    entry: "http://localhost:3001",
    container: "#micro-container",
    activeRule: "/subapp-react",
    props: {
      routerBase: "/subapp-react", // 下发路由给子应用，子应用根据该值去定义qiankun环境下的路由
    },
  },
  {
    name: "subapp-vue", // app name registered
    entry: "http://localhost:3004",
    container: "#micro-container",
    activeRule: "/subapp-vue",
    props: {
      routerBase: "/subapp-vue", // 下发路由给子应用，子应用根据该值去定义qiankun环境下的路由
    },
  },
]);

start();
