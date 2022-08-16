/*
 * @Author: HxB
 * @Date: 2022-08-12 16:53:31
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-16 10:36:33
 * @Description: HandlerLoading 操作加载动画，需在页面最外层显示。
 * @FilePath: \react_micro_web\src\common\HandlerLoading\index.tsx
 */
import React from 'react';
import './style.scss';

const HandlerLoading = () => {
  return (
    <div className="container" data-component="HandlerLoading">
      <div className="loading"></div>
    </div>
  );
};

export default HandlerLoading;
