# 迭代器（Iterator)和for...of迭代

## 迭代器（Iterator）

> 迭代器是什么？它具有一个功能，该功能可以依次循环遍历数据结构的所有成员
> 是一种机制，一种接口。只要部署Iterator接口就可以完成循环遍历操作
> 每一个迭代器对象都有一个`next()`,这个方法返回一个对象，
> 包括value和done属性

### 能够循环遍历的语句：`for..in` `for...of`

- `for...in`可以循环遍历对象的属性，不能获取属性值如果是`Array`将获得下标

```js
const obj = {
    name:'xin',
    age:22
}
const arr = [1,2,'a',0]
for(key in obj){
    console.log(key);
    // name
    // age
}
for(key in arr){
    console.log(key);
}
/*
0
1
2
3
*/
for(key of obj){
    console.log(key);
}
//报错因为默认定义的对象是不可迭代的
for(key of arr){
    console.log(key);
}
/*
1
2
a
0
*/
```

### 默认Iterator接口

> **Iterator**接口的目的，就是为所有数据结构，
> 提供一种统一的访问机制,就是`for...of`循环

默认的Iterator接口部署在数据结构的`Symbol.iterator`属性，只要有一种数据结构
具有`Symbol.iterator`属性，那么这个数据结构就可以用`for...of`迭代遍历。

**注意：**`Symbol.iterator`是函数。

```js
const obj = {
    [Symbol.iterator] : function(){
        return {
            next:function(){
                return {
                    value:1,
                    done:true
                }
            }
        }
    }
}
```

ES6 原生具备 Iterator 接口的数据结构如下。

- Array
- Map
- Set
- String
- TypedArray
- 函数的 arguments 对象
- NodeList 对象

这些原生接口自带`[Symbol.iterator]`属性所以直接可以使用`for...of`遍历

```js
const arr = [1,2,3,4,5];
for(key of arr){
    console.log(key);
}
// 依次遍历值
// 要是用next()方法必须 部署Symbol.iterator属性
const it = arr[Symbol.iterator]();
it.next();//{value: 1, done: false}
it.next();//{value: 2, done: false}
it.next();//{value: 3, done: false}
it.next();//{value: 4, done: false}
it.next();//{value: 5, done: false}
it.next();//{value: undefined, done: true}
it.next();//{value: undefined, done: true}
```

也就是说：可以迭代的对象有两种

- 自带`Symbol.iterator`属性

> `Array` `Map` `Set` `String` `TypedArray`
> 函数的 `arguments` 对象, `NodeList` 对象

这些可以直接使用`for...of`遍历，若想要一个一个迭代的话就要给该结构
调用`Symbol.iterator`接口并且要用`[]`因为是函数所以要加上`()`
`arr[Symbol.iterator]()`并不会执行`arr`函数，返回的也不是函数运行结果，而是一个指向内部状态的指针对象，也就是遍历器对象。

```js
const arr = [1,2,3];
const it = arr[Symbol.iterator]();
it //Array Iterator {}
```

- 还有一种就是手动添加`Symbol.iterator`属性

> 一个对象如果要具备可被`for...of`循环调用的 `Iterator`接口，
> 就必须在`Symbol.iterator`的属性上部署遍历器生成方法。
> 原型链上的对象具有该方法也可。

对象（Object）之所以没有默认部署 Iterator 接口，是因为对象的哪个属性先遍历，哪个属性后遍历是不确定的，需要开发者手动添加。

## 生成器`Generator`函数

`Generator` 函数会返回一个遍历器对象，也就是说，`Generator` 函数除了状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历 `Generator` 函数内部的每一个状态。

Generator函数特征

- function关键字与函数名之间有一个星号；
- 函数体内部使用yield表达式，定义不同的内部状态

```js

```