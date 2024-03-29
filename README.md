# chrome-extension-vue-template

> a Chrome extension tools built with Vite + Vue, and Manifest v3
>
> 本项目基于 [create-chrome-ext](https://github.com/guocaoyi/create-chrome-ext) 模板进行修改

## change

- 增加 github action 自动构建，自动发布 Release
- 目录结构调整
- 增加注释

## Installing

1. Check if your `Node.js` version is >= **18**.
2. Change or configure the name of your extension on `src/manifest`.
3. Run `npm install` to install the dependencies.

## Developing

```shell
cd chrome-extension-vue-template

yarn dev
```

### Chrome Extension Developer Mode

1. set your Chrome browser 'Developer mode' up
2. click 'Load unpacked', and select `chrome-extension-vue-template/build` folder

### Normal FrontEnd Developer Mode

1. access `http://0.0.0.0:3000/`
2. when debugging popup page, open `http://0.0.0.0:3000//popup.html`
3. when debugging options page, open `http://0.0.0.0:3000//options.html`

## Packing

After the development of your extension run the command

```shell
$ npm run build
```
