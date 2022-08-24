/*
 * @Author: HxB
 * @Date: 2022-08-15 10:48:17
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-24 18:24:23
 * @Description: 主程序状态总配置
 * @FilePath: \react_micro_web\src\redux\main_states.ts
 */
import loading from './states/loading';

const MainReducers = {
  ...loading.reducers,
};

const MainSelectors = {
  ...loading.selectors,
};

const MainActions = {
  ...loading.actions,
};

export default {
  reducers: MainReducers,
  selectors: MainSelectors,
  actions: MainActions,
};
