## 关于浏览器各种位置的获取
> `clientWidth` `offsetWidth` `scrollTop` `innerHeight`

```js
const a = window.innerHeight; //获得浏览器窗口的内容区域的高度,包含水平滚动条(如果有的话).
const b = window.innerWidth;  //获得浏览器窗口的内容区域的宽度,包含垂直滚动条(如果有的话).
const loc = Window.location;  //获取、设置window对象的location, 或者当前的 URL.
const y = window.scrollY;     //y 是文档从顶部开始滚动过的像素值。   

```
## clientWidth & clientHeight

>clientLeft == 边框宽度 clientTop ==边框宽度

![clientWidth & clientHeight](https://developer.mozilla.org/@api/deki/files/185/=Dimensions-client.png)

## offsetWidth & offsetHeight

> offsetHeight 是一个DOM属性，由MSIE首次提出。它有时被称为一个元素的物理/图形的尺寸，或是一个元素的边界框（border-box）的高度。
> offsetTop,offsetLeft 描述了元素对于offsetParent的边界框。表示相对于offsetParent节点的边界偏移

![offsetWidth & offsetHeight](https://developer.mozilla.org/@api/deki/files/186/=Dimensions-offset.png)

## scrollTop
![scrollTop](https://developer.mozilla.org/@api/deki/files/842/=ScrollTop.png)

