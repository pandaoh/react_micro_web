/*
 * @Author: HxB
 * @Date: 2022-08-12 16:53:31
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-30 13:47:47
 * @Description: DemoA
 * @FilePath: \react_micro_web\src\modules\ModuleA\pages\DemoA\index.tsx
 */
import { Input } from 'antd';
import React from 'react';
import useRouterChange from '@/_custom/hooks/useRouterChange';
import useInterval from '@/_custom/hooks/useInterval';

const DemoA = () => {
  useRouterChange((from: string, to: string) => {
    console.log('路由变化 DemoA', from, to);
  });

  useInterval(
    () => {
      console.log('定时任务 demo A');
    },
    2000,
    true,
  );

  return (
    <div data-component="DemoA" style={{ textAlign: 'center' }}>
      DemoA
      <Input />
    </div>
  );
};

export default DemoA;
