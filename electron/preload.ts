/*
 * @Author: HxB
 * @Date: 2022-08-18 10:34:52
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-11-09 16:07:12
 * @Description: preload
 * @FilePath: \react_micro_web\electron\preload.ts
 */
import { contextBridge, ipcRenderer, ipcMain } from 'electron';
import pkg from '../package.json';

window.addEventListener('DOMContentLoaded', () => {
  console.log('HTML DOMContentLoaded');
});

contextBridge.exposeInMainWorld('myIpc', {
  send: (channel, args) => {
    return ipcRenderer.send(channel, args);
  },
  on: (channel, listener) => {
    ipcRenderer.on(channel, (event, args) => listener(args));
  },
  // invoke: (channel, args) => { // 不推荐，推荐使用 send/sendSync => event.reply == event.sender.send == win.webContents.send/event.returnValue 。
  //   return ipcRenderer.invoke(channel, args); // ipcMain.handle ...
  // },
  exit: () => {
    console.log('destroy');
    ipcRenderer.send('destroy');
  },
  getVersion: () => pkg['version'],
});
