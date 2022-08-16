/*
 * @Author: HxB
 * @Date: 2022-08-12 16:53:31
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-16 17:41:20
 * @Description: 主页面
 * @FilePath: \react_micro_web\src\main.tsx
 */
import '@libs/css/reset.css';
import 'antd/dist/antd.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './views/App';
import store from '@/redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
