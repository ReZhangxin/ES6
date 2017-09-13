# 鼠标移动让文字出现🌈效果中文指南

> 鼠标移动时，元素的字体阴影跟随鼠标移动で方向发生改变
> 达到字体阴影跟着鼠标一起走的效果

<<<<<<< HEAD
## 解构赋值，让数据访问更加便捷

> ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。
> [参考文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

### 数组的解构赋值

第一种：“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。

```js
let a,b,last;

[a,b] = [1,2];

[a,b, ...last] = [1,2,3,4,5,6,7,8];
console.log(a);//1
console.log(b);//2
console.log(last);//[3,4,5,6,7,8];
```

第二种：如果解构不成功，变量的值就等于undefined。

```js
let [a] = [];
let [b,a] = [1];
// a 的值都是undefined；
```

第三种：不完全解构，等号左边的模式，只匹配一部分的等号右边的数组。这种情况下，解构依然可以成功。

```js
let [x,y,z] = [1,2];
x;//1
y;//2
```

**注意：**如果等号的右边不是数组，那么将会报错。

```js
// 报错
let [x] = 1;
let [x] = false;
let [x] = NaN;
let [x] = undefined;
let [x] = null;
let [x] = {};
```

默认值：解构赋值允许使用默认值

```js
let [x = 1] = [undefined];
x // 1

let [x = 1] = [null];
x // null
// 如果一个数组成员是null，默认值就不会生效，因为null不严格等于undefined。

let [x = 1, y = x] = [];     // x=1; y=1
let [x = 1, y = x] = [2];    // x=2; y=2
let [x = 1, y = x] = [1, 2]; // x=1; y=2
let [x = y, y = 1] = [];     // ReferenceError x用到默认值y时，y还没有声明
```

### 对象的解构赋值

> 对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；
> 而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。

第一点：属性同名可以这么写

```js
let { foo, bar } = { foo: "aaa", bar: "bbb" };//({ foo, bar } = { foo: "aaa", bar: "bbb" })
foo // "aaa"
bar // "bbb"
({a, b, ...rest} = {a:1, b:2, c:3, d:4});
// {a: 1, b: 2, c: 3, d: 4}

rest;
// {c: 3, d: 4}
```

第二点：如果变量名与属性名不一致，必须写成下面这样。

```js
const person ={
    /* 属性名*/name:"张鑫",
    age:21
}
const names = person.name; //names是变量名

let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
baz // "aaa"

let obj = { first: 'hello', last: 'world' };
let { first: f, last: l } = obj;
f // 'hello'
l // 'world'

```

**注意：**对象的解构赋值的内部机制，是先找到同名属性，然后再赋值给对应的变量
真正被赋值的是后面的

```js
let { foo: baz } = { foo: "aaa", bar: "bbb" };
baz // "aaa"
foo // error: foo is not defined
```

`foo`只是匹配的模式，并不是变量`baz`才是变量，真正被赋值的变量是`baz`而不是`foo`

## text-shadow

> 添加一个或多个文字阴影

```css
h1
{
    text-shadow:h-shadow v-shadow blur color;
}
```

```js
const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 500;//鼠标左右共移动的距离

function textShadow(e){
    const {offsetWidth:width,offsetHeight:height} = hero;//变量width的值为hero的宽度，height的值为hero的高度
    let {offsetX: x,offsetY:y} = e;
    //console.log(x+"---"+y);//鼠标相对于事件源元素（srcElement）(鼠标点击的元素)的X,Y坐标
    if(e.target !== this){
        x = x +e.target.offsetLeft;
        y = y +e.target.offsetTop;
        //   console.log(`${x}===${y}`)
    }
    const xis = Math.floor((x/width*walk) - (walk/2));
    const yis = Math.floor((y/height*walk)- (walk/2));
    // console.log(`${xis}===${yis}`)
    text.style.textShadow = `
        ${xis}px ${yis}px 0 rgba(255,0,255,0.7),
        ${xis * -1}px ${yis}px 0 rgba(0,255,255,0.7),
        ${yis}px ${xis * -1}px 0 rgba(0,255,0,0.7),
        ${yis * -1}px ${xis}px 0 rgba(0,0,255,0.7)
    `; // 多写几个就有了霓虹灯的效果
}

hero.addEventListener('mousemove',textShadow);
```
=======
明天加油
>>>>>>> 85d287e11d2d85727f4f1d6b03712057848096ff
