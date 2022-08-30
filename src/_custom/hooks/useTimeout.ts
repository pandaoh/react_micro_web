/*
 * @Author: HxB
 * @Date: 2022-08-29 17:11:51
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-29 17:16:48
 * @Description: useTimeout 自定义 hooks
 * @FilePath: \react_micro_web\src\_custom\hooks\useTimeout.ts
 */
import { useEffect } from 'react';
import useLatest from './useLatest';

const useTimeout = (fn: () => void, delay?: number): void => {
  const fnRef = useLatest(fn);

  useEffect(() => {
    if (!delay || delay < 0) return;

    const timer = setTimeout(() => {
      fnRef.current();
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [delay]);
};

export default useTimeout;
