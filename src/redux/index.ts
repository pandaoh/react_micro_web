/*
 * @Author: HxB
 * @Date: 2022-08-15 10:48:17
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-23 17:22:29
 * @Description: redux 状态总管理
 * @FilePath: \react_micro_web\src\redux\index.ts
 */
import { configureStore } from '@reduxjs/toolkit';
import loadingReducer, { loadingSelector, loadingActions } from './states/loading';

export default configureStore({
  reducer: {
    loading: loadingReducer,
  },
});

export const selectors = {
  loading: loadingSelector,
};

export const actions = {
  loading: loadingActions,
};
