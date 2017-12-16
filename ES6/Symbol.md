# Symbol

在ES5以及之前有5中原始类型`string`，`number`，`boolean`，`null`，`undefined`

ES6新加入一种属性`Symbol

简单来说就是创建一个独一无二的非字符串属性名称

## 创建Symbol

```js
const name = Symbol()
const person = {}
person[name] = '张鑫'
console.log(person[name])
console.log(typeof name)
```

Symbol函数可以接受一可选参数，用来描述创建的Symbol

```js
const idCard = Symbol('信用卡id')
```

## Symbol对象元素的保护作用

在对象中有很多值，但是循环输出时，并不希望全部输出，那我们就可以使用Symbol进行保护。

```js
let obj={name:'xin',skill:'web'};
let age=Symbol();
obj[age]=22;
for (let item in obj){
    console.log(obj[item]);
} 
console.log(obj);
```
