

> 默认情况下，`<canvas> `没有边框和内容。默认是一个 `300*150 `的画布，
> 所以我们创建了 `<canvas>`之后要对其设置宽高。我们可以通过html属性  `width`，`height`
> 来设置`<canvas>`的宽高，不可以通过 css 属性来设置宽高。因为通过 css 属性设置的宽高
> 会使 `<canvas>` 内的图像按照 `300*150` 时的比例**放大**或**缩小**

## getContext()
> `<canvas>`起初是空白的。为了展示，首先脚本需要找到渲染上下文，然后在它的上面绘制。
> `<canvas>` 元素有一个叫做 `getContext() `的方法，这个方法是用来获得渲染上下文和它的绘画功能。
> getContext()只有一个参数`2d`，上下文的格式。

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
```

## 格栅
> 在我们开始画图之前，我们需要了解一下画布栅格`canvas grid`以及坐标空间。

![canvas grid](https://mdn.mozillademos.org/files/224/Canvas_default_grid.png)

## 绘制矩形
有三种方法绘制矩形
**fillRect(x,y,width,height)**   绘制一个填充的矩形

**strokeRect(x,y,width,height)**   绘制一个矩形的边框

**clearRect(x,y,width,height)**   清除指定矩形区域，让清除部分完全透明。

```js
const canvas = document.querySelector('#box');
const ctx = canvas.getContext('2d');

ctx.fillRect(100,100,200,200);
ctx.strokeRect(200,200,200,200);
ctx.clearRect(150,150,100,100);
```

![canvas](http://otxurl2qj.bkt.clouddn.com/1502956639%281%29.png)


通过设置 fillStyle 或者 fillStyle 改变其填充颜色。
```js
ctx.fillStyle = "aqua";
ctx.strokeStyle = "black";
```

![canvas](http://otxurl2qj.bkt.clouddn.com/1502959120%281%29.png)

**shadowBlur、shadowColor**
> shadowBlur 设置或返回用于阴影的模糊级别
> shadowColor 设置或返回用于阴影的颜色

```js
    const canvas = document.querySelector('#box');
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = "aqua";
    ctx.strokeStyle = "black";

    ctx.shadowColor = "black";      //设置或返回用于阴影的颜色
    ctx.shadowBlur = 3;               //设置或返回用于阴影的模糊级别
    ctx.shadowOffsetX = 3;        //设置或返回阴影距形状的水平（x）距离
    ctx.shadowOffsetY = 3;        //设置或返回阴影距形状的垂直（y）距离

    ctx.fillRect(100,100,200,200);
    ctx.strokeRect(200,200,200,200);
    ctx.clearRect(150,150,100,100);
```

![canvas](http://otxurl2qj.bkt.clouddn.com/1502960206%281%29.png)

## 绘制圆形
**context.arc(x, y, radius, starAngle,endAngle, anticlockwise)**
> x : 圆心的 x 坐标
> y：圆心的 y 坐标
> radius ： 半径
> starAngle ：开始角度
> endAngle：结束角度
> anticlockwise ：是否逆时针（true）为逆时针，(false)为顺时针

```js
    ctx.beginPath();
    ctx.arc(600,300,150,0,Math.PI*2,false);
    ctx.closePath();
    ctx.fillStyle='rgba(0,255,200,.5)';
    ctx.fill();
```

![canvas](http://otxurl2qj.bkt.clouddn.com/1502961246%281%29.png)

## 绘制圆弧
> 圆弧就是不填充圆形的圆的一部分

```js
    ctx.beginPath();
    ctx.arc(600,400,150,Math.PI/6,(Math.PI*5)/6,false);
    ctx.strokeStyle="pink";
    ctx.stroke();
```

![canvas](http://otxurl2qj.bkt.clouddn.com/1502962165%281%29.png)

## 绘制路径
> 图形的基本元素是路径。路径是通过不同颜色和宽度的线段或曲线相连形成的不同形状的点的集合。
> 一个路径，甚至一个子路径，都是闭合的。使用路径绘制图形需要一些额外的步骤。

1. 首先，你需要创建路径起始点。`beginPath()` 每次调用列表清空重置，重新绘画图形
2. 然后你使用画图命令去画出路径。（随便你怎么画）`moveTo()` `lineTo()` `arc()`
3. 之后你把路径封闭。`closePath()` 如果不闭合就会多一条连接到开始的直线
4. 一旦路径生成，你就能通过描边或填充路径区域来渲染图形。`stroke()`轮廓 `fill()`填充

> 当你调用fill()函数时，所有没有闭合的形状都会自动闭合，所以你不需要调用closePath()函数。
> 但是调用stroke()时不会自动闭合。

