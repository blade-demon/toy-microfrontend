import { createApp } from "vue";
import App from "./App.vue";

let app;
const renderApp = (props) => {
  const { container } = props;

  app = createApp(App);
  app.mount(container ? container.querySelector("#app") : "#app");
};

if (!window.__POWERED_BY_QIANKUN__) {
  renderApp({});
}

export async function bootstrap() {
  console.log("[vue3.0] app bootstraped");
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  console.log("[vue3.0] app mounted");
  renderApp(props);
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount() {
  console.log("[vue3.0] app unmounted");
  app.unmount();
  // app = null;
}
