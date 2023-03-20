/*
 * @Author: HxB
 * @Date: 2022-08-15 10:48:59
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-24 18:37:34
 * @Description: module A 状态管理 demo
 * @FilePath: \react_micro_web\src\modules\ModuleA\store\states\module_a.ts
 */
import { createSlice } from '@reduxjs/toolkit';

const ModuleASlice = createSlice({
  name: 'module_a',
  initialState: {
    name: 'module_a',
    version: '1.0.0',
    author: 'leo he',
  },
  reducers: {
    setModuleAState(state, { payload }) {
      for (const key in payload) {
        state[key] = payload[key];
      }
    },
  },
});

const ModuleAReducers = ModuleASlice.reducer; // store state
const ModuleActions = ModuleASlice.actions; // set state
const ModuleASelectors = (state) => state.module_a; // get state

export default {
  reducers: {
    module_a: ModuleAReducers,
  },
  actions: {
    module_a: ModuleActions,
  },
  selectors: {
    module_a: ModuleASelectors,
  },
};

// const stateName = 'module_a';
// const exportState = {
//   reducers: {},
//   actions: {},
//   selectors: {},
// };
// exportState.reducers[stateName] = ModuleASlice.reducer; // store state
// exportState.actions[stateName] = ModuleASlice.actions; // set state
// exportState.selectors[stateName] = state => state[stateName]; // get state

// export default exportState;
