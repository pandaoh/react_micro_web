/*
 * @Author: HxB
 * @Date: 2022-08-15 10:48:59
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-24 18:38:00
 * @Description: redux loading module
 * @FilePath: \react_micro_web\src\redux\states\loading.ts
 */
import { createSlice } from '@reduxjs/toolkit';

const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    isLoading: false,
    msg: '',
  },
  reducers: {
    startLoading(state, { payload }) {
      console.log('startLoading', payload);
      state.isLoading = true;
      state.msg = payload;
    },
    stopLoading(state) {
      console.log('stopLoading');
      state.isLoading = false;
      state.msg = '';
    },
  },
});

const LoadingReducers = loadingSlice.reducer; // store state
const LoadingActions = loadingSlice.actions; // set state
const LoadingSelectors = (state) => state.loading; // get state

export default {
  reducers: {
    loading: LoadingReducers,
  },
  actions: {
    loading: LoadingActions,
  },
  selectors: {
    loading: LoadingSelectors,
  },
};
