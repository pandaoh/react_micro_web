/*
 * @Author: HxB
 * @Date: 2022-08-12 16:53:31
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-16 10:15:54
 * @Description: AppLoading 主程序加载独立组件
 * @FilePath: \react_micro_web\src\common\AppLoading\index.tsx
 */
import React from 'react';
import './style.scss';

const AppLoading = () => {
  return (
    <div className="container" data-component="AppLoading">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
  );
};

export default AppLoading;
