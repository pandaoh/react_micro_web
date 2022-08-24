/*
 * @Author: HxB
 * @Date: 2022-08-24 17:40:10
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-24 18:29:58
 * @Description: 所有模块状态总配置
 * @FilePath: \react_micro_web\src\redux\modules_states.ts
 */
import ModuleA from '@modules/ModuleA/store';

const ModulesReducers = {
  ...ModuleA.reducers,
};

const ModulesSelectors = {
  ...ModuleA.selectors,
};

const ModulesActions = {
  ...ModuleA.actions,
};

export default {
  reducers: ModulesReducers,
  selectors: ModulesSelectors,
  actions: ModulesActions,
};
