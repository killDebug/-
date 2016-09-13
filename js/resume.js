
/* Initialize Swiper */

var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    direction: 'vertical',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 30,
    mousewheelControl: true,
});

<!-- Initialize Swiper -->

/*var swiper = new Swiper('.swiper-container1', {
    pagination: '.swiper-pagination',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 30,
    keyboardControl: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
});*/


/* module-introduce click */

$('.personal-module li').on('click',function(){
	var index = $(this).index();
	switch(index){
		case 0 : 
		$('.module-introduce').html('<ul>'+
			'<li>熟练运用angularJS处理移动端的模块开发</li>'+
			'<li>模块组件化</li>'+
			'<li>了解双绑的背后实现</li>'+
			'<li>熟练的指令编写</li>'+
		'</ul>');
		break;
		case 1 :
		$('.module-introduce').html('<ul>'+
			'<li>深刻理解Web标准</li>'+
			'<li>熟练运用html标签</li>'+
			'<li>熟悉xml及xhtml标记语言</li>'+
			'<li>掌握html5如SVG，localstorage新特性</li>'+
		'</ul>');
		break;
		case 2 :
		$('.module-introduce').html('<ul>'+
			'<li>熟练运用css及css3新属性</li>'+
			'<li>注重浏览器兼容性，熟悉常见的css hack（兼容至IE8）</li>'+
			'<li>掌握bootstrap框架及源码的实现</li>'+
			'<li>掌握css预编译器Less及Sass</li>'+
		'</ul>');
		break;
		case 3 :
		$('.module-introduce').html('<ul>'+
			'<li>掌握jQuery</li>'+
			'<li>掌握原生JS的编程</li>'+
			'<li>注重JavaScript性能优化</li>'+
			'<li>正在学习ES6</li>'+
		'</ul>');
		break;
	}
})

/*  myExperience adapt window height  */

window.onload=function(){
	var w = $(window).width();
	//alert(w)
	if( w<330 ){
		$('.myExperience').height(100);
		$('.exp-pic').height(100);
	}else if( w>330 ){
		$('.myExperience').height(300);
		$('.exp-pic').height(300);
	}
}























