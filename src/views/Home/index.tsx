/*
 * @Author: HxB
 * @Date: 2022-08-12 16:53:31
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-24 15:39:52
 * @Description: 首页
 * @FilePath: \react_micro_web\src\views\Home\index.tsx
 */
import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { HomeTwoTone } from '@ant-design/icons';
import menuIcon from './assets/menu.png';
import CardMenus from '@/layouts/CardMenus';
import { actions, selectors } from '@/redux';
import RouterView from '@/router/AppRouter/RouterView';

const Home = (props: any) => {
  const dispatch = useDispatch();
  const { isLoading, msg } = useSelector(selectors.loading);

  // redux demo
  console.log({ isLoading, msg }, props.isLoading, props.msg, props.startLoading, props.stopLoading);
  useEffect(() => {
    dispatch(actions.loading.startLoading('msg'));
    setTimeout(() => dispatch(actions.loading.stopLoading()), 2000);
  }, []);

  const menus = [
    {
      name: '首页',
      path: '/',
      icon: <HomeTwoTone />,
    },
    {
      name: '登录',
      path: '/login',
      imgURL: menuIcon,
    },
    {
      name: '404',
      path: '/404',
      imgURL: menuIcon,
    },
  ];

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div style={{ width: '100%', height: '50%' }}>
        <CardMenus menus={menus} />
      </div>
      <div style={{ width: '600px', height: '300px', border: '1px solid black', margin: '20px auto' }}>
        <RouterView routes={props.routes} defaultRoute={props.defaultRoute} />
      </div>
    </div>
  );
};

// redux connect 将 store 中的 state 、 action 、 dispatch 导入到组件中。(第一种方式)
export default connect(selectors.loading, actions.loading)(Home);
