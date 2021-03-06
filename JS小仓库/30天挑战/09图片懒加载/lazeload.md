# lazeload懒加载

> 我们先不给`<img>`设置`src`，把图片真正的`url`放在另一个属性`data-src`中，
> 在需要的时候也就是图片进入可视区域的之前，将`url`取出放到`src`中。

```html
<img class="my-photo" data-src="http://ot4b33huh.bkt.clouddn.com/love01-min.png" alt="loading...">
```

## 如何判断元素是否在可视区域

第一种：

> ①通过`document.documentElement.clientHeight`获取屏幕可视化窗口高度
> ②通过`document.documentElement.scrollTop`获取浏览器窗口顶部与文档顶部之间的距离，
> 也就是滚动条滚动的距离
> ③通过`element.offsetTop`获取元素相对于文档顶部的距离

判断③ - ② < ① 元素就在可视区域内

第二种：(可以使用)

> `Element.getBoundingClientRect()`方法返回元素的大小及其相对于视口的位置。
> 返回值是一个 `DOMRect` 对象，这个对象是由该元素的 `getClientRects()` 方法返回的一组矩形的集合,
> 即：是与该元素相关的`CSS` 边框集合 。
> `DOMRect` 对象包含了一组用于描述边框的只读属性——`left`、`top`、`right`和`bottom`，
> 单位为像素。除了 `width`和 `height` 外的属性都是相对于视口的**左上角**位置而言的。

![Element.getBoundingClientRect()](https://mdn.mozillademos.org/files/15087/rect.png)

```js
function isInHeight(el) {
    //图片到可视区域顶部的距离
    const bound = el.getBoundingClientRect();
    //可视区域的高度
    const clientHeight = window.innerHeight;
    return bound.top <= clientHeight;
}

function checkImgs() {
    const imgs = document.querySelectorAll('.my-photo');
    Array.from(imgs).forEach(el => {
        if (isInHeight(el)) {
            loadImg(el);
        }
    })
}

function loadImg(el) {
    if (!el.src) {
        const source = el.dataset.src;
        el.src = source;
    }
}
// 节流
function throttle(fn, mustRun = 500) {
    const timer = null;
    let previous = null;
    return function() {
        const now = new Date();
        const context = this;
        const args = arguments;
        if (!previous){
            previous = now;
        }
        const remaining = now - previous;
        if (mustRun && remaining >= mustRun) {
            fn.apply(context, args);
            previous = now;
        }
    }
}
window.onload=checkImgs;
window.onscroll = throttle(checkImgs);
```

第三种：（推荐使用）

> 交叉观察器`IntersectionObserver(callback,option)`
> `callback`可见性变化时的回调函数。`option`配置对象

```js
function checkImgs() {
  const imgs = Array.from(document.querySelectorAll(".my-photo"));
  imgs.forEach(item => io.observe(item));
}

function loadImg(el) {
  if (!el.src) {
    const source = el.dataset.src;
    el.src = source;
  }
}

const io = new IntersectionObserver(ioes => {
  ioes.forEach(ioe => {
    const el = ioe.target;
    const intersectionRatio = ioe.intersectionRatio;
    if (intersectionRatio > 0 && intersectionRatio <= 1) {
      loadImg(el);
    }
    el.onload = el.onerror = () => io.unobserve(el);
  });
});

```
