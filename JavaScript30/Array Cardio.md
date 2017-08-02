## Array Cardio

### 主要目的
> 熟悉Array的一些方法 `filter` `map` `sort` `reduce` `some` `every` `find` `splice` `slice`

## 1.filter
> 过滤操作 `filter()`方法创建一个新数组，其包含通过所提供函数实现的测试的所有元素

```js
const youth = value => value>=16&&value<=28;
let [...spread] = [12,8,17,99,23,55];
let Youth = spread.filter(youth);
// Youth is [17,23]

const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
console.table(fifteen);

```

## 2.map
> `map()`方法创建一个新的数组，其结果是这个数组的每个元素都调用该方法所提供的函数后返回的结果

```js
let num = [1,2,3,4,5];
let square = num.map( x => x*x );
// num is still [1,2,3,4,5]
// square is new array[1,4,9,16,25]

const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);

```

## 3.sort
> `sort()`方法 对数组的元素进行排序，并且返回数组，默认排序顺序是根据字符串Unicode码点

```js
const hero = ["德玛","鸡","蛋","卡特"];
hero.sort();
//["卡特", "德玛", "蛋", "鸡"]
const test =['hello','nihao','love','apple','zoo'];
test.sort();
//["apple", "hello", "love", "nihao", "zoo"]
const test2 =[3,4,11,1,23,2,5];
test2.sort();
//[1, 11, 2, 23, 3, 4, 5]
const test3 = ['word', 'Word', '1 Word', '2 Words'];
test3.sort(); 
// ['1 Word', '2 Words', 'Word', 'word']
// 在Unicode中, 数字在大写字母之前
// 大写字母在小写字母之前

```

> `arr.sort(compareFunction)`compareFunction可选，用来指定按照某种顺序进行排列的函数。

