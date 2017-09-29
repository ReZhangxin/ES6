# ES6的开发环境搭建

## 新建一个项目工程目录，并且在该目录下创建两个文件夹`src`和`dist`

- `src`：书写`ES6`代码的文件夹，书写的`js`程序都放在这里。
- `dist`：利用`Babel`编译成`ES5`的代码存放位置，在`html`里面引入的是这里的`js`文件

## 在`src`中编写`ES6`代码

```js
const add = (a,b) => a+b;
console.log(add(1,2));
```

## 第一步：初始化项目 `npm init -y`

-y代表全部默认同意，就不用一次次按回车了。命令执行完成后，会在项目根目录下生产package.json文件。

```json
{
  "name": "progect",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

## 第二步：全局安装`babel-cli`

`babel-cli`

Babel 的 CLI 是一种在命令行下使用 Babel 编译文件的简单方法。

```shell
npm install -g babel-cli
```

如果觉得`npm`比较慢可以用`cnpm`淘宝 NPM 镜像

```shell
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

## 第三步：本地安装`babel-preset-es2015` 和 `babel-cli`

在项目根目录安装`babel-preset-es2015`和`babel-cli`

```shell
npm install --save-dev babel-preset-es2015 babel-cli
```

```json
{
  "name": "es6",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-es2015": "^6.24.1"
  }
}
```

这里说一下`--save-dev`和`--save`之间的区别：

- `--save-dev` 是开发时候依赖的东西
- `--save` 是发布之后还依赖的东西。

比如，你写 `ES6` 代码，如果你想编译成 `ES5` 发布那么 `babel` 就是`devDependencies`。
如果你用了 `jQuery`，由于发布之后还是依赖`jQuery`，所以是`dependencies`。

## 第四步：配置文件`.babellrc`

在根目录新建一个`.babelrc`的文件

```js
{
    "presets":[
        "es2015"
    ],
    "plugins":[]
}
```

这个文件是用来设置转码的规则和插件的,rc结尾的文件通常代表运行时自动加载的文件，配置.
`plugins`表示特定的插件

## 第五步：简化转化命令

使用`npm run bulid`来简化命令`babel src/index.js -o dist/index.js`
打开`pack.json`设置一下

```json
{
  "name": "es6",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "babel src/index.js -o dist/index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-es2015": "^6.24.1"
  }
}

```

[第一章 块级作用域绑定](https://github.com/ReZhangxin/ES6/blob/master/ES6/%E5%9D%97%E7%BA%A7%E4%BD%9C%E7%94%A8%E5%9F%9F%E7%BB%91%E5%AE%9A.md)

[第二章 字符串和正则表达式](https://github.com/ReZhangxin/ES6/blob/master/ES6/%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%92%8C%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F.md)

<del>[第三章 函数]()</del>

<del>[第四章 扩展对象的功能性]()</del>

<del>[第五章 解构:是数据访问更便捷]()</del>

<del>[第六章 Symbol和Symbol属性]()</del>

[第七章 Set和Map集合](https://github.com/ReZhangxin/ES6/issues/3)

[第八章 迭代器(Iterator)和生成器(Generator)](https://github.com/ReZhangxin/ES6/blob/master/ES6/Iterator.md)

<del>[第九章 JavaScript中的类]()</del>

<del>[第十章 改进数组的功能]()</del>

<del>[第十一章 Promise与异步编程]()</del>

[第十二章 代理(Proxy)和反射(Reflection)API]()

<del>[第十三章 用模块封装代码]()</del>
