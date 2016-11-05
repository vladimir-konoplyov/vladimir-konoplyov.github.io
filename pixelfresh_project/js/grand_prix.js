$(function() {

    $(".fancybox").fancybox();
    $(".fancybox")
    .attr('rel', 'gallery')
    .fancybox({
        padding : 0
    });

    $('.logo__text1').addClass('logo__text1--active');
    $('.logo__text2').addClass('logo__text2--active');


});