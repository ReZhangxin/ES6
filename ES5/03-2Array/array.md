# 练一练`Array`的一些原型方法

## `Array.prototype.some()`

```js
const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];
const teen = people.some( teens =>(new Date().getFullYear() - teens.year) >=19);
console.log(teen);
```

## `Array.prototype.every()`

```js
const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];
const peopers = people.every( peo => (new Date).getFullYear() - peo.year) >= 19);
console.log(peopers);

```

## `Array.prototype.find()`

```js
const findComment = comments.find(comment => comment.id === 823423);
    console.log(findComment);
}
```

## `Array.prototype.findIndex()`

> 返回满足条件的当前对象在数组中的索引，如果找不到满足条件的对象，返回-1。

```js
[12, 5, 8, 130, 44].findIndex(ele => ele >= 15);
// index of 4th element in the Array is returned,
// so this will result in '3'
```

## `Array.prototype.splice()`

### 插入元素

> 在索引2的位置移动0个元素，并且插入"drum"

```js
const myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

const removed = myFish.splice(2, 0, 'drum');

// myFish 是 ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed is [], 没有元素被移除。
```

### 删除元素

> 从索引3开始移除1个元素。

```js
const myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
const removed = myFish.splice(3, 1);

// 移除的原色是 ["mandarin"]
// myFish 为 ["angel", "clown", "drum", "sturgeon"]
```

### 替换元素

> 从索引2移除一个元素，并且插入"trumpet"

```js
const myFish = ['angel', 'clown', 'drum', 'sturgeon'];
const removed = myFish.splice(2, 1, 'trumpet');
// myFish 为 ["angel", "clown", "trumpet", "sturgeon"]
// 移除的元素为 ["drum"]
```

> `array.splice(start)`： 从索引start开始移除后面所有的元素。
> `array.splice(start, deleteCount)`： 从索引start元素删除deleteCount个元素。
> `array.splice(start, deleteCount, item1, item2, ...)`：从start索引开始，删除deleteCount个元素，然后插入item1,item2,...
