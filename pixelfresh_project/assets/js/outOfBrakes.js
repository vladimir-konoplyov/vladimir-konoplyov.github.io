$(function() {

    $(".fancybox").fancybox();
    $(".fancybox")
    .attr('rel', 'gallery')
    .fancybox({
        padding : 0
    });

    $('.logo__text1').addClass('logo__text1--active');
    $('.logo__text2').addClass('logo__text2--active');


function windowSize() {
 if ($(window).width() < '480') {
  $('.at-icon-wrapper').css('line-height', '20px').css('height', '20px').css('width', '20px');
  $('.at-icon').css('height', '20px').css('width', '20px');

 }

  if ($(window).width() >= '480') {
  $('.at-icon-wrapper').css('line-height', '32px').css('height', '32px').css('width', '32px');
  $('.at-icon').css('height', '32px').css('width', '32px');
 }
}

$(window).load(windowSize); 
$(window).resize(windowSize);


});