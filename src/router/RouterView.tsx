/*
 * @Author: HxB
 * @Date: 2022-08-15 10:42:30
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-23 17:22:08
 * @Description: 动态路由渲染组件
 * @FilePath: \react_micro_web\src\router\RouterView.tsx
 */
import { Route, Switch } from 'react-router-dom';
import React, { Suspense } from 'react';
import AuthRouteDom from './AuthRouteDom';
import RouterLoading from '@/common/RouterLoading';

const RouterView = (props: any) => {
  const { routes } = props;
  return (
    <Suspense fallback={<RouterLoading />}>
      <Switch>
        {routes.map((route: any) => {
          return (
            <Route
              key={route.path}
              exact={route.exact}
              path={route.path}
              render={routeProps => {
                return <AuthRouteDom {...route} {...routeProps} />;
              }}
            />
          );
        })}
      </Switch>
    </Suspense>
  );
};

export default RouterView;
