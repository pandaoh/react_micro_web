/*
 * @Author: HxB
 * @Date: 2022-08-12 16:53:31
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-24 15:21:44
 * @Description: 主文件入口
 * @FilePath: \react_micro_web\src\main.tsx
 */
import '@libs/css/reset.css';
import 'antd/dist/antd.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConfigProvider, message, notification } from 'antd';
import routes from './router/config';
import App from './views/App';
import store from '@/redux';

notification.config({
  placement: 'topRight',
  top: 30,
  duration: 3,
  rtl: false,
});

message.config({
  top: 60,
  duration: 2,
  maxCount: 3,
  rtl: true,
});

// ConfigProvider.config({
//   prefixCls: 'tai-ji', // 需配合 css 变量使用
// });

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider input={{ autoComplete: 'off' }}>
      <App routes={routes} />
    </ConfigProvider>
  </Provider>,
  document.getElementById('root'),
);
