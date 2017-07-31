## Array Cardio

### 主要目的
> 熟悉Array的一些方法 `filter` `map` `sort` `reduce`

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

## reduce
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
