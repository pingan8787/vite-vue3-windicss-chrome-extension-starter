# vite-vue3-windicss-chrome-extension-starter

基于 [Vite](https://cn.vitejs.dev/) + [Vue3](https://v3.cn.vuejs.org/) + [Windicss](https://cn.windicss.org/) 开发谷歌插件的 Starter 项目。

## 安装
```bash
// npm
npm install

// pnpm
pnpm install
```

## 运行
```bash
// npm
npm run watch

// pnpm
pnpm watch
```

## 添加拓展程序
进入谷歌浏览器 `chrome://extensions/` 页面，选择“加载已解压的扩展程序”，选择该项目下 `dist` 目录。

## 新页面开发
在项目根目录 `pages/` 下增加目标页入口文件（如：`new.html`），并在 `src/pages/` 目录下增加相同名称的目录进行开发。
该目录内容包含：`main.ts` 入口文件和 `{name}.vue` 模版文件。
打包工具会自动读取 "./src/views/**/main.ts" 下所有文件。

## 资源分享
- [Awesome Vite.js](https://github.com/vitejs/awesome-vite)
- [Vite Rollup Plugins](https://vite-rollup-plugins.patak.dev/)
- [Chrome Apps Documentation](https://developer.chrome.com/docs/apps/)
- [webext-bridge](https://github.com/antfu/webext-bridge)
- [vitesse-webext](https://github.com/antfu/vitesse-webext)
- [Vitesse](https://github.com/antfu/vitesse)