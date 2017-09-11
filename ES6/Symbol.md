# Symbol

首先来看看`Symbol`的中文翻译：表示符号，象征，标志，记号
**它是`JavaScript`第七种基本类型**
前6种是`undefined`,`null`,`Boolean`,`Number`,`String`,`Object`

> ES6引入`Symbol`，表示独一无二的值
> 可以作为对象属性的标识符

## 创建一个`Symbol()`

```js
const s = Symbol();
typeof s //"Symbol"

```

> Symbol函数前面不能用new命令 `Symbol`是原始类型不是对象。
