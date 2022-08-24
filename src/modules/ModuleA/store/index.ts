/*
 * @Author: HxB
 * @Date: 2022-08-15 10:48:17
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-24 18:36:31
 * @Description: module A 状态总管理
 * @FilePath: \react_micro_web\src\modules\ModuleA\store\index.ts
 */
import module_a from './states/module_a';

const ModuleAReducers = {
  ...module_a.reducers,
};

const ModuleASelectors = {
  ...module_a.selectors,
};

const ModuleActions = {
  ...module_a.actions,
};

export default {
  reducers: ModuleAReducers,
  selectors: ModuleASelectors,
  actions: ModuleActions,
};
