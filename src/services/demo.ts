/*
 * @Author: HxB
 * @Date: 2022-08-15 11:52:00
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-23 17:22:11
 * @Description: service demo
 * @FilePath: \react_micro_web\src\services\demo.ts
 */
import XHttp from '@/tools/api/xhttp';

export function login() {
  return XHttp.post('/api/login', { account: 'test', password: '123456' });
}
