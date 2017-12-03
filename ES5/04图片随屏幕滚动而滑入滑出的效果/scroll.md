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

## Day13 - 图片随屏幕滚动而滑入滑出的效果
```js
// 1.获取所有需要参与动画的图片
	const sImgs = document.querySelectorAll('.slide-in');
	function slide(){
	     //循环遍历每一个图片都要执行动画
	     sImgs.forEach( simg =>{
	          // 滚轮滑动到图片显示的一半 
	          const slideAt = window.innerHeight + window.scrollY - simg.height/2;
	          // 图片底部距文档顶部的距离
	          const imgBottom = simg.offsetTop + simg.height;
	          // 图片是否已经显示了一半
	          const isHalfShow = slideAt > simg.offsetTop;
	          // 图片是否已经被完全滚动出去
	          const isOut = window.scrollY < imgBottom;
	          if (isHalfShow && isOut) {
	               simg.classList.add('active');
	           } else {
	               simg.classList.remove('active');
	           }
	     });     
	}
	//监听滚动
	window.addEventListener('scroll',slide);
```
