/*
 * @Author: HxB
 * @Date: 2022-08-29 17:10:14
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-29 17:14:09
 * @Description: useUnmounted 自定义 hooks
 * @FilePath: \react_micro_web\src\_custom\hooks\useUnmount.ts
 */
import { useEffect, useRef } from 'react';

const useUnmounted = (fn: () => void) => {
  const ref = useRef(fn);
  ref.current = fn;

  useEffect(
    () => () => {
      fn?.();
    },
    [],
  );
};

export default useUnmounted;
