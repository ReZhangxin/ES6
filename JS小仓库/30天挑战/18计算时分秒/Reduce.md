# reduce进行时间累加

## 用到的知识

### `for...of...`循环

一个数据结构只要部署了`Symbol.iterator`属性，就被视为具有`iterator`接口，就可以用`for...of`循环遍历它的成员。也就是说，`for...of`循环内部调用的是数据结构的`Symbol.iterator`方法。

`for...of`循环可以使用的范围:

- 数组
- `Set`和`Map` 结构
- 某些类似数组的对象（比如`arguments`对象、`DOM NodeList`对象）
- `Generator` 对象
- 字符串。

JavaScript 原有的for...in循环，只能获得对象的键名，不能直接获取键值。ES6 提供for...of循环，允许遍历获得键值。

```js
const arr = [ ' a ' , ' b ' , ' c ' , ' d ' ];
for ( let i in arr ){
     console.log( i ) ; // 0 1  2 3
}
for ( let i of arr ){
     console.log( i ) ; // a b c d
}
```

### `split()`

> 该方法使用指定的分隔符字符串将一个String对象分割成字符串数组

```js
'a b c d'.split(' '); // ["a", "b", "c", "d"]
```

### `reduce()`

> reduce() 方法对累加器和数组中的每个元素 (从左到右)应用一个函数，将其减少为单个值。

```js
var total = [0, 1, 2, 3].reduce(function(sum, value) {
  return sum + value;
}, 0);
// total is 6

var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
  return a.concat(b);
}, []);
// flattened is [0, 1, 2, 3, 4, 5]
```