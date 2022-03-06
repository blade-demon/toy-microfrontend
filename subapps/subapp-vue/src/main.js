import { createApp } from "vue";
import routes from "./router";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

let app;
const renderApp = (props) => {
  const { container, routerBase } = props;
  const router = createRouter({
    // 根据宿主应用下发的routerBase设置应用的相对路由
    history: createWebHistory(
      window.__POWERED_BY_QIANKUN__ ? routerBase : process.env.BASE_URL
    ),
    routes,
  });

  app = createApp(App); // 创建app实例
  app.use(router); // 加载路由
  app.mount(container ? container.querySelector("#app") : "#app"); // 设置app挂载点
};

// 非乾坤环境独立运行
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
  console.log("props", props);

  renderApp(props);
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount() {
  console.log("[vue3.0] app unmounted");
  app.unmount();
  app = null;
}
