$(function() {

	var $firstName = $('#first-name');
	var $lastName = $('#last-name');
	var $address = $('#address');

	var $buttonShow = $('#button-show-help');

	var $tab1 = $('#tab1');
	var $tab2 = $('#tab2');
	var $tab3 = $('#tab3');

	// Переключаемые табы

	$('.tab1-text').show();
	$tab1.addClass('tab-default');

	$tab1.on('click', function() {
		$('.tab1-text').show();
		$(this).removeClass('tab-default').removeClass('tab-unvisited').addClass('tab-visited');
		$('.tab2-text').hide();
		$('.tab3-text').hide();
		$tab2.removeClass('tab-visited').addClass('tab-unvisited');
		$tab3.removeClass('tab-visited').addClass('tab-unvisited');
	});

	$tab2.on('click', function() {
		$('.tab2-text').show();
		$(this).removeClass('tab-unvisited').addClass('tab-visited');
		$('.tab1-text').hide();
		$('.tab3-text').hide();
		$tab1.removeClass('tab-visited').addClass('tab-unvisited');
		$tab3.removeClass('tab-visited').addClass('tab-unvisited');
	});
	
	$tab3.on('click', function() {
		$('.tab3-text').show();
		$(this).removeClass('tab-default').removeClass('tab-unvisited').addClass('tab-visited');
		$('.tab1-text').hide();
		$('.tab2-text').hide();
		$tab1.removeClass('tab-visited').addClass('tab-unvisited');
		$tab2.removeClass('tab-visited').addClass('tab-unvisited');
	});

	// Всплывающие подсказки

	$firstName.mouseover(function() {
		$('#tooltips_firstname').stop().fadeTo('slow', 1);
	})
	.mouseleave(function() {
		$('#tooltips_firstname').stop().fadeTo('slow', 0);
	});


	$lastName.mouseover(function() {
		$('#tooltips_lastname').stop().fadeTo('slow', 1);
	})
	.mouseleave(function() {
		$('#tooltips_lastname').stop().fadeTo('slow', 0);
	});


	$address.mouseover(function() {
		$('#tooltips_address').stop().fadeTo('slow', 1);
	})
	.mouseleave(function() {
		$('#tooltips_address').stop().fadeTo('slow', 0);
	});

	$buttonShow.on('click', function() {
		$('#tooltips_firstname').fadeTo('slow', 1);
		$('#tooltips_lastname').fadeTo('slow', 1);
		$('#tooltips_address').fadeTo('slow', 1);
	});

	$buttonShow.mouseleave(function() {
		$('#tooltips_firstname').fadeOut(2000);
		$('#tooltips_lastname').fadeOut(2000);
		$('#tooltips_address').fadeOut(2000);
	});

});