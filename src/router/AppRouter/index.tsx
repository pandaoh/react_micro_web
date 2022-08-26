/*
 * @Author: HxB
 * @Date: 2022-08-15 10:41:35
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-26 14:46:34
 * @Description: 主路由组件入口
 * @FilePath: \react_micro_web\src\router\AppRouter\index.tsx
 */
import React from 'react';
import { HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import RouterView from './RouterView';
import { selectors } from '@/redux';
import HandlerLoading from '@/common/HandlerLoading';
import { DEFAULT_ROUTE } from '@/configuration/modules_router_config';

type AppRouterProps = {
  routes: any;
};

const AppRouter: React.FC<AppRouterProps> = (props: any) => {
  return (
    <HashRouter>
      <RouterView routes={props.routes} defaultRoute={DEFAULT_ROUTE} />
      {props.isLoading && <HandlerLoading />}
    </HashRouter>
  );
};

export default connect(selectors.loading)(AppRouter);
