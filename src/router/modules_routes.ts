/*
 * @Author: HxB
 * @Date: 2022-08-15 10:36:17
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-26 14:44:42
 * @Description: 所有模块路由集中配置
 * @FilePath: \react_micro_web\src\router\modules_routes.ts
 */
import ModuleARoutes from '@modules/ModuleA/routes';
import { RouteConfig, ModuleMenus, MenusType, BreadcrumbPaths, RouteMenus } from '@/types/router';
import { DEFAULT_ICONS } from '@/configuration/modules_router_config';

const modules = [...ModuleARoutes];

/* ------------------------------ 模块化处理开始 ------------------------------ */

const ROUTE_MENUS_LIST: ModuleMenus = {};
const ROUTE_MENUS_MAP: RouteMenus = {};
const defaultBreadcrumbPaths: BreadcrumbPaths = { name: 'App', path: '/', title: '首页', icon: DEFAULT_ICONS.home };
defaultBreadcrumbPaths.list = modules.map((route: RouteConfig) => ({
  name: route.name,
  path: route.path,
  title: route?.meta?.title ?? route.name,
  icon: route?.meta?.icon ?? DEFAULT_ICONS.module,
}));

function _getSubRouteMenus(
  routes: Array<RouteConfig>,
  openKeys: string[] = [],
  breadcrumbPaths: BreadcrumbPaths[] = [defaultBreadcrumbPaths],
) {
  const newSubRouteMenus = [];
  routes.forEach((routeConfig: RouteConfig) => {
    if (routeConfig?.meta?.hidden) {
      return;
    }
    const hasChildren = routeConfig.children && routeConfig.children?.length;
    const basicInfo = {
      name: routeConfig.name,
      path: routeConfig.path,
      title: routeConfig?.meta?.title ?? routeConfig.name,
      icon: routeConfig?.meta?.icon ?? hasChildren ? DEFAULT_ICONS.menus : DEFAULT_ICONS.menuItem,
    };
    const currentOpenKeys = openKeys.length === 0 ? [routeConfig.name] : [...openKeys, routeConfig.name];
    const currentBreadcrumbPaths = [...breadcrumbPaths, basicInfo];
    const currentMenu: MenusType = {
      ...basicInfo,
      openKeys: currentOpenKeys,
      breadcrumbPaths: currentBreadcrumbPaths,
    };
    if (hasChildren) {
      currentMenu.children = _getSubRouteMenus(routeConfig.children, currentOpenKeys, currentBreadcrumbPaths);
    }
    ROUTE_MENUS_MAP[routeConfig.name] = currentMenu;
    newSubRouteMenus.push(currentMenu);
  });
  return newSubRouteMenus;
}
function getRoutesMenus(routeConfig: RouteConfig): void {
  if (!ROUTE_MENUS_LIST[routeConfig.name]) {
    ROUTE_MENUS_LIST[routeConfig.name] = {
      name: routeConfig.name,
      path: routeConfig.path,
      title: routeConfig?.meta?.title ?? routeConfig.name,
      icon: routeConfig?.meta?.icon ?? DEFAULT_ICONS.module,
      menus: [],
    };
  }
  if (routeConfig.routes && routeConfig.routes?.length) {
    ROUTE_MENUS_LIST[routeConfig.name].menus = _getSubRouteMenus(routeConfig.routes);
  }
}
for (const routeConfig of modules) {
  getRoutesMenus(routeConfig as RouteConfig);
}

// 因为需要支持多级菜单，所以路由配置时有多级菜单时，需配置 children，多级路由则配置 routes，但是注册路由时需进行拉平处理，方便直接引入使用。
function _flatModuleSubRoutes(subRoutes: RouteConfig[]) {
  const newSubRoutes: RouteConfig[] = [];
  subRoutes.forEach((routConfig: RouteConfig) => {
    if (!routConfig.children || !routConfig.children?.length) {
      newSubRoutes.push(routConfig);
      return;
    }
    if (routConfig.children) {
      newSubRoutes.push(..._flatModuleSubRoutes(routConfig.children));
    }
  });
  return newSubRoutes;
}

console.log('ROUTE_MENUS_LIST===>', ROUTE_MENUS_LIST);
console.log('ROUTE_MENUS_MAP===>', ROUTE_MENUS_MAP);
console.log(
  'modules===>',
  modules.map((moduleRouteConfig: RouteConfig) => {
    try {
      moduleRouteConfig.routes = _flatModuleSubRoutes(moduleRouteConfig.routes);
      return moduleRouteConfig;
    } catch (e) {
      console.log('middlewareModuleRoutesError=====>', e);
      return moduleRouteConfig;
    }
  }),
);

/* ------------------------------ 模块化处理结束 ------------------------------ */

// 此处可 filter 用户 roles 调整路由与菜单结构。
export const MENUS_LIST = ROUTE_MENUS_LIST;
export const MENUS_MAP = ROUTE_MENUS_MAP;
export default modules.map((moduleRouteConfig: RouteConfig) => {
  try {
    moduleRouteConfig.routes = _flatModuleSubRoutes(moduleRouteConfig.routes);
    return moduleRouteConfig;
  } catch (e) {
    console.log('middlewareModuleRoutesError=====>', e);
    return moduleRouteConfig;
  }
});
