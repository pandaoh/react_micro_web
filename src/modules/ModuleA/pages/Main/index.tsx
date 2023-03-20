/*
 * @Author: HxB
 * @Date: 2022-08-12 16:53:31
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-30 12:14:27
 * @Description: ModuleAMain
 * @FilePath: \react_micro_web\src\modules\ModuleA\pages\Main\index.tsx
 */
import React from 'react';
import './style.scss';
import { useHistory } from 'react-router-dom';
import { Button, Space } from 'antd';
import { useAliveController } from 'react-activation';
import RouterView from '@/router/AppRouter/RouterView';

const ModuleAMain = (props: any) => {
  const { getCachingNodes, dropScope, refreshScope } = useAliveController();
  const cachingNodes = getCachingNodes();

  const history = useHistory();
  const goRouter = (path: string) => {
    history.push({
      pathname: path,
    });
  };

  return (
    <div className="container" data-component="ModuleAMain">
      <h1 style={{ textAlign: 'center', width: '100%', margin: 'auto' }}>ModuleAMain</h1>
      <Space align="center" split="|" style={{ width: '100%', justifyContent: 'center' }}>
        <Button
          type="primary"
          onClick={() => {
            goRouter('/modules/module_a/demo_a');
          }}
        >
          DemoA
        </Button>
        <Button
          type="ghost"
          onClick={() => {
            goRouter('/modules/module_a/demo_b');
          }}
        >
          DemoB
        </Button>
        {cachingNodes.map((node) => (
          <Button
            key={node.name}
            type="ghost"
            onClick={() => {
              // refreshScope(node.name);
              dropScope(node.name);
            }}
          >
            {node.id}
          </Button>
        ))}
      </Space>
      <RouterView routes={props.routes} defaultRoute={props.defaultRoute} />
    </div>
  );
};

export default ModuleAMain;
