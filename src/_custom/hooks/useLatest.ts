/*
 * @Author: HxB
 * @Date: 2022-08-29 17:15:54
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-29 17:17:12
 * @Description: useLatest 自定义 hooks
 * @FilePath: \react_micro_web\src\_custom\hooks\useLatest.ts
 */
import { useRef } from 'react';

const useLatest = <T>(value: T) => {
  const ref = useRef(value);
  ref.current = value;

  return ref;
};

export default useLatest;
