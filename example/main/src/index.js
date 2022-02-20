import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { registerMicroApps, start } from 'qiankun';

// 注册子应用
registerMicroApps([
  {
    name: 'vue1', // 子应用名称
    entry: 'http://localhost:8082', // 子应用入口链接
    container: '#micro-container', // 挂载点
    activeRule: '/vue1', // 子应用路由
  },
  {
    name: 'vue2',
    entry: "http://localhost:8083",
    container: '#micro-container',
    activeRule: '/vue2',
  },
]);

start();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)


