/*
 * @Author: HxB
 * @Date: 2022-08-12 16:53:31
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-16 17:53:41
 * @Description: RouterLoading 路由加载独立组件
 * @FilePath: \react_micro_web\src\common\RouterLoading\index.tsx
 */
import React from 'react';
import './style.scss';

const RouterLoading = () => {
  return (
    <div className="container" data-component="RouterLoading">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
  );
};

export default RouterLoading;
