/*
 * @Author: HxB
 * @Date: 2022-08-12 16:53:31
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-16 17:53:38
 * @Description: AppLoading 主程序加载独立组件
 * @FilePath: \react_micro_web\src\common\AppLoading\index.tsx
 */
import React from 'react';
import './style.scss';

const AppLoading = () => {
  return (
    <div className="container" data-component="AppLoading">
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

export default AppLoading;
