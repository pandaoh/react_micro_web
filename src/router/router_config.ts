/*
 * @Author: HxB
 * @Date: 2022-04-13 10:36:17
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-16 18:03:20
 * @Description: 路由配置
 * @FilePath: \react_micro_web\src\router\router_config.ts
 */
import { sleep } from 'js-xxx';
import { lazy } from 'react';

const routes = [
  {
    path: '/home',
    exact: true,
    redirect: '/',
  },
  {
    path: '/',
    exact: true,
    name: 'Home',
    roles: ['admin'],
    component: lazy(async () => import('@views/Home')),
    meta: {
      title: '首页',
    },
  },
  // {
  //   path: '/test/:paramsName',
  //   // this.props.match.params.paramsName
  //   name: 'Test',
  //   exact: true,
  //   component: lazy(() => import('@pages/Home')),
  //   meta: {
  //     title: 'test',
  //   },
  //   // 若有子页面，此为参考
  //   routes: [
  //     {
  //       path: '/test/:paramsName/demo1',
  //       name: 'TestDemo1',
  //       exact: true,
  //       component: lazy(() => import('@pages/Settings')),
  //     },
  //     {
  //       path: '/test/:paramsName/demo2',
  //       name: 'TestDemo2',
  //       exact: true,
  //       component: lazy(() => import('@pages/Settings')),
  //     },
  //   ],
  // },
  {
    path: '/login',
    name: 'Login',
    component: lazy(() => import('@views/Login')),
    meta: {
      title: '登录页面',
    },
    exact: true,
  },
  {
    path: null,
    name: '404',
    component: lazy(async () => {
      await sleep(3500); // 模拟异步加载，展示加载动画。
      return import('@views/404');
    }),
    meta: {
      title: '404',
    },
    exact: true,
  },
];

export default routes;
