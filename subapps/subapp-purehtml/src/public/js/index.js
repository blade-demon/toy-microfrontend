/**
 * 渲染页面，返回一个promise
 * @param {Object} $
 * @returns Promise
 */
const render = ($) => {
  $("#btn").on("click", function () {
    alert("我是子应用1的按钮！");
  });
  // $("#purehtml-container").html("Hello, render with jQuery!");
  return Promise.resolve();
};

if (!window.__POWERED_BY_QIANKUN__) {
  render($);
}

((global) => {
  global["purehtml"] = {
    bootstrap: () => {
      console.log("purehtml bootstrap");
      return Promise.resolve();
    },
    mount: () => {
      console.log("purehtml mount");
      return render($);
    },
    unmount: () => {
      console.log("purehtml unmount");
      return Promise.resolve();
    },
  };
})(window);
