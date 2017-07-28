### CSS变量 
>  用法: --变量名 引用变量var(--变量名)
>  变量只能用作属性值，不能用作属性名.
>  `:root` 伪类 文档的根元素 也就是`<html>`标签 常用于声明全局css变量

```js

:root{
	--color:aqua;
	--blur:10px;

	/*
       不支持！如果支持的话就会少很多代码
	--bc:background-color;
	*/
}
body{

/*
	第二个参数为默认值，当变量不存在时使用默认值
	第二个参数不处理内部的逗号和空格var(--shdow,0 0 9px black), `0 0 9px black`为第二个参数
*/
	background-color:var(--color,#666);
}
div{
/*
	数值和单位写在一起是无效的 必须用calc()
*/
	--top:200;
	margin-top:cala(var(--top) * 1px);
}

```

> javascript操作CSS变量

```js

//设置变量
document.documentElement.style.setProperty("--变量名","属性值");

//删除变量
document.documentElement.style.removeProperty("--变量名");

//JavaScript可以将任意值存入样式表
/*
CSS样式
div{
	width:var(--width,100px);
	height:var(--height,100px);
	border:1px solid #666;
	margin: 200px auto;
}
*/

const change= _ =>{
    		const docStyle = document.documentElement.style;
    		docStyle.setProperty("--width","500px");
    		docStyle.setProperty("--height","500px");
   	}
document.addEventListener("click" ,change);

```

### 箭头函数
>  `function` 可以表示为 => 胖箭头
>  作用:1、简写  2、对this的词法解析

```js

// 胖箭头+字符串模板 少写很多代码
const hero = ["劫","男刀","女警","潘森"];
const log = (ele,index,array) => console.log(`英雄[${index}]=${ele}`);
hero.forEach(log);
//英雄[0]=劫
//英雄[1]=男刀
//英雄[2]=女警
//英雄[3]=潘森

//如果胖箭头不需要参数或需要多个参数,就用 `( ) `代替或者_。
const lol = _ => 2017;
const lol = function () { return 2017 };
const sqrt = (x,y) => Math.sqrt(x*x + y*y);
const sqrt = function(x,y){
	return Math.sqrt(x*x + y*y);
}

//如果要返回一个对象就要用()包起来
//报错
love =>{book:love}
//right
love =>({ book:love })

```

> 箭头函数内部的this是词法作用域,由上下文决定this总是指向词法作用域

普通函数中的this
> * 在默认情况this指的是 window

```js
console.log(this);//window
```

> 在`use strict`下,没有直接调用者的函数中的this是 undefined

```js
"use strict"
function a(){ console.log(this);} ;
a();//undefined
```

> 使用call,apply,bind绑定的,this指的是 绑定的对象

箭头函数中的this
> 默认指向**在定义时**this所在的对象，而不是执行时的对象， 定义的时候，可能会在window下定义
```js
var hero = "德玛";//如果用const会报错因为此时this指向window 用const声明不会添加到window属性
const lol = {
     hero:"卡特",
     skill: _ => console.log(this.hero)
};
lol.skill();//输出 德玛

var hero = "德玛";
const lol = {
     hero:"卡特",
     skill: function(){
      console.log(this.hero) //普通函数该this指向被调用的对象lol
     }
};
lol.skill();//输出 卡特 

```


