## 继承与原型链
### 使用 Object.create 创建对象

> `ECMAScript5`引入新方法：`Object.create()`可以调用这个方法来创建一个新的对象。新对象的原型就是调用`create`方法时传入的第一个参数

```js
const a = {a:1};
// a ---> Object.prototype --->null
const b = Object.create(a);
// b ---> a --->Object.prototype --->null
console.log(b.a);//1 继承a的
const c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null

const d = Object.create(null);
// d ---> null
console.log(d.hasOwnProperty); // undefined, 因为d没有继承Object.prototype
```

### ES6使用一套关键字来实现`class`

> ECMAScript6 引入了一套新的关键字用来实现class。
> 使用基于类语言的开发人员会对这些结构感到熟悉，但它们是不一样的。
> JavaScript 仍然是基于原型的。这些新的关键字包括 `class`, `constructor`, `static`, `extends`, 和 `super`

> 检测对象的属性是定义在自身上还是在原型链上，有必要使用 `hasOwnProperty` 方法，所有继承自 `Object.proptotype` 的对象都包含这个方法。
> `hasOwnProperty` 是 `JavaScript` 中唯一一个只涉及对象自身属性而不会遍历原型链的方法。

语法

```js
'use strict'
class name [extends]{
     //class body
}
```

描述

> `class` 声明体在严格模式下运行。构造函数是可选的
> `class` 声明不可以提升

`constructor`
> 构造方法是创建和初始化使用类创建的一个对象的一种特殊方法。

语法

```js
constructor([arguments]){...}
```

描述
> * 一个 `class` 中只能有一个指定的 `constructor`（构造）方法。
> 如果 `class` 定义的时候包含多个构造方法，程序将会抛出 `SyntaxError` 错误。
> * 在构造方法中可以使用 `super` 关键字来调用父类的构造方法。
> * 如果没有显式指定构造方法，则会添加默认的`constructor`方法。

`extends`
> `extends`关键词被用在类声明或者类表达式上，以创建一个类是另一个类的子类。

```js
'use strict'

class Polygon {
     constructor(height,width){
          this.name = 'Polygon';
          this.height = height;
          this.width = width;
     }
}

class Square extends Polygon{
     constructor(length){
          super(length,length);
          //在构造器使用的 super()，super()只能在构造器中使用，super函数一定要在this可以使用之前调用。
          this.name = 'Square';
     }
}
```

