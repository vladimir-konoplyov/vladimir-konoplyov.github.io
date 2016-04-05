$(function() {

	var $firstName = $('#first-name');
	var $lastName = $('#last-name');
	var $address = $('#address');

	var $buttonShow = $('#button-show-help');



	$firstName.mouseover(function() {
		// $('#tooltips_firstname').slideToggle('slow');
		$('#tooltips_firstname').fadeIn('slow');
	})
	.mouseleave(function() {
		$('#tooltips_firstname').fadeOut('slow');
	});

	$lastName.mouseover(function() {
		$('#tooltips_lastname').fadeIn('slow');
	})
	.mouseleave(function() {
		$('#tooltips_lastname').fadeOut('slow');
	});


	$address.mouseover(function() {
		$('#tooltips_address').fadeIn('slow');
	})
	.mouseleave(function() {
		$('#tooltips_address').fadeOut('slow');
	});

	$buttonShow.on('click', function() {
		$('#tooltips_firstname').fadeIn('slow');
		$('#tooltips_lastname').fadeIn('slow');
		$('#tooltips_address').fadeIn('slow');
	});

	$buttonShow.mouseleave(function() {
		$('#tooltips_firstname').fadeOut(3000);
		$('#tooltips_lastname').fadeOut(3000);
		$('#tooltips_address').fadeOut(3000);
	});






});