/*
 * @Author: HxB
 * @Date: 2022-08-15 10:42:30
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-24 15:33:29
 * @Description: 路由渲染组件
 * @FilePath: \react_micro_web\src\router\AppRouter\RouterView.tsx
 */
import { Redirect, Route, Switch } from 'react-router-dom';
import React, { Suspense } from 'react';
import AuthRouteDom from './AuthRouteDom';
import RouterLoading from '@/common/RouterLoading';

const RouterView = (props: any) => {
  const { routes } = props;

  return (
    <Suspense fallback={<RouterLoading />}>
      <Switch>
        {routes.map((route: any) => {
          return route.redirect ? (
            <Route key={route.path} exact={route.exact} path={route.path}>
              <Redirect to={route.redirect} />
            </Route>
          ) : (
            <Route
              key={route.path}
              exact={route.exact && !route.routes?.length}
              path={route.path}
              render={(routeProps) => {
                return <AuthRouteDom {...route} {...routeProps} />;
              }}
            />
          );
        })}
        {props.defaultRoute && <Redirect to={props.defaultRoute} />}
      </Switch>
    </Suspense>
  );
};

export default RouterView;
