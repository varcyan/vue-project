# life-web

> 非车生命表

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 目录结构
|目录/文件|说明|
|:---|:---|
|build|项目构建(webpack)相关代码|
|config|配置目录，包括端口号等。|
|dist|生产包，打包后生成|
|node_modules|npm 加载的项目依赖模块|
|src|开发目录 源文件|
|src/assets|静态文件图片等依赖 会被webpack打包处理|
|src/components|组件|
|src/pages|页面|
|src/router|路由配置|
|src/store|vuex数据状态管理|
|static|静态文件等依赖 不会被webpack进行打包处理|
|.babelrc|babel配置文件，根据这个文件进行babel转移|
|.eslintignore|eslint检测忽略文件配置|
|.eslintrc.js|eslint语法格式检测配置|
|.gitignore|git忽略文件|
|.postcssrc|css前缀配置|
|.prettierrc|vscode Prettier格式化插件配置，与eslint配置同步|
|package.json|依赖配置|
|README.md|说明文件|

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
