import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const defaultRootNode = document.getElementById("root");

const renderApp = (props = {}) => {
  const { container, routerBase } = props;

  ReactDOM.render(
    <React.StrictMode>
      <App routerBase={routerBase} />
    </React.StrictMode>,
    container ? container.querySelector("#root") : defaultRootNode
  );
};

if (!window.__POWERED_BY_QIANKUN__) {
  renderApp();
}

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  console.log("[react17] react app bootstraped");
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  console.log("[react17] react app props from main framework", props);
  renderApp(props);
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount(props) {
  console.log("[react17] react app props from main framework", props);

  const { container } = props;
  ReactDOM.unmountComponentAtNode(
    container ? container.querySelector("#root") : defaultRootNode
  );
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props) {
  console.log("react sub app update props", props);
  renderApp(props);
}
