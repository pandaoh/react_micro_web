/*
 * @Author: HxB
 * @Date: 2022-08-15 10:36:17
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-26 15:17:59
 * @Description: 路由配置文件
 * @FilePath: \react_micro_web\src\router\index.ts
 */
import { sleep } from 'js-xxx';
import { lazy } from 'react';
import { DEFAULT_MODULE, MODULES_ROUTE_NAME, MODULES_ROUTE } from '@configuration/modules_router_config';
import modules from './modules_routes';
import { RouteConfig } from '@/types/router';

const routes: RouteConfig[] = [
  {
    name: 'App',
    path: '/',
    redirect: '/login',
    exact: true,
  },
  {
    name: 'Home',
    path: '/home',
    exact: true,
    redirect: `/${MODULES_ROUTE}`,
  },
  {
    path: `/${MODULES_ROUTE}`,
    exact: false,
    name: MODULES_ROUTE_NAME,
    roles: ['admin'],
    component: lazy(async () => import('@views/Home')),
    // meta: {
    //   title: '首页',
    //   description: 'Welcome to the TaiJi!',
    //   icon: 'HomeFilled',
    //   defaultKeepAlive: false,
    //   keepAlive: false,
    //   hidden: false,
    // },
    defaultRoute: `/${MODULES_ROUTE}/${DEFAULT_MODULE}`,
    routes: [...modules],
  },
  {
    path: '/login',
    name: 'Login',
    component: lazy(() => import('@views/Login')),
    exact: true,
  },
  {
    path: null,
    name: '404',
    component: lazy(async () => {
      await sleep(3500); // 模拟异步加载，展示加载动画。
      return import('@views/404');
    }),
    exact: true,
  },
];

export default routes;
