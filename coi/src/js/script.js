$(function() {

	// Функція для додавання блакитного фону іконкам при наведенні 
	function categoryHover() {
		$('.icons-category__wrapper').mouseenter(function() {
			$(this).find('.icons-category__wrapper-bg').css('display', 'block');
			$(this).find('.icons-category__wrapper-bg').css('cursor', 'pointer');
		});
		$('.icons-category__wrapper-bg').mouseout(function() {
			$(this).css('display', 'none');
		});		
	}

	//Функція для розгортання меню при натисканні на іконку при роздільній здатності екрану 320px
	function showMenu() {
		var count = 0;
		$('.menu__icon').click(function() {
			$('.menu__little').fadeIn('slow');
			count++;
			console.log('COUNT=', count);
			if (count % 2 !== 0) {
				$('.menu__little').css('display', 'block');
			} else {
				$('.menu__little').fadeOut('slow');
			}
		});		
	}

	// Функція для розгортання форми після натискання на кнопку "Замовити"
	function showFormOrder() {
		var countShowForm = 0;
		$('.button--big').click(function() {
			$('.order-box').fadeIn('slow');
			countShowForm++;
			console.log('COUNT=', countShowForm);
			if (countShowForm % 2 !== 0) {
				$('.order-box').css('display', 'block');
			} else {
				$('.order-box').fadeOut('slow');
			}
		});
	}

	// Функція збільшення фото в модальному вікні
	function showPhoto() {
		$('.main-photo-box__link').click(function() {
			$('.modal-window').fadeIn('slow');		
		});
	}

	// Функція згортання фото та закриття модального вікна
	function hidePhoto() {
		$('.modal-window__close').click(function() {
			$('.modal-window').fadeOut('slow');		
		});
		$(document).keydown(function(e) {
			if(e.keyCode === 27) {
				$('.modal-window').fadeOut('slow');
			}
		});
	}


// Ініціалізація паралакс-плагіну
$('.parallax-layer')
	.parallax({}, {}, {xparallax: '200px', yparallax: '50px'});

// Виклик функцій
categoryHover();
showMenu();
showFormOrder();
showPhoto();
hidePhoto();

});

