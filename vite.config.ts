/*
 * @Author: HxB
 * @Date: 2022-08-12 16:53:31
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-20 21:00:20
 * @Description: Vite 配置文件
 * @FilePath: \react_micro_web\vite.config.ts
 */
import * as path from 'path';
import { defineConfig } from 'vite';
import reactPlugin from '@vitejs/plugin-react';
import electronPlugin from 'vite-plugin-electron';
import eslint from 'vite-plugin-eslint';

// eslint-disable-next-line no-undef
const getPath = (_path) => path.resolve(__dirname, _path);

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  console.table({ command, mode });
  const pluginsConfig = [
    eslint({
      fix: true,
    }),
    reactPlugin(),
  ];
  if (mode === 'electron') {
    pluginsConfig.push(
      electronPlugin({
        main: {
          entry: 'electron/main.ts', // 主进程文件
        },
        preload: {
          // eslint-disable-next-line no-undef
          input: path.join(__dirname, 'electron/preload.ts'), // 预加载文件
        },
      }),
    );
  }
  return {
    root: getPath('./'),
    base: './',
    build: {
      target: 'modules',
      outDir: 'dist',
      assetsDir: 'assets',
      // vite 3.0.0+ 需要安装 terser
      minify: 'terser',
      terserOptions: {
        // 生产环境去除 console
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
    // 作为静态资源服务的文件夹，并且始终按原样提供或复制而无需进行转换。
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
    preview: {
      // vite preview --port=9527 --host
      port: 9527,
    },
    server: {
      cors: true,
      // 在开发服务器启动时自动在浏览器中打开应用程序
      open: true,
      hmr: true,
      host: true,
      port: 1998,
      proxy: {
        '^/api': {
          target: 'http://192.168.120.88',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '/api/test/'),
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
    plugins: pluginsConfig,
  };
});
