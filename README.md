# react_micro_web

> 基于 React + TypeScript + Vite + Antd + Electron 实现的伪微前端模板(适用于开发大型/复杂项目但又人数较少的情况)

## Technology Stack

* React 17.x
* Redux Toolkit
* TypeScript
* Scss/Less
* Ant Design 4.x
* Vite 2.x
* Electron
* EsLint
* Prettier
* Husky

## Use

```bash
git clone https://github.com/pandaoh/react_micro_web.git

npm i -g js-xcmd
xcmd create-micro-web [dir]
```

## Start

* `npm install`

## Development

* `npm run dev` or `npm run dev:exe`

## Preview

* `npm run server` or `npm run server:exe`

## Build

* `npm run build` or `npm run build:exe`

## Code Check

* `npm run lint`

## Dir Structure Design

> 目录结构设计

```txt
________________________________________________________________________________
├─.helper（项目辅助工具类目录）
|    ├─prod（生产环境工具）
|    ├─dev（开发环境工具）
|    ├─ci_cd（CI/CD 工具）
├─src（源代码目录）
|  ├─_custom（主程序自定义内容目录：指令、hook、业务通用方法等...）
|  ├─types（主程序类型声明目录）
|  ├─consts（主程序通用常量目录）
|  ├─libs（主程序插件管理目录）
|  ├─tools（主程序通用工具类目录）
|  ├─locales（主程序国际化配置目录）
|  ├─common（全局通用组件目录）
|  ├─layouts（主程序通用布局组件目录）
|  ├─views（主程序页面目录）
|  ├─services（主程序接口服务目录）
|  ├─redux（主程序状态管理目录）
|  ├─router（主程序路由器与配置目录）
|  ├─resource（主程序通用资源目录）
|  ├─configuration（主程序配置管理目录）
|  ├─modules（所有子模块目录）
|  |    ├─ModuleA（模块 ModuleA 目录）
|  |    |    ├─_custom（模块自定义内容目录：指令、hook、业务通用方法等...）
|  |    |    ├─types（模块类型声明目录）
|  |    |    ├─consts（模块通用常量目录）
|  |    |    ├─plugins（模块插件管理目录）
|  |    |    ├─utils（模块通用工具类目录）
|  |    |    ├─lang（模块国际化配置目录）
|  |    |    ├─components（模块通用组件目录）
|  |    |    ├─positions（模块通用布局组件目录）
|  |    |    ├─pages（模块页面目录）
|  |    |    ├─apis（模块接口服务目录）
|  |    |    ├─store（模块状态管理目录）
|  |    |    ├─routes（模块路由器与配置目录）
|  |    |    ├─static（模块通用资源目录）
|  |    |    ├─config（模块配置管理目录）
├─public（项目通用静态资源目录）
├─declare（整体通用声明管理目录）
├─tests（测试管理目录）
├─settings（项目 settings 管理目录）
├─mocks（项目 mocks 管理目录）
├─hooks（项目 hooks 管理目录）
├─.editorconfig（编辑器通用配置文件）
├─.env.development（开发环境变量）
├─.env.production（生产环境变量）
├─.eslintignore（eslint ignore）
├─.eslintrc.js（eslint config）
├─.prettierignore（prettier ignore）
├─.prettierrc.js（prettier config）
├─.gitignore（git ignore）
├─package.json（package.json）
├─README.md（介绍文档）
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
```

## Docs

* [React](https://reactjs.bootcss.com/)
* [Redux Toolkit](http://cn.redux.js.org/redux-toolkit/overview/)
* [Vite](https://cn.vitejs.dev/guide/)
* [Ant Design](https://ant.design/components/overview-cn/)
* [Ant Design ProComponents](https://procomponents.ant.design/components/)

## Others

* [Issue](https://github.com/pandaoh/react_micro_web/issues)
* [Pull Request](https://github.com/pandaoh/react_micro_web/pulls)
* [hxbpandaoh@163.com](mailto:hxbpandaoh@163.com)
* [Blog](http://a.biugle.cn)
* Leo He

> Buy me a coffee!

<div style="display:flex;justify-content:center;align-items:center;">
  <img src="https://a.biugle.cn/images/alipay.png" style="width:200px;" alt="Alipay" title="Alipay" />
  <img src="https://a.biugle.cn/images/liuyan.gif" style="width:200px;" alt="(0.0)" title="(0.0)" />
  <img src="https://a.biugle.cn/images/wechatpay.png" style="width:200px;" alt="WeChat" title="WeChat" />
</div>
