/*
 * @Author: HxB
 * @Date: 2022-08-15 10:41:35
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-23 17:22:02
 * @Description: 路由组件入口
 * @FilePath: \react_micro_web\src\router\index.tsx
 */
import React from 'react';
import { HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import routes from './router_config';
import RouterView from './RouterView';
import { selectors } from '@/redux';
import HandlerLoading from '@/common/HandlerLoading';

const AppRouter = (props: any) => {
  return (
    <HashRouter>
      <RouterView routes={routes} />
      {props.isLoading && <HandlerLoading />}
    </HashRouter>
  );
};

export default connect(selectors.loading)(AppRouter);
