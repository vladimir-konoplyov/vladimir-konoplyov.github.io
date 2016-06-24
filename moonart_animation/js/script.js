$(function(){
    
    $('.last_work_see_more').hover(
    function(){
        $(this).find('div').animate({'background-color':'#222'},300);
        $(this).find('a').css('background-position','50% -55px');
    },function(){
        $(this).find('div').animate({'background-color':'#fff'},300);
        $(this).find('a').css('background-position','50% 0px');
    });
    
    $('.last_work_one').hover(function(){
        $(this).find('div.last_work_one_data').stop().animate({'left':'-250px','top':'-156px'},500,function(){
            $(this).css({'left':'254px','top':'160px'});
        });
    },function(){
        $(this).find('div.last_work_one_data').stop().animate({'left':'0px','top':'0px'},500);
    });
});