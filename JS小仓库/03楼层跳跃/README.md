# 楼层跳跃

- 需求：点击ol中的li，屏幕滑动到对应的ul中的li的范围。
- 思路：还是利用`window.scrollTo()`;利用缓动动画原理实现屏幕滑动。
- 步骤：
- 0.获取元素
- 1.指定ul和ol中的li的背景色，对应的li背景色相同
- 2.获取元素并绑定事件
- 3.利用缓动动画原理实现屏幕滑动
- 4.用scroll事件模拟盒子距离最顶端的距离。

## 0.获取元素

```js
const ul = document.getElementsByTagName('ul')[0]
const ulList = ul.children
const ol = document.getElementsByTagName('ol')[0]
const olList = ol.children
let timer = null
let leader = 0
let target = 0
```

## 1.指定ul和ol中的li的背景色，对应的li背景色相同

```js
const color = ['lightblue', 'lightcoral', 'lightgreen', 'teal', 'coral']
    for (let i = 0; i <color.length; i++){
      ulList[i].style.background = color[i]
      olList[i].style.background = color[i]
    }
```

## 2.获取元素并绑定事件

```js
for (let i = 0; i <color.length; i++){
      ulList[i].style.background = color[i]
      olList[i].style.background = color[i]

      olList[i].index = i
      olList[i].onclick = function () {
        target = ulList[this.index].offsetTop
      }
    }
```

## 3.利用缓动动画原理实现屏幕滑动

```js
for (let i = 0; i <color.length; i++){
  ulList[i].style.background = color[i]
  olList[i].style.background = color[i]
  olList[i].index = i
  olList[i].onclick = function () {
    target = ulList[this.index].offsetTop
    clearInterval(timer)
    timer = setInterval(function(){
      let step = (target - leader) /10
      step = step > 0 ? Math.ceil(step) : Math.floor(step)
      leader += step
      window.scrollTo(0,leader)
      if(Math.abs(target - leader) <= Math.abs(step)){
        window.scrollTo(0,target)
        clearInterval(timer)
      }
    },1000/60)
  }
}
```

## 4.用scroll事件模拟盒子距离最顶端的距离。

```js
window.onscroll = function () {
  leader = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop 
}
```