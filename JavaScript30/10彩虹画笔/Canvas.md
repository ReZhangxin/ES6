# HTML5 Canvas 彩虹画笔

## 涉及特性

Canvas：

    - 基本属性
    * `getContext()`
    * `strokeStyle`
    * `fillStyle`
    * `lineCap`
    * `lineJoin`

    - 路径绘制
    * `beginPath()`
    * `lineTo()`
    * `moveTo()`

鼠标事件处理：

* mousemove
* mousedown
* mouseup
* mouseout

## 初始化`Canvas`

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = 'aqua';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 50;
```

* `strokeStyle`

是 Canvas 2D API 描述画笔（绘制图形）颜色或者样式的属性。默认值是 #000 (black)。

```js
const ctx = document.getElementById('canvas').getContext('2d');
for (var i=0;i<6;i++){
  for (var j=0;j<6;j++){
    ctx.strokeStyle = 'rgb(0,' + Math.floor(255-42.5*i) + ',' +
                      Math.floor(255-42.5*j) + ')';
    ctx.beginPath();
    ctx.arc(12.5+j*25,12.5+i*25,10,0,Math.PI*2,true);
    ctx.stroke();
  }
}
```

![canvas-strokeStyle](https://mdn.mozillademos.org/files/253/Canvas_strokestyle.png)

* `lineJoin`

是 Canvas 2D API 用来设置2个长度不为0的相连部分（线段，圆弧，曲线）
如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略）。

此属性有3个值 `round` `bevel` `miter`

~ `round`: 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度；
~ `bevel`: 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角；
~ `miter`(默认值):在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角；

![canvas-lineJoin](https://mdn.mozillademos.org/files/237/Canvas_linejoin.png)

* `lineCap`

是 Canvas 2D API 指定如何绘制每一条线段末端的属性。

~ `round`: 线段末端以圆形结束；
~ `butt(默认值)`: 线段末端以方形结束；
~ `square`: 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。

![canvas-lineCap](https://mdn.mozillademos.org/files/236/Canvas_linecap.png)

## 想要画线需要清楚考虑以下几件事情：画笔的起点在哪里、画笔的终点在哪里、怎样是画笔的状态（按下鼠标移动画线，松开鼠标画线结束），所以需要初始化一些变量。

```js
let isDrawing = true;//代表是否在画线的flag
let beginX = 0;//画笔的起点X坐标
let beginY = 0;//画笔的起点Y坐标
let hue = 0;//表示画笔颜色（hsl颜色表示法） background:hsl(360,50%,50%);

```

> H：Hue(色调)。0(或360)表示红色，120表示绿色，240表示蓝色，取值为：0 - 360
> S：Saturation(饱和度)。取值为：0% - 100%
> L：Lightness(亮度)。取值为：0% - 100%
> hsl 兼容IE9+

## 使用canvas画线的时候，要使用`beginPath()`开始绘制新的路径，使用`moveTo(x,y)`移动画笔到路径的起始点，使用`lineTo(x,y)`表示路径的终点，使用`stroke()`方法真正的画线

* `ctx.beginPath()`; 表示清空子路径列表开始一个新路径的方法。
* `ctx.moveTo(x,y)`;表示将一个新的子路径的起始点移动到（x,y）坐标的方法
* `ctx.lineTo(x,y)`; 表示用直线连接子路径的终点到x,y坐标的方法（并不是正正的绘制）
* `ctx.stroke()`;    表示根据当前的画线样式，绘制当前或已经存在的路径的方法
* `ctx.colsePath()`; 表示将笔点返回到当前子路径起始点的方法。

## 颜色变化

```js
ctx.strokeStyle = `hsl(${hue},100%,50%)`;

hue++;
hue %= 361;
//if (hue >= 360) hue =0;
```

## 线条粗细的变化

```js
if(direction){
    ctx.lineWidth--;
}else{
    ctx.lineWidth++;
}
if(ctx.lineWidth >= 50 || ctx.lineWidth <=1){
    direction = !direction;
}
```

## 事件监听

```js
canvas.addEventListener('mousemove',draw,false);
canvas.addEventListener('mousedown',(e) => {
  [lastX,lastY] = [e.offsetX,e.offsetY];
  isDrawing = true;
},false);
canvas.addEventListener('mouseup',() => { isDrawing = false;},false);
canvas.addEventListener('mouseover',() => { isDrawing = false;},false);
```