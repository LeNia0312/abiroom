//top main slider
$(document).ready(function(){
    $('.bxslider').bxSlider({
        infiniteLoop: true,
        speed: 1000,
        randomStart: true,
        pager: false,
		auto: true
    });
});


//top ranking
$(function(){
	$("a.btn_act").click(function(){
		var connectCont = $("a.btn_act").index(this);
		var showCont = connectCont+1;
		$('.motion').css({display:'none'});
		$('#motion_area'+(showCont)).fadeIn('slow');

		$('a.btn_act').removeClass('active');
		$(this).addClass('active');
	});
});

//top photo slider
$(document).ready(function(){
    $('.bxslider-photo').bxSlider({
        infiniteLoop: true,
        slideWidth: 333,
        speed: 1000,
		auto: true,
		pager: false,
		minSlides: 3,
		maxSlides: 3,
		moveSlides: 1,
		slideMargin: 0
    });
});

//SP top banner slider
$(document).ready(function(){
    $('.bxslider-banner').bxSlider({
        infiniteLoop: true,
        slideWidth: 500,
        speed: 1000,
		auto: true,
		pager: false,
		minSlides: 2,
		maxSlides: 2,
		moveSlides: 1,
		slideMargin: 0
    });
});

//staff movie
$(document).ready(function(){
    $('.bxslider-staffMovie').bxSlider({
        infiniteLoop: true,
        slideWidth: 1000,
        speed: 1000,
		auto: true,
		pager: false,
		minSlides: 1,
		maxSlides: 1,
		moveSlides: 1,
		slideMargin: 0
    });
});

//staff movie SP
$(document).ready(function(){
    $('.bxslider-staffMovieSP').bxSlider({
        infiniteLoop: true,
        speed: 1000,
		auto: true,
		pager: false,
		minSlides: 1,
		maxSlides: 1,
		moveSlides: 1,
		slideMargin: 0
    });
});

//photo SP
$(document).ready(function(){
    $('.bxslider-photoSP').bxSlider({
        infiniteLoop: true,
        speed: 1000,
		auto: true,
		pager: false,
		minSlides: 1,
		maxSlides: 1,
		moveSlides: 1,
		slideMargin: 0
    });
});

//画像背景変更
$(document).ready(function() {
    $(".div1077").imgLiquid({
        fill: true,
        verticalAlign:'top',      // 'center' //  'top'   //  'bottom' // '50%'  // '10%'
        horizontalAlign:'center'    // 'center' //  'left'  //  'right'  // '50%'  // '10%'
    });
});



//スマホMENU
$(function(){
    $(".spmenu_btn").on("click", function() {
        $(this).next().slideToggle();
        $(this).toggleClass("active");
    });
});






