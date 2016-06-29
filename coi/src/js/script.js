$(function() {

	function categoryHover() {
		$('.icons-category__wrapper').mouseenter(function() {
			$(this).find('.icons-category__wrapper-bg').css('display', 'block');
			$(this).find('.icons-category__wrapper-bg').css('cursor', 'pointer');
		});
		$('.icons-category__wrapper-bg').mouseout(function() {
			$(this).css('display', 'none');
		});		
	}

	function showMenu() {
		var count = 0;
		$('.menu__icon').click(function() {
			$('.menu__list').fadeIn('slow');
			count++;
			console.log('COUNT=', count);
			if (count % 2 !== 0) {
				$('.menu__list').css('display', 'block');
			} else {
				$('.menu__list').fadeOut('slow');
			}
		});		
	}

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



categoryHover();
showMenu();
showFormOrder();


});

