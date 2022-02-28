import { createApp } from "vue";
import App from "./App.vue";

let app;
const renderApp = () => {
  app = createApp(App);
  app.mount("#app");
};

renderApp();

export async function bootstrap() {
  console.log("vue1 app bootstraped");
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount() {
  renderApp();
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount() {
  app.unmounted("#app");
}
