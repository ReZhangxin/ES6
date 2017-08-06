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

```js

	/* Get Our Elements */
	const player =document.querySelector('.video');
	const video = player.querySelector('.viewer');
	const progress = player.querySelector('.progress');
	const progressBar = player.querySelector('.progress_point');
	const toggle = player.querySelector('.toggle');
	const skipButtons = player.querySelectorAll('[data-skip]');
	const ranges = player.querySelectorAll('.player_slider');

	//点击切换播放 和暂停视频============================
	function togglePlay() {
		//当判断当前的视频播放状态，播放时变为暂停状态、暂停时变为播放状态
		//分别调用video.play() 和 video.pause()方法在此使用video[play]()和video[pause]()方法
		//使用中括号能够动态的传变量过去，使用 . 则不能  
	  const method = video.paused ? 'play' : 'pause';
	  video[method]();
	}
	video.addEventListener('click', togglePlay);


	//播放按钮状态的改变=================================
	function updateButton() {
	  const icon = this.paused ? '►' : '❚ ❚';
	  //Node.textContent属性表示一个节点及其后代的文本内容
	  toggle.textContent = icon;
	}
	video.addEventListener('play', updateButton);
	video.addEventListener('pause', updateButton);
	toggle.addEventListener('click', togglePlay);

	//快进快退==========================================
	function skip() {
		//currentTime:视频当前播放时间 
		//给button设置data-skip属性 就可以通过dataset.skip获取到该属性的值也就是this.dataset.skip
		//但是这个值是字符串类型 需要把它转化为浮点型则需要parseFloat()将这个转化为浮点型
		//分别将时间加减当前视频的播放事件就可以做到快进快退。
	 video.currentTime += parseFloat(this.dataset.skip);
	}
	//音量大小和播放速度控制的函数
	//分别给每一个input[type=range]设置name属性，代表该范围所表示的内容，同时也是需要控制的方法名
	//所以要通过设置video[e.target.name]=e.target.value;就可以分别改变视频的音量和播放速度
	//e.target就是这两个input元素也就是this
	function handleRangeUpdate() {
	  video[this.name] = this.value;
	}
	
	skipButtons.forEach(button => button.addEventListener('click', skip));
	ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
	ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));


	//进度条显示==========================================
	function handleProgress() {
		//通过视频当前播放时间除以视频的总时长*100，就是当前视频播放的百分比，
		//将改该值使用模板字符串的方式传给flexBasis样式中就可以啦，在css中该样式名为flex-basis，
		//但是js中需要多单词的CSS属性不能用连字符连接flex-basis写为flexBasis
	  const percent = (video.currentTime / video.duration) * 100;
	  progressBar.style.flexBasis = `${percent}%`;
	}
	//timeupdate 事件在音频/视频（audio/video）的播放位置发生改变时触发。
	video.addEventListener('timeupdate', handleProgress);


	//拖拽进度条==========================================
	//我们要点击进度条时调整播放进度，我们改变进度，或者说宽度就需要得到鼠标点击的位置
	//这个可以通过事件对象的offsetX属性来找到，该属性代表鼠标点击的位置相对于该元素的水平偏移
	//得到偏移后计算出该位置的百分比
	function scrub(e) {
	  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
	  video.currentTime = scrubTime;
	}
	let mousedown = false;
	progress.addEventListener('click', scrub);
	progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
	progress.addEventListener('mousedown', () => mousedown = true);
	progress.addEventListener('mouseup', () => mousedown = false);


```