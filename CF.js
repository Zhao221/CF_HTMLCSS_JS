//获得id
var slideauto = document.querySelector('#slideauto');
//获得图片标签
var imgs = document.querySelectorAll('.images');
//获得列表
var icons = document.querySelectorAll('.list');
//初始化图片的位置
var lefte = 0;
// 设置一个计时器
var timer;
//设置索引
var index = 0;
//自调动 
function run() {
	//如果索引等于照片数组的最大值，将索引重新变为0，也就是无间隔循环
	if (index == imgs.length - 1) {
		index = 0;
	}
	//让图片左移（=自由移动）
	slideauto.style.marginLeft = -(index++) * 812 + 'px';
	changeicon(index - 1); //让下标自由移动（共有8张图，其中第一张和第八张图一样）
}
//每隔三秒移动
timer = setInterval(run, 2000);

//颜色替换
function changeicon(index) {
	for (let i = 0; i < icons.length; i++) {
		icons[i].style.backgroundColor = ""; //颜色清空
	}
	// @！！！！更改
	if(index==7){
		icons[0].style.backgroundColor = "red";
	}else{
		icons[index].style.backgroundColor = "red";   //让红色背景跟着索引走
	}
	
}
//绑定图片事件
for (let i = 0; i < imgs.length; i++) {
	//闭包解决()(i)
	(function(i) {
		imgs[i].onmousemove = function() {
			clearInterval(timer); //鼠标放在上面，停止移动
			index = i;
			lefte = 812;
			slideauto.style.marginLeft = -(i) * lefte + 'px';
			changeicon(i);
		}
		imgs[i].onmouseout = function() {
			timer = setInterval(run, 2000);
		}
	})(i)

}
for (var i = 0; i < icons.length; i++) {
	//闭包解决()(i)
	(function(i) {
		icons[i].onmousemove = function() {
			clearInterval(timer);
			index = i;
			lefte = 812;
			slideauto.style.marginLeft = -(i) * lefte + 'px';
			changeicon(i);
		}
		icons[i].onmouseout = function() {
			timer = setInterval(run, 2000);
		}
	})(i)

}
//获取两个按钮
var buttonone = document.querySelector("#buttonone");
var buttontwo = document.querySelector("#buttontwo");
buttonone.onmouseover = function() {
	clearInterval(timer);
	buttonone.onclick = function() {
		if (index == 0) {
			index = imgs.length - 1;
		}
		slideauto.style.marginLeft = -(index--) * 812 + 812 + 'px';
		changeicon(index);
	}
}
buttonone.onmouseout = function() {
	timer = setInterval(run, 2000);
}
buttontwo.onmouseover = function() {
	clearInterval(timer);
	buttontwo.onclick = function() {
		console.log("点击");
		if (index == imgs.length-1) {
			index = 0;
			console.log(icons[0]);
		}
		slideauto.style.marginLeft = -(index++) * 812-812 + 'px';
			changeicon(index);
		

	}
}
buttontwo.onmouseout = function() {
	timer = setInterval(run, 2000);
}
