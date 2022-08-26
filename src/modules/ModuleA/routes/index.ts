/*
 * @Author: HxB
 * @Date: 2022-08-15 10:36:17
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-26 14:39:05
 * @Description: 模块 A 路由配置
 * @FilePath: \react_micro_web\src\modules\ModuleA\routes\index.ts
 */
import { lazy } from 'react';
import { MODULES_ROUTE } from '@configuration/modules_router_config';
import { RouteConfig } from '@/types/router';

const moduleRoutePrefix = `/${MODULES_ROUTE}/module_a`;

const routes: RouteConfig[] = [
  {
    path: moduleRoutePrefix,
    name: 'ModuleA',
    exact: false, // 有子路由记得设置 false，就算没设置系统也会强制改为 false 。
    component: lazy(() => import('@modules/ModuleA/pages/Main')),
    defaultRoute: `${moduleRoutePrefix}/demo_a`,
    meta: {
      title: 'ModuleA',
    },
    routes: [
      {
        path: `${moduleRoutePrefix}/demo_a`,
        name: 'DemoA',
        exact: true,
        component: lazy(() => import('@modules/ModuleA/pages/DemoA')),
      },
      {
        path: `${moduleRoutePrefix}/demo_b`,
        name: 'DemoB',
        exact: true,
        component: lazy(() => import('@modules/ModuleA/pages/DemoB')),
      },
      {
        path: `${moduleRoutePrefix}/demo_x`,
        name: 'DemoX',
        exact: true,
        children: [
          {
            path: `${moduleRoutePrefix}/demo_c`,
            name: 'DemoC',
            exact: true,
            component: lazy(() => import('@modules/ModuleA/pages/DemoA')),
          },
          {
            path: `${moduleRoutePrefix}/demo_d`,
            name: 'DemoD',
            exact: true,
            component: lazy(() => import('@modules/ModuleA/pages/DemoB')),
          },
          {
            path: `${moduleRoutePrefix}/demo_y`,
            name: 'DemoY',
            exact: true,
            children: [
              {
                path: `${moduleRoutePrefix}/demo_e`,
                name: 'DemoE',
                exact: true,
                component: lazy(() => import('@modules/ModuleA/pages/DemoA')),
              },
            ],
          },
        ],
      },
    ],
  },
];

export default routes;
