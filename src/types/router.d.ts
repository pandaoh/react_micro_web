/*
 * @Author: HxB
 * @Date: 2022-08-26 10:14:03
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-30 12:19:06
 * @Description: 路由声明文件
 * @FilePath: \react_micro_web\src\types\router.d.ts
 */
export interface RouteConfig {
  // 路由配置自自定义结构
  name: string;
  path: string;
  redirect?: string;
  defaultRoute?: string;
  exact?: boolean;
  component?: any;
  children?: RouteConfig[]; // 菜单(路由渲染时会同级渲染)
  routes?: RouteConfig[]; // 子路由
  roles?: string[] | string;
  meta?: {
    title?: string;
    description?: string;
    icon?: any;
    keepAlive?: boolean;
    hidden?: boolean;
  };
  [key: string]: any;
}

export interface BreadcrumbPaths {
  // 面包屑导航基础结构
  name: string;
  path: string;
  title: string;
  icon: any;
  list?: Array<BreadcrumbPaths>;
  [propName: string]: any;
}

export interface MenusType {
  // 菜单基础结构
  name: string;
  path: string;
  title: string;
  icon: any;
  openKeys: string[];
  breadcrumbPaths: BreadcrumbPaths[];
  children?: MenusType[];
  [propName: string]: any;
}

export interface ModuleMenus {
  // 模块 name : 路由配置信息与菜单
  [propName: string]: {
    name: string;
    path: string;
    title: string;
    icon: any;
    menus: Array<MenusType>;
    [propName: string]: any;
  };
}
export interface RouteMenus {
  // 路由 name : 路由菜单详情信息
  [propName: string]: MenusType;
}
