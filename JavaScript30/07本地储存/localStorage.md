## localStorage
1) 清空localStorage (`clear`)

```js
localStorage.clear();
```

2) 存储数据 (`setItem`)

```js
localStorage.setItem('name','张鑫');
//或者是localStorage.name='张鑫';
localStorage //Storage {name: "张鑫", length: 1}
```

3) 读取数据 (`getItem`)

```js
localStorage.getItem('name');
localStorage.name;
localStorage.valueOf()//读取所有数据
localStorage.key(0) //读取第一条数据(key-value)
```

4) 删除某个变量 (`removeItem`)

```js
localStorage.removeItem('name');
```

5) 是否存在某个变量 (hasOwnProperty)

```js
localStorage.hasOwnProperty('age'); // true
localStorage.hasOwnProperty('name');// false
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

hero = JSON.stringify(hero);
localStorage.setItem("hero",hero);
let newHero = localStorage.getItem('hero');
newHero = JSON.parse(hero);
```

## `window.onbeforeunload`
> 当窗口关闭的时候发生的事件

```js
window.onbeforeload = function(){
    localStorage.removeItem('items');
    e.returnValue = confirmationMessage;
}
```