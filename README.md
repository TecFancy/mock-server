# 快速开始

项目使用 `yarn` 作为包管理器，首先安装项目依赖：

``` bash
$ yarn
```

通过 `yarn start` 命令来启动项目：

``` bash
$ yarn start
[nodemon] 2.0.7
[nodemon] reading config ./nodemon.json
[nodemon] to restart at any time, enter `rs`
[nodemon] or send SIGHUP to 42010 to restart
[nodemon] ignoring: *.test.js
[nodemon] watching path(s): src/**/*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node src/index.js`
[nodemon] forking
[nodemon] child pid: 42012
[nodemon] watching 6 files
```

----

以下列出了该项目中使用到的开源软件：

- `koa-router`: 路由
- `koa-body`: 协议解析
- `@koa/cors`: 跨域处理
- `koa-json`: 格式化 json 对象
- `koa-combine-routers`: 路由压缩
- `koa-static`: 静态资源
- `koa-helmet`: 提供安全头
- `nodemon`: 开发时热更新
- `npm-check-updates`: 检查项目依赖是否有版本更新
