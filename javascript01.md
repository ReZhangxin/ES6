## Html、Css

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

1、Flex-direction
> 默认从左到右 `flex-direction:column`从上到下

2、justify-content 
> `flex-start` `flex-endcenter` `space-between`  `space-around` 

`justify-content` 决定` flex item(flex项)`沿主轴的对齐方式，`flex-direction` 决定了主轴的方向。

3、align-items
> `flex-start`  `flex-end`  `center`  `stretch`  `baseline`<br>
> 定义了 flex item(flex项) 在交叉轴(cross axis)上的对齐方式。

4、align-self
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
  > forEach方法中的function回调支持3个参数,<br>
  > 第1个是遍历的数组内容;<br>
  > 第2个是对应的数组索引;<br>
  > 第3个是数组本身。
  
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

### 事件流
> 事件分为三个阶段：捕获阶段、目标阶段和冒泡阶段。
捕获阶段 
> 事件从文档的根节点流向目标对象节点。 window ->document -> html ->body -> div
目标阶段
> 当事件到达目标节点，事件就进入了目标阶段。div-->click 
冒泡阶段
> 事件在目标元素上触发后，并不在这个元素上终止。它会随着DOM树一层层向上冒泡，回溯到根节点。<br>
>  div -> body -> html -> document -> window

##W3C模型
> W3C模型是将两者进行中和，在W3C模型中，任何事件发生时，先从顶层开始进行事件捕获，直到事件触发到达了事件源元素。然后，再从事件源往上进行事件冒泡，直到到达document。
> 我们可以自己选择绑定事件时采用事件捕获还是事件冒泡，方法就是绑定事件时通过addEventListener函数，它有三个参数，第三个参数若是true，则表示采用事件捕获，若是false，则表示采用事件冒泡。<br>
> **默认是false**

> 在W3c中，用`stopPropagation()`方法 阻止事件传播 IE中则是 `cancelBubble = true;`

> 在W3c中，用`preventDefault()`方法 阻止事件默认行为 IE中则是 `window.event.returnValue = false;`


### addEventListener() 
> 方法用于向指定元素添加事件句柄。<br>
> 使用 `removeEventListener()` 方法来移除 `addEventListener() `方法添加的事件句柄。
`element.addEventListener(event, function, useCapture)`
> 可选。布尔值，指定事件是否在捕获或冒泡阶段执行。<br>
> true - 事件句柄在捕获阶段执行<br>
> false- false- 默认。事件句柄在冒泡阶段执行


### event.target
> 引发事件的DOM元素。

this和event.target的区别
> js中事件是会冒泡的，所以this是可以变化的，但event.target不会变化，它永远是**直接接受事件的目标DOM元素**;

this和event.target的相同点
> this和event.target都是dom对象，如果要使用jquey中的方法可以将他们转换为jquery对象：$(this)和$(event.target);




