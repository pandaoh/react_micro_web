/*
 * @Author: HxB
 * @Date: 2022-08-12 16:53:31
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-16 10:16:40
 * @Description: RouterLoading 路由加载独立组件
 * @FilePath: \react_micro_web\src\common\RouterLoading\index.tsx
 */
import React from 'react';
import './style.scss';

const RouterLoading = () => {
  return (
    <div className="container" data-component="RouterLoading">
      <div className="loading-box">
        <div className="sun">
          <div className="sun-body">
            <div className="line" style={{ transform: 'rotate(calc(1 * 45deg))' }}></div>
            <div className="line" style={{ transform: 'rotate(calc(2 * 45deg))' }}></div>
            <div className="line" style={{ transform: 'rotate(calc(3 * 45deg))' }}></div>
            <div className="line" style={{ transform: 'rotate(calc(4 * 45deg))' }}></div>
            <div className="line" style={{ transform: 'rotate(calc(5 * 45deg))' }}></div>
            <div className="line" style={{ transform: 'rotate(calc(6 * 45deg))' }}></div>
            <div className="line" style={{ transform: 'rotate(calc(7 * 45deg))' }}></div>
            <div className="line" style={{ transform: 'rotate(calc(8 * 45deg))' }}></div>
          </div>
          <div className="eye"></div>
        </div>
        <div className="horizon"></div>
      </div>
    </div>
  );
};

export default RouterLoading;
