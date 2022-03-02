/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["subapp-webpackbundled-main"] = factory();
	else
		root["subapp-webpackbundled-main"] = factory();
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bootstrap\": function() { return /* binding */ bootstrap; },\n/* harmony export */   \"mount\": function() { return /* binding */ mount; },\n/* harmony export */   \"unmount\": function() { return /* binding */ unmount; },\n/* harmony export */   \"update\": function() { return /* binding */ update; }\n/* harmony export */ });\nconst renderApp = (props) => {\n  const { container } = props;\n  const mountedNode = container\n    ? container.querySelector(\"#app\")\n    : document.body.querySelector(\"#app\");\n  // mountedNode.innerHTML = \"<div>hhhh</div>\";\n  console.log(\"mountedNode\", mountedNode);\n  console.log(\"app rendered\");\n};\n\nrenderApp({});\n\n/**\n * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。\n * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。\n */\nasync function bootstrap() {\n  console.log(\"[webpack-bundled] app bootstraped\");\n}\n\n/**\n * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法\n */\nasync function mount(props) {\n  console.log(\"[webpack-bundled] app mounted\");\n  renderApp(props);\n}\n\n/**\n * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例\n */\nasync function unmount(props) {\n  console.log(\"[webpack-bundled] app unmounted\");\n}\n\n/**\n * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效\n */\nasync function update(props) {\n  console.log(\"[webpack-bundled] app updated\");\n}\n\n\n//# sourceURL=webpack://subapp-webpackbundled-%5Bname%5D/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});