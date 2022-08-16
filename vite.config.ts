/*
 * @Author: HxB
 * @Date: 2022-08-12 16:53:31
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-15 18:32:51
 * @Description: Vite 配置文件
 * @FilePath: \react_micro_web\vite.config.ts
 */
import path from 'path';
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

// eslint-disable-next-line no-undef
const getPath = _path => path.resolve(__dirname, _path);

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  console.table({ command, mode });
  return {
    root: getPath('./'),
    base: './',
    build: {
      target: 'modules',
      outDir: 'dist',
      assetsDir: 'assets',
      minify: 'terser',
    },
    publicDir: getPath('public'),
    resolve: {
      alias: {
        '@': getPath('src'),
        '@public': getPath('public'),
        '@settings': getPath('settings'),
        '@_custom': getPath('src/_custom'),
        '@common': getPath('src/common'),
        '@consts': getPath('src/consts'),
        '@configuration': getPath('src/configuration'),
        '@layouts': getPath('src/layouts'),
        '@libs': getPath('src/libs'),
        '@locales': getPath('src/locales'),
        '@redux': getPath('src/redux'),
        '@modules': getPath('src/modules'),
        '@resource': getPath('src/resource'),
        '@router': getPath('src/router'),
        '@tools': getPath('src/tools'),
        '@services': getPath('src/services'),
        '@types': getPath('src/types'),
        '@views': getPath('src/views'),
      },
    },
    server: {
      cors: true,
      open: true,
      port: 1998,
      proxy: {
        '^/api': {
          target: 'http://192.168.120.88',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '/api/test/'),
        },
        '^/upload': {
          target: 'http://a.biugle.cn',
          changeOrigin: true,
        },
        '^/test/api/.*': {
          target: 'http://192.168.120.88',
          changeOrigin: true,
        },
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          charset: false,
          javascriptEnabled: true,
          additionalData: '@import "@_custom/css/global.scss";',
        },
      },
    },
    plugins: [reactRefresh()],
  };
});
