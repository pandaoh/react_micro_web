/*
 * @Author: HxB
 * @Date: 2022-08-29 17:10:14
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-29 17:14:21
 * @Description: useMounted 自定义 hooks
 * @FilePath: \react_micro_web\src\_custom\hooks\useMounted.ts
 */
import { useEffect } from 'react';

const useMounted = (fn: () => void) => {
  useEffect(() => {
    fn?.();
  }, []);
};

export default useMounted;