```js
//数字的比较可以简单的以 a-b 升序排列
const num = [1,22,3,7,6,11,2];
num.sort((a,b) => a-b);
// [1, 2, 3, 6, 7, 11, 22]

//对象可以按照某个属性排序
const info =[
     {name:"德玛",value:21},
     {name:"卡特",value:22},
     {name:"劫",value:23},
     {name:"男刀",value:20},
     {name:"女警",value:18}
];
const hero=info.sort((a,b) => a.value > b.value ? 1 : -1);
console.table(hero);
```
![info](http://otxurl2qj.bkt.clouddn.com/1501476140%281%29.png)

## 4.reduce
> reduce()方法对累加器和数组中的每个元素应用一个函数，将其减少为单个值。

```js
const add = [0,1,2,3].reduce((sum,value) =>{
      return sum + value;
},0);
// add is 6

const totalYears = inventors.reduce((total,inventor) => {
     return total + (inventor.passed - inventor.year);
},0);
```

```js
const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];
```

## 5.some
> some()方法测试数组中的某些元素是否通过该提供的函数所进行的测试。

```js
arr.some(callback[, thisArg]);
//  callback  用来测试每个元素的函数
//  thisArg   执行callback时使用的this值

//some为数组中每一个元素执行一次callback函数直到满足该条件返回true否则返回false
//callback被调用时有三个参数：元素值ele 元素索引index 被遍历的数组arr

const youth =(ele,index,arr) => ele>=16 && ele<=28;
const age =[1,10,2,15,38,11].some(youth); //age is false
const age2 =[11,16,19,99]//age2 is true

//是否至少有一人年满18周岁？
const isAdult = people.some(person => (new Date().getFullYear() -person.year) >= 18);
console.log(isAdult);//true

```

## 6.every
> every()方法测试数组的每一个元素是否全部都通过了函数的测试

```js
arr.every(callback[, thisArg]);
//  callback  用来测试每个元素的函数
//  thisArg   执行callback时使用的this值

//every方法会对每一个元素执行函数，直到callback遇到一个返回false的元素就返回false否则就是true
//callback被调用时有三个参数：元素值ele 元素索引index 被遍历的数组arr

//如果为 every 提供一个 thisArg 参数，在该参数为调用 callback 时的 this 值。
//如果省略该参数，则 callback 被调用时的 this 值，在非严格模式下为全局对象，在严格模式下传入 undefined。

是否每一个人都年满18周岁？
const isAdult = people.every(person => (new Date().getFullYear() -person.year) >= 18);
console.log(isAdult);//false
```

## 7.find
> find()方法返回数组中满足提供的测试函数的第一个元素的值。没有的话返回undefined。

```js
const old = ele => ele>=100;
[12,99,6,118,55,999].find(old);//118
[12,99,6,118,55,999].findIndex(old);//3

//indexOf()方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
//const a = [2, 9, 7, 8, 9];  a.indexOf(2); // 0  a.indexOf(6); // -1
//includes() 方法用来判断一个数组是否包含一个指定的值，如果是，酌情返回 true或 false。
//const b = [1, 2, 3]; b.includes(2); // true  b.includes(4); // false

const findID =comments.find(comment => comment.id === 888);
console.log(findID);//undefined

const hero =[
     {name:"德玛",age:21},
     {name:"卡特",age:22},
     {name:"男刀",age:24},
     {name:"女警",age:18}
];
const findDema = dema => dema.name === "德玛";
console.log(hero.find(findDema));
```
![find](http://otxurl2qj.bkt.clouddn.com/arr.png)

## 8.splice
> splice()方法通过删除现有元素或添加新元素来更改一个数组的内容。

```js
arr.splice(start)
arr.splice(start,deleteCount)
arr.splice(start,deleteCount,item1,item2,...)

let hero =['德玛','卡特','劫','女警','ez'];
let removed = hero.splice(2,0,'光辉');
//removed: [],没有元素被删除
//hero: ['德玛','卡特','光辉','劫','女警','ez']

removed = hero.splice(3,1);
//removed: ['劫']
//hero: ['德玛','卡特','光辉','女警','ez']

removed = hero.splice(2, 1, '小炮');
//removed: ['光辉']
//hero: ['德玛','卡特','小炮','女警','ez']

removed =hero.splice(0,2,'Ashe','Yi','Teemo','zed');
//removed:['德玛','卡特']
//hero: ['Ashe','Yi', 'Teemo', 'zed', '小炮', '女警', 'ez']
```
![splice](http://otxurl2qj.bkt.clouddn.com/1501645896%281%29.png)

## 9.slice
> slice() 方法返回一个从开始到结束(不包括结束)选择的数组的一部分**浅拷贝**到一个新数组对象。原始数组不会被修改。

```js
let a = ['Ashe','Yi','Teemo','zed','ez']
let sliced = a.slice(1,3);
a:['Ashe','Yi','Teemo','zed','ez']
sliced:['Yi','Teemo']

arr.slice()          //索引从0开始提取原数组中的元素
arr.slice(begin)     //从第begin开始提取原数组中的元素 slice(-2)表示从倒数第二个元素到最后一个(包含最后一个)。
arr.slice(begin,end) //提取从begin到end(不包括end)中所有元素

```
![slice](http://otxurl2qj.bkt.clouddn.com/1501656946%281%29.png)

```js
//slice不修改原始数组，只会浅复制原始数组中元素的一个新数组。
// * 如果该元素是个对象引用（不是实际的对象）slice会拷贝这个对象引用到新的数组里。两个对象引用都引用了同一个对象。
//   如果被引用的对象发生改变，则新的还有原来的数组中的这个元素也会发生改变。
// * 如果该元素是字符串，数字，布尔值，slice会拷贝这些值到新的数组里。在别的数组修改这些值不会影响另一个

let hero ={name:'zed',age:'22',gayF:'Shen'}
let lol = [hero,'lpl','lck','we','omg']
let nLol =lol.slice(0,3);
hero.name = '劫';
```

![slice](http://otxurl2qj.bkt.clouddn.com/1501658504%281%29.png)

```js
//类数组（Array-like）
slice方法可以用来将一个类数组转换成一个数组。如下面代码中arguments就是一个类数组对象。
function list() {
  return Array.prototype.slice.call(arguments);//可以用[].slice.call(arguments)代替
}
var list1 = list(1, 2, 3);//list1:[1,2,3]

```
