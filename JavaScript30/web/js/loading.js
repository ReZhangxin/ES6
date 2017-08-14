/*
需要引入loading.css以及一些html代码
*/

   const pacman = document.querySelector('.pacman');
	pacman.style.display = "block";
	document.body.classList.add("on");
	window.onmousewheel=() => false;
	document.onreadystatechange = function(){
	if(document.readyState === "complete"){
		pacman.style.display = "none";
		document.body.classList.remove("on");
		window.onmousewheel=() => true;
	}
     }





