$(function() {

	// Carousel

	var leftUIEl = $('.carousel-arrow-left');
    var rightUIEl = $('.carousel-arrow-right');
    var elementsList = $('.carousel-list');

    var pixelsOffset = 290;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 3) * pixelsOffset);
    var maximumOffset = 0;
 
    leftUIEl.click(function() {        
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += 290;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }        
    });
 
    rightUIEl.click(function() {        
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= 290;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }     
    });

    // Template

    var html = $('#output-info').html();
	var info = [
		
		{
		header: 'Коноплев Владимир Владимирович',
		img: 'http://vladimir-konoplyov.github.io/homework 2/img/image1.jpg',
		content: 'Начинающий Front-end разработчик'
		},

		{
		content: 'Хочу учить Front-end, потому что:<br><br> - Это интересно <br> - Web-технологии динамично развиваются <br> - Хочу стать профессионалом в Front-end'
		},

		{
		content: 'Мой контактный телефон <br> +380507034918 <br><br> Мой профиль вконтакте <br> <a href="http://vk.com/id5208323" target="_blank">vk.com</a>'
		},

		{
		content: 'Мой фидбек:<br> «Через тернии к звездам!» Все получится!'
		}		
	];

	var content = tmpl(html, {
		data: info
	});

	$('.button-refer').one('click', function() {
		$('.output-wrapper').slideDown('slow');
	});

	$('body').append(content);

	$('.line:last-child').remove();


});