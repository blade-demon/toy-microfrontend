/**
 * 渲染页面，返回一个promise
 * @param {Object} $
 * @returns Promise
 */
const render = ($) => {
  // $("#purehtml-container").html("Hello, render with jQuery!");
  return Promise.resolve();
};

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
