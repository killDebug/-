


/* DOMMousescroll */

	var index=0;
	var flag=true;
	var oBig=document.getElementById('resume_box');
	var oH=$(window).height();
	
	addEvent(document,'mousewheel',fn);
	addEvent(document,'DOMMouseScroll',fn);
	
	$('header ul li').on('click',function(){
		index = $(this).index()-1;
		var top=-1*oH*index+'px';
		$('#resume_box').animate({top:top});
	})
	
	function fn(ev){
		var ev=ev||event;
		var v=ev.detail||ev.wheelDelta;
		if(flag){
			flag=false;
			if(v==-3 || v==120){
				index--;
				if(index<0){
					index=0;
				}
			}else{
				index++;
				if(index>5){
					index=5;
				}
			}
			var top=-1*oH*index+'px';
			$('#resume_box').animate({top:top});
			setTimeout(function(){
				flag=true;
			},500)
		}
	}

	function addEvent(obj,type,fn){
		if(obj.addEventListener){
			return obj.addEventListener(type,fn);

		}else{
			return obj.attachEvent('on' + type,fn);
		}
	}

/* SKILL 切换 */

$('.personal-module li').on('click',function(){
	var index = $(this).index();
	
	$(this).find('.module-introduce').show();
	$(this).find('.module-introduce').prev().attr('src','images/flag.png');
	$(this).siblings().find('.module-introduce').prev().attr('src','images/skill_flag.png');
	$(this).siblings().find('.module-introduce').hide();
})

/*swiper myExperience*/

var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30
});

/* contact me */

$('.contact').on('click',function(){
	$('.contact-me').html('<p>'+
	'QQ:'+
	'<a>1226976344</a>'+
	'</p>'+
	'<p>'+
	'TELE：'+
	'<a>18392097105</a>'+
	'</p>'+
	'<p>'+
	'E-mail：'+
	'<a>zsfyn1@163.com</a>'+
	'</p>');
})
























