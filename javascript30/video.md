## Node.textContent
### 语法
>  `const icon = this.paused ? '►' : '❚ ❚';`
>  `toggle.textContent = icon;`

### 描述
> * Node.textContent属性表示一个节点及其后代的文本内容
> * `document.documentElement.textContent`返回整个文档文本以及
>    CDATA数据(不应由 XML 解析器进行解析的文本数据)

### 与innerText的区别
> * textContent 会获取所有元素的内容，包括 <script> 和 <style> 元素，然而 innerText 不会。
> * innerText意识到样式，并且不会返回隐藏元素的文本，而textContent会。
> * 由于 innerText 受 CSS 样式的影响，它会触发重排（reflow），但textContent 不会。

### 与innerHTML的区别
> * innerHTML 返回 HTML 文本。
> * 为了在元素中检索或写入文本，人们使用innerHTML。
>    textContent通常具有更好的性能，因为文本不会被解析为HTML。
>    此外，使用textContent可以防止 XSS 攻击。

```javascript
function togglePlay() {
		//点击切换播放 和暂停视频
		//当判断当前的视频播放状态，播放时变为暂停状态、暂停时变为播放状态
		//分别调用video.play() 和 video.pause()方法在此使用video[play]()和video[pause]()方法
		//使用中括号能够动态的传变量过去，使用 . 则不能  
	  const method = video.paused ? 'play' : 'pause';
	  video[method]();
	}
function updateButton() {
	  const icon = this.paused ? '►' : '❚ ❚';
	  //Node.textContent属性表示一个节点及其后代的文本内容
	  toggle.textContent = icon;
	}
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

```
