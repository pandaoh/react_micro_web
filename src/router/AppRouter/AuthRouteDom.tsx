/*
 * @Author: HxB
 * @Date: 2022-08-15 11:24:12
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-30 13:41:47
 * @Description: 路由守卫子组件
 * @FilePath: \react_micro_web\src\router\AppRouter\AuthRouteDom.tsx
 */
import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import KeepAlive from 'react-activation';
import store, { actions } from '@/redux';
import { DEV_ROLES, IS_DEV } from '@/consts/dev';

class AuthRoute extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { path, roles } = this.props;

    // alert(JSON.stringify(this.props));

    // 用户角色，全局状态管理可自行引入 redux 。
    const userRoles = IS_DEV ? DEV_ROLES : undefined;

    // 用户已登录，还想去登录页面。禁止
    if (userRoles && path === '/login') {
      return <Redirect to="/home" />;
    }

    const $AuthRouteDom =
      // https://github.com/CJY0208/react-activation/issues/18
      !this.props.routes ? (
        <KeepAlive
          cacheKey={this.props.name}
          id={this.props.path}
          key={this.props.path}
          name={this.props.path}
          when={() => [this.props?.meta?.keepAlive ?? false, this.props?.meta?.keepAlive ?? false]}
        >
          <this.props.component {...this.props} routes={this.props.routes} />
        </KeepAlive>
      ) : (
        <this.props.component {...this.props} routes={this.props.routes} />
      );

    // 如果路由无需校验 不管
    if (!roles) {
      return $AuthRouteDom;
    }

    // 用户未登录，且路由需要校验，则跳转到登录页。
    if (!userRoles) {
      return <Redirect to="/login" />;
    }

    // 路由需要校验，且用户已登录。有权限进入，无权限 404 。
    if (roles?.some((role: any) => userRoles?.includes(role))) {
      return $AuthRouteDom;
    } else {
      return <Redirect to="/404" />;
    }
  }
}

export default withRouter(AuthRoute);
