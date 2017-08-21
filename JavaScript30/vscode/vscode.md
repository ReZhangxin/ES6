# vscode安装

> [下载安装地址](https://code.visualstudio.com/Download)

## 常用插件

> [Visual Studio系列产品的扩展](https://marketplace.visualstudio.com/)

### 修改设置

> 文件-->首选项-->设置
> 选择工作区

![](http://ouch71mj2.bkt.clouddn.com/1503284192%281%29.jpg)

### 1、One Dark Pro

> 主题

### 2、background

> 设置主题的背景 .

```json

    {   "editor.fontFamily": "Comic Sans MS",
        "editor.fontWeight": "bold",
    //是否启用background插件
        "background.enabled": true,
    // //是否使用默认图，选false的时候使用下面customImages中的地址
        "background.useDefault": false,
        "background.style": {
            "opacity": 0.15,
            "background-size":"cover"
        },
        "background.customImages": [
            //本地文件也可以是七牛云储存的地址不知道地址的话，把图片拖到浏览器里看
            "file:///C:/Users/Administrator/Desktop/demo/img/a.jpg",
            "file:///C:/Users/Administrator/Desktop/demo/img/vscode2.png",
            "file:///C:/Users/Administrator/Desktop/demo/img/vscode.jpg"
        ]
    }
```

![demo](http://ov0t09poc.bkt.clouddn.com/demo.jpg)

### 3、vscode-icon

> 让 vscode 资源树目录加上图标

### 4、beautify

> 格式化代码
> 使用方法：运行 F1 Beautify（美化选择）或F1 Beautify file。

### 5、HTML Snippets

> h5代码片段提示

### 6、Path Intellisense

> 自动路径补全

### 7、ESlint

> ESlint接管原生js提示，可以自定制体会规则。

全局安装eslint `npm install -g eslint`
然后先运行 `eslint init`
在运行 `eslint --init`

```json
{
    "extends": "standard",

    "plugins": [
            // "react",
            "html"
    ],
    "env": {
            "node": true,
            "jquery": true,
            "es6": true,
            "browser": true
    },
    "globals": {
            "angular": false
    },
    <!-- more -->
    "parser": "babel-eslint",
    "rules": {
            //官方文档 http://eslint.org/docs/rules/
            //参数：0 关闭，1 警告，2 错误
            // "quotes": [0, "single"],                  //建议使用单引号
            // "no-inner-declarations": [0, "both"],     //不建议在{}代码块内部声明变量或函数
            "no-extra-boolean-cast": 1, //多余的感叹号转布尔型
            "no-extra-semi": 1, //多余的分号
            "no-extra-parens": 0, //多余的括号
            "no-empty": 1, //空代码块

            //使用前未定义
            "no-use-before-define": [
                    0,
                    "nofunc"
            ],

            "complexity": [0, 10], //圈复杂度大于*

            //定义数组或对象最后多余的逗号
            "comma-dangle": [
                    0,
                    "never"
            ],

            // 不允许对全局变量赋值,如 window = 'abc'
            "no-global-assign": ["error", {
                    // 定义例外
                    // "exceptions": ["Object"]
            }],
            "no-var": 0, //用let或const替代var
            "no-const-assign": 2, //不允许const重新赋值
            "no-class-assign": 2, //不允许对class重新赋值
            "no-debugger": 1, //debugger 调试代码未删除
            "no-console": 0, //console 未删除
            "no-constant-condition": 2, //常量作为条件
            "no-dupe-args": 2, //参数重复
            "no-dupe-keys": 2, //对象属性重复
            "no-duplicate-case": 2, //case重复
            "no-empty-character-class": 2, //正则无法匹配任何值
            "no-invalid-regexp": 2, //无效的正则
            "no-func-assign": 2, //函数被赋值
            "valid-typeof": 1, //无效的类型判断
            "no-unreachable": 2, //不可能执行到的代码
            "no-unexpected-multiline": 2, //行尾缺少分号可能导致一些意外情况
            "no-sparse-arrays": 1, //数组中多出逗号
            "no-shadow-restricted-names": 2, //关键词与命名冲突
            "no-undef": 1, //变量未定义
            "no-unused-vars": 1, //变量定义后未使用
            "no-cond-assign": 2, //条件语句中禁止赋值操作
            "no-native-reassign": 2, //禁止覆盖原生对象
            "no-mixed-spaces-and-tabs": 0,



            //代码风格优化 --------------------------------------
            "no-irregular-whitespace": 0,
            "no-else-return": 0, //在else代码块中return，else是多余的
            "no-multi-spaces": 0, //不允许多个空格

            //object直接量建议写法 : 后一个空格前面不留空格
            "key-spacing": [
                    0,
                    {
                            "beforeColon": false,
                            "afterColon": true
                    }
            ],

            "block-scoped-var": 1, //变量应在外部上下文中声明，不应在{}代码块中
            "consistent-return": 1, //函数返回值可能是不同类型
            "accessor-pairs": 1, //object getter/setter方法需要成对出现

            //换行调用对象方法  点操作符应写在行首
            "dot-location": [
                    1,
                    "property"
            ],
            "no-lone-blocks": 1, //多余的{}嵌套
            "no-labels": 1, //无用的标记
            "no-extend-native": 1, //禁止扩展原生对象
            "no-floating-decimal": 1, //浮点型需要写全 禁止.1 或 2.写法
            "no-loop-func": 1, //禁止在循环体中定义函数
            "no-new-func": 1, //禁止new Function(...) 写法
            "no-self-compare": 1, //不允与自己比较作为条件
            "no-sequences": 1, //禁止可能导致结果不明确的逗号操作符
            "no-throw-literal": 1, //禁止抛出一个直接量 应是Error对象

            //不允return时有赋值操作
            "no-return-assign": [
                    1,
                    "always"
            ],

            //不允许重复声明
            "no-redeclare": [
                    1,
                    {
                            "builtinGlobals": true
                    }
            ],

            //不执行的表达式
            "no-unused-expressions": [
                    0,
                    {
                            "allowShortCircuit": true,
                            "allowTernary": true
                    }
            ],
            "no-useless-call": 1, //无意义的函数call或apply
            "no-useless-concat": 1, //无意义的string concat
            "no-void": 1, //禁用void
            "no-with": 1, //禁用with
            "space-infix-ops": 0, //操作符前后空格

            //jsdoc
            "valid-jsdoc": [
                    0,
                    {
                            "requireParamDescription": true,
                            "requireReturnDescription": true
                    }
            ],

            //标记未写注释
            "no-warning-comments": [
                    1,
                    {
                            "terms": [
                                    "todo",
                                    "fixme",
                                    "any other term"
                            ],
                            "location": "anywhere"
                    }
            ],
            "curly": 0 //if、else、while、for代码块用{}包围
    }
}

```

![eslint --init](http://ov0t09poc.bkt.clouddn.com/eslintInit2.png)

### 8、Complete JSDoc Tags

> js 注释模板 /** 按tab键就可以啦

### 9、markdownlint

> 当使用markdownlint编辑Markdown文件时，任何违反markdownlint规则（见下文）的行
> 将在编辑器中触发警告。警告用波浪绿色下划线表示，
> 也可以通过按下来Ctrl+Shift+M打开“错误和警告”对话框。

### 10、open in brower

> 右键单击时，您可能会找到一个新项目“ open in other browsers”，
> 如果单击它，您将获得一个浏览器列表，然后您可以选择一个打开此页面。
> 当然，也可以用快捷方式来获取它 Alt+Shift+B.(与搜狗拼音快捷键冲突)