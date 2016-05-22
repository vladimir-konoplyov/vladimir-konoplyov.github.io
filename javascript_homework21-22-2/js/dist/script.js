"use strict";

$(function () {

    // Template

    var html = $('#output-test').html();
    var info = [{
        questionTitle: '1. Что такое HTML? ',
        questionText: ['Язык гипертекстовой разметки', 'Язык программирования Hybrid', 'Язык программирования C#'],
        questionAnswer: ['true', 'false', 'false']
    }, {
        questionTitle: '2. Как расшифровывается абревиатура CSS?',
        questionText: ['Cascading Site Style', 'Cascading Style Sheets', 'Cascad Sheet Style'],
        questionAnswer: ['false', 'true', 'false']
    }, {
        questionTitle: '3. Кто самый крутой чувак в GoIT? :-)',
        questionText: ['Тарас Банный', 'Олег Змиюк', 'Андрей Пивоваров'],
        questionAnswer: ['true', 'true', 'true']
    }];

    var testInLocalStorage = JSON.stringify(info);
    localStorage.setItem('keyTest', testInLocalStorage);

    var testOutFromLocalStorage = localStorage.getItem('keyTest');

    var variableTest = JSON.parse(testOutFromLocalStorage);

    var content = tmpl(html, {
        data: variableTest
    });

    var answerResult = [];
    var count = 0,
        markPositive = 0,
        markNegative = 0;

    $('body').append(content);

    $('.output-wrapper').slideDown('slow');

    $('.button-refer').on('click', function () {

        for (var i = 0; i < variableTest.length; i++) {

            for (var j = 0; j < variableTest[i].questionText.length; j++) {

                if ($('#checkbox_' + i + '_' + j).prop('checked') && variableTest[i].questionAnswer[j] === 'true') {

                    answerResult[count] = '<p class="modal-window__output-result">' + 'Ответ ' + (i + 1) + '.' + (j + 1) + ' верный' + '</p>';
                    count++;
                    markPositive++;
                } else if ($('#checkbox_' + i + '_' + j).prop('checked') && variableTest[i].questionAnswer[j] === 'false') {

                    answerResult[count] = '<p class="modal-window__output-result">' + 'Ответ ' + (i + 1) + '.' + (j + 1) + ' не верный!' + '</p>';
                    count++;
                    markNegative++;
                }
            }
        }

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = answerResult[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var value = _step.value;

                console.log(value);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        ;

        console.log('--------------');
        console.log('Правильных ответов: ', markPositive);
        console.log('Не правильных ответов: ', markNegative);

        $('.modal-window').fadeIn('slowly');

        $('div.modal-window__result-here').append(answerResult);

        if (markPositive == 5) {
            $('div.modal-window__result-here').after('<p class="modal-window__output-result-all-correct">' + 'Поздравляю! Вы ответили правильно на все вопросы!' + '</p>');
        } else if (markPositive >= 1 && markPositive < 5) {
            $('div.modal-window__result-here').after('<p class="modal-window__output-result-not-all-correct">' + 'Вы ответили правильно не на все вопросы!' + '</p>');
            $('p.modal-window__output-result-not-all-correct').after('<div class="button-refer-position"><input class="modal-window__button-retry" type="button" value="Попробовать еще раз"></div>');
        } else if (markPositive == 0 && markNegative == 0) {
            $('div.modal-window__result-here').after('<p class="modal-window__output-result-not-choosed">' + 'Вы не выбрали ни одного ответа!' + '</p>');
            $('p.modal-window__output-result-not-choosed').after('<div class="button-refer-position"><input class="modal-window__button-retry" type="button" value="Попробовать еще раз"></div>');
        } else if (markNegative > 0 && markPositive == 0) {
            $('div.modal-window__result-here').after('<p class="modal-window__output-result-not-choosed">' + 'Все ответы неверные!' + '</p>');
            $('p.modal-window__output-result-not-choosed').after('<div class="button-refer-position"><input class="modal-window__button-retry" type="button" value="Попробовать еще раз"></div>');
        };

        $('.modal-window__button-retry').on('click', function () {
            window.location.reload();
        });
    });
});
