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
    name: "javascript app", // app name registered
    entry: "http://127.0.0.1:5500/subapps/subapp-purehtml/src/index.html",
    container: "#micro-container",
    activeRule: "/subapp-purehtml",
  },
  // {
  //   name: "jquery with webpack app", // app name registered
  //   entry: "//localhost:3002",
  //   container: "#micro-container",
  //   activeRule: "/subapp-jquery",
  // },
  {
    name: "subapp-react", // app name registered
    entry: "http://localhost:3001",
    container: "#micro-container",
    activeRule: "/subapp-react",
  },
  {
    name: "subapp-vue", // app name registered
    entry: "http://localhost:8082",
    container: "#micro-container",
    activeRule: "/subapp-vue",
  },
]);

start();
