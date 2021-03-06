import "./index.css";

const renderApp = (props) => {
  const { container } = props;
  const mountedNode = container
    ? container.querySelector("#app")
    : document.body.querySelector("#app");
  // mountedNode.innerHTML = `<div> This is a subapp.`;
  const buttonNode = document.createElement("button");
  buttonNode.addEventListener("click", function (e) {
    alert("我是子应用2的按钮！");
  });
  buttonNode.innerText = "点我！";
  mountedNode.appendChild(buttonNode); // 追加新元素

  console.log("mountedNode", mountedNode);

  console.log("app rendered");
};

if (!window.__POWERED_BY_QIANKUN__) {
  renderApp({});
}

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  console.log("[webpack-bundled] app bootstraped");
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  console.log("[webpack-bundled] app mounted");
  renderApp(props);
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount(props) {
  console.log("[webpack-bundled] app unmounted");
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props) {
  console.log("[webpack-bundled] app updated");
}
