$(function() {

	// var ScreenWidth = screen.width; 
	// if (ScreenWidth == 768) {
	// 	alert('рАзрешение экрана = ', ScreenWidth);
	// 	console.log('рАзрешение экрана = ', ScreenWidth);
	// }

// if (screen.width <= '768') {
//    $('body').css('background', 'green');
// } else if (screen.width > '768') {
//     $('body').css('background', 'blue');
// }

function windowSize(){
if ($(window).width() < '768') {
   // $('body').css('background', 'green');
    $('.slider__box').css('display', 'block');
    $('.jcarousel').css('display', 'none');
} else if ($(window).width() > '768') {
    // $('body').css('background', 'grey');
    $('.slider__box').css('display', 'none');
    $('.jcarousel').css('display', 'block');
}
}

// $(window).load(windowSize); 
// $(window).resize(windowSize);




    $('.jcarousel1').jcarousel();
    $('.jcarousel-prev1').click(function() {
    $('.jcarousel1').jcarousel('scroll', '-=1');
    });
    $('.jcarousel-next1').click(function() {
        $('.jcarousel1').jcarousel('scroll', '+=1');
    });


    $('.jcarousel2').jcarousel();
    $('.jcarousel-prev2').click(function() {
    $('.jcarousel2').jcarousel('scroll', '-=1');
    });
    $('.jcarousel-next2').click(function() {
    $('.jcarousel2').jcarousel('scroll', '+=1');
    });

    $('.jcarousel3').jcarousel();
    $('.jcarousel-prev3').click(function() {
    $('.jcarousel3').jcarousel('scroll', '-=1');
    });
    $('.jcarousel-next3').click(function() {
    $('.jcarousel3').jcarousel('scroll', '+=1');
    });



});