/*
 * @Author: HxB
 * @Date: 2022-08-12 16:53:31
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-30 12:15:49
 * @Description: DemoB
 * @FilePath: \react_micro_web\src\modules\ModuleA\pages\DemoB\index.tsx
 */
import { Input } from 'antd';
import React from 'react';
import { useAliveController } from 'react-activation';
import useRouterChange from '@/_custom/hooks/useRouterChange';

const DemoB = () => {
  const { dropScope, refreshScope } = useAliveController();

  useRouterChange((from: string, to: string) => {
    console.log('路由变化 DemoB', from, to);
    if (to.includes('demo_a')) {
      // refreshScope(to);
    }
  });

  return (
    <div data-component="DemoB" style={{ textAlign: 'center' }}>
      DemoB
      <Input />
    </div>
  );
};

export default DemoB;
