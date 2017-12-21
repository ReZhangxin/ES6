## localStorage
1) 清空localStorage (`clear`)

```js
localStorage.clear();//清空本地缓存
```

2) 存储数据 (`setItem`)

```js
localStorage.setItem('key',value);
//或者是localStorage.key=value;  value类型必须是字符串类型！
localStorage //Storage {key: value, length: 1}
```

3) 读取数据 (`getItem`)

```js
localStorage.getItem('key');//根据参数key取得本地缓存中对应的值
localStorage.valueOf()//读取所有数据
localStorage.key(0) //读取第一条数据(key-value)
```

4) 删除某个变量 (`removeItem`)

```js
localStorage.removeItem('key');//删除key所对应的那一条本地缓存
```

5) 是否存在某个变量 (hasOwnProperty)

```js
localStorage.hasOwnProperty('age'); // 判断当前LocalStorage是否有"age"这条记录(不包括原型属性)
//hasOwnProperty() 只能判断属性是否存在实例对象中不能判断是否存在原型对象中
```

6) 将JSON存储在`localStorage`
>  localStorage中**只能存储字符串**，所以我们经常会用到
>  JSON.stringify(Object)将一个对象转换为字符串
>  再使用JSON.parse(ObjString)将一个字符串转换为对象

```js
let hero ={
    Assassin:{
        name:"劫",
        age:22
    },
    Master:{
        name:"光辉",
        age:18
    }
}
//将JSON存储在localStorage步骤
//首先要将JSON转化为字符串到一个变量  (JSON.stringify())
//将这个变量存储在localStorage上
//最后获取的时候再转化为JSON  (JSON.parse())

hero = JSON.stringify(hero);        //将hero转化成字符串
localStorage.setItem("hero",hero);//localStorage只能存储字符串hero必须是字符串类型
let newHero = localStorage.getItem('hero');//获取hero内容
newHero = JSON.parse(hero);//将hero转化为JSON命名为新的变量newHero
```

## `window.onbeforeunload`
> 当窗口关闭的时候发生的事件

```js
window.onbeforeunload = function(){
    return "拜拜~";
}
```