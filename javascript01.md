##Html、Css

### 标签kbd
> 定义键盘文本。它表示文本是从键盘上键入的。它经常用在与计算机相关的文档或手册中。
`<kbd> qwer <\kbd>`

### min-height: 100vh; 
> vh 相对于视窗的高度 视窗的高度是`100vh` //视窗也就是视区

> “视区”所指为浏览器内部的可视区域大小，即`window.innerWidth`/`window.innerHeight`大小，不包含任务栏标题栏以及底部工具栏的浏览器区域大小。

> vw, vh视区大小相关单位只适用于非定位元素的高度相关属性上！<br>
> 高度相关属性--> `height`/`min-height`/`max-height`/`line-height`/`padding-top`/`padding-bottom`等

### [flex布局](http://www.css88.com/archives/7236#more-7236)
> 主要属性 垂直居中对齐 ```align-items:center;   justify-content:center;```

1、`Flex-direction` 
> 默认从左到右 `flex-direction:column`从上到下

2、`justify-content `
> `flex-start` `flex-endcenter` `space-between`  `space-around` 

`justify-content` 决定` flex item(flex项)`沿主轴的对齐方式，`flex-direction` 决定了主轴的方向。

3、`align-items`
> `flex-start`  `flex-end`  `center`  `stretch`  `baseline`<br>
> 定义了 flex item(flex项) 在交叉轴(cross axis)上的对齐方式。

4、`align-self`
> `align-self` 可以单独设置每个 flex item(flex项) 的对齐方式。

## ES6

### 使用 data-属性来嵌入自定义数据
> 页面里通过data-key将页面展示的内容和audio关联起来。
> 语法 `<element data-*="somevalue">`
 ```html
 <div data-key="76" class="key"><kbd>L</kbd><span class="sound">tink</span></div>
 
 <audio data-key="76" src="sounds/tink.wav"></audio>
    
  ```
  ### forEach
  > forEach是Array新方法中最基本的一个，就是遍历，循环。
  > forEach方法中的function回调支持3个参数，第1个是遍历的数组内容；第2个是对应的数组索引，第3个是数组本身。
  ```js
  [].forEach(function(value,index,array){
       // doSomthing
  });
  ```
  ### Array.from()
  > Array.from() 方法从一个类似数组或可迭代的对象中创建一个新的数组实例。
  ```js
  const bar = ["a", "b", "c"];
  Array.from(bar);
  // ["a", "b", "c"]

  Array.from('foo');
  // ["f", "o", "o"]
  
  const keys = Array.from(document.querySelectorAll('.key'));//选取所有class="key"的节点添加到keys的数组中
  
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));//keys循环遍历所有key并且监听是否有过渡效果
  
```
### event.target
> 引发事件的DOM元素。

this和event.target的区别
> js中事件是会冒泡的，所以this是可以变化的，但event.target不会变化，它永远是**直接接受事件的目标DOM元素**;

this和event.target的相同点
> this和event.target都是dom对象，如果要使用jquey中的方法可以将他们转换为jquery对象：$(this)和$(event.target);




