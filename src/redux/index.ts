/*
 * @Author: HxB
 * @Date: 2022-08-15 10:48:17
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-24 18:24:15
 * @Description: redux 状态总管理
 * @FilePath: \react_micro_web\src\redux\index.ts
 */
import { configureStore } from '@reduxjs/toolkit';
import ModulesRedux from './modules_states';
import MainRedux from './main_states';

export default configureStore({
  reducer: {
    ...ModulesRedux.reducers,
    ...MainRedux.reducers,
  },
});

export const selectors = {
  ...ModulesRedux.selectors,
  ...MainRedux.selectors,
};

export const actions = {
  ...ModulesRedux.actions,
  ...MainRedux.actions,
};
