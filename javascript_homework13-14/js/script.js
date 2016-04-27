"use strict";

$(function() {

    // Template

    var html = $('#output-test').html();
	var info = [
		
		{
		questionTitle: '1. Что такое HTML? ',
		questionText: ['Язык гипертекстовой разметки', 'Язык программирования Hybrid', 'Язык программирования C#'],
		questionAnswer: ['true', 'false', 'false']
		},

		{
		questionTitle: '2. Как расшифровывается абревиатура CSS?',
		questionText: ['Cascading Site Style', 'Cascading Style Sheets', 'Cascad Sheet Style'],
		questionAnswer: ['false', 'true', 'false']
		},

		{
		questionTitle: '3. Кто самый крутой чувак в GoIT? :-)',
		questionText: ['Тарас Банный', 'Олег Змиюк', 'Андрей Пивоваров'],
		questionAnswer: ['true', 'true', 'true']
		}		
	];

	// var content = tmpl(html, {
	// 	data: info
	// });

	var testInLocalStorage = JSON.stringify(info);
	localStorage.setItem('keyTest', testInLocalStorage);

	var testOutFromLocalStorage = localStorage.getItem('keyTest');

	var variableTest = JSON.parse(testOutFromLocalStorage);

	var content = tmpl(html, {
		data: variableTest
	});

	// var answerResult = [[], [], []];
	var answerResult = [];
	var count = 0,  markPositive = 0, markNegative = 0;


	// console.log(variableTest);
	

	$('body').append(content);

	$('.output-wrapper').slideDown('slow');

	$('.button-refer').on('click', function() {

		for (var i =  0; i < variableTest.length; i++) {

			for (var j =  0; j < variableTest[i].questionText.length; j++) {

				if (($('#checkbox_' + i + '_' + j).prop('checked')) && (variableTest[i].questionAnswer[j] === 'true')) { 
        			// alert('Выбран ответ ' + i + '_' + j);

        			// alert('Ответ' + (i + 1) + '_' + (j + 1) + ' верный' );
        			answerResult[count] = '<p class="modal-window__output-result">' +'Ответ ' + (i + 1) + '.' + (j + 1) + ' верный' + '</p>';
        			count++;
        			markPositive++;
			} else if (($('#checkbox_' + i + '_' + j).prop('checked')) && (variableTest[i].questionAnswer[j] === 'false')) {
				// alert('Ответ' + (i + 1) + '_' + (j + 1) + ' не верный!' );
				answerResult[count] = '<p class="modal-window__output-result">' + 'Ответ ' + (i + 1) + '.' + (j + 1) + ' не верный!'+ '</p>';
				count++;
				markNegative++;
				// countNegative++;
			}


				// if (variableTest[i].questionAnswer[j] === 'true') {
				// 	alert('TRUE!');
				// } else {alert('False!');}


				// console.log(variableTest[i].questionAnswer[j]);

			}

			
		}
		


		for (var m = 0; m < answerResult.length; m++) {
			console.log(answerResult[m]);
			
		};
		console.log('--------------');
		console.log('Правильных ответов: ', markPositive);
		console.log('Не правильных ответов: ', markNegative);

		// var rightAnsweStr = '<p class="modal-window__output-result">' + 'Правильных ответов: ' +  markPositive + '</p>';
		// var wrongAnsweStr = '<p class="modal-window__output-result">' + 'Не правильных ответов ' +  markNegative + '</p>';


		$('.modal-window').slideDown('slowly');


		// $('.modal-window').append(answerResult);
		// $('p.modal-window__title').append('11111111111111111');

		// $('p.modal-window__title').after(answerResult);
		$('div.modal-window__result-here').append(answerResult);


		if (markPositive == 5) {
			 $('div.modal-window__result-here').after('<p class="modal-window__output-result-all-correct">' + 'Поздравляю! Вы ответили правильно на все вопросы!' + '</p>');
		} else if ((markPositive >= 1) && (markPositive < 5)) {
			$('div.modal-window__result-here').after('<p class="modal-window__output-result-not-all-correct">' + 'Вы ответили правильно не на все вопросы!' + '</p>');
			$('p.modal-window__output-result-not-all-correct').after('<div class="button-refer-position"><input class="modal-window__button-retry" type="button" value="Попробовать еще раз"></div>');
		} else if ((markPositive == 0) && (markNegative ==0))  {
			$('div.modal-window__result-here').after('<p class="modal-window__output-result-not-choosed">' + 'Вы не выбрали ни одного ответа!' + '</p>');
			$('p.modal-window__output-result-not-choosed').after('<div class="button-refer-position"><input class="modal-window__button-retry" type="button" value="Попробовать еще раз"></div>');
		} else if ((markNegative > 0) && (markPositive == 0))  {
			$('div.modal-window__result-here').after('<p class="modal-window__output-result-not-choosed">' + 'Все ответы неверные!' + '</p>');
			$('p.modal-window__output-result-not-choosed').after('<div class="button-refer-position"><input class="modal-window__button-retry" type="button" value="Попробовать еще раз"></div>');

		};

		$('.modal-window__button-retry').on('click', function() {

			window.location.reload();

			// $('.modal-window').css('display', 'none');
			// $('.modal-window').empty();
			// $('body').append(content);

		});

		// if (markPositive == 5) {
		// 	 $('.modal-window').append('<p class="modal-window__output-result-all-correct">' + 'Поздравляю! Вы ответили правильно на все вопросы!' + '</p>');
		// } else if ((markPositive >= 1) && (markPositive < 5) ) {
		// 	$('.modal-window').append('<p class="modal-window__output-result-not-all-correct">' + 'Вы ответили правильно не на все вопросы!' + '</p>');
		// 	$('.modal-window').append('<div class="button-refer-position"><input class="modal-window__button-retry" type="button" value="Попробовать еще раз"></div>');
		// } else if ((markPositive == 0) && (markNegative ==0))  {
		// 	$('.modal-window').append('<p class="modal-window__output-result-not-choosed">' + 'Вы не выбрали ни одного ответа!' + '</p>');
		// 	$('.modal-window').append('<div class="button-refer-position"><input class="modal-window__button-retry" type="button" value="Попробовать еще раз"></div>');

		// }

		// console.log(answerResult.length);



		



		// console.log(answerResult[0][1]);
		// console.log('Правильных ответов: ',count);
		// console.log('Неправильных ответов: ', countNegative);

		// for (var k = 0; k <= answerResult.length; k++) {
		// 	for (var l = 0; l <= answerResult[k].length; l++) {

		// 	console.log(answerResult[k][l]);
		// 	};
			// k++;
		// };
	});







});