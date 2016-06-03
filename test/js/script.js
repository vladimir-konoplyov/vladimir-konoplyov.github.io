$(function() {

// function windowSize(){
//     var w = $('.out-results').width();
//     if ((w > '321') && (w <= '767')) {
//        $('.out-results').css('max-width', '70%');
//     }
//     else if ((w >= '768') && (w <= '939')) {  
//       $('.out-results').css('max-width', '768px');
//     }  else if (w >= '940') { 
//       $('.out-results').css('max-width', '940px');      
//        }
// }

// $(window).load(windowSize); 
// $(window).resize(windowSize);

function slowHoverEfect() {
$('.header__text-sign-up').mouseenter(function() {
  $('.header__link-sign-up').css({'color':'#ff4e50', 'transition': '.5s'});
  $('.header__text-sign-up').css({'color':'#ff4e50', 'transition': '.5s'});
}).mouseleave(function() {
     $('.header__link-sign-up').css('color', '#ffffff')
  });
}

function sliderJcarousel1() {
    $('.jcarousel1').jcarousel();
    $('.jcarousel-prev1').click(function() {
    $('.jcarousel1').jcarousel('scroll', '-=1');
    });
    $('.jcarousel-next1').click(function() {
        $('.jcarousel1').jcarousel('scroll', '+=1');
    });
}

function sliderJcarousel2() {
    $('.jcarousel2').jcarousel();
    $('.jcarousel-prev2').click(function() {
    $('.jcarousel2').jcarousel('scroll', '-=1');
    });
    $('.jcarousel-next2').click(function() {
    $('.jcarousel2').jcarousel('scroll', '+=1');
    });
}

function sliderJcarousel3() {
    $('.jcarousel3').jcarousel();
    $('.jcarousel-prev3').click(function() {
    $('.jcarousel3').jcarousel('scroll', '-=1');
    });
    $('.jcarousel-next3').click(function() {
    $('.jcarousel3').jcarousel('scroll', '+=1');
    });
}

  /* Pixplorer API*/

  function searchImagesPixplorer() {

    $('.search-form').on('submit', function() {
        var enteredQuery = $('#entered-query').val();
        $('.discover__boxes').hide();
        $.ajax({
            url: "http://api.pixplorer.co.uk/image?word="+ enteredQuery +"&amount=7&size=tb",
            success: function(data, textStatus) {
                // console.log('Success: ', data);
                var divBox = document.createElement('div');
                divBox.classList.add('out-results__wrapper');
                $.each(data.images, function(i) {
                     var outResultsBox = document.createElement('div');
                     outResultsBox.classList.add('out-results__box'+ i);
                     outResultsBox.innerHTML = '<img class="out-results__image' + i + '" src="'+data.images[i].imageurl+'">';
                    divBox.appendChild(outResultsBox);                   
                });
                $('#out-results').html(divBox);
            },
            error: function(data, textStatus) {
                // console.log('Error: ', data);
            }
        });    
        return false;  
    });
  } 

  /* Pixabay API*/

  function searchImagesPixabay() {

    $('.search-form').on('submit', function() {
        $('.discover__boxes').hide();
        var enteredQuery = $('#entered-query').val();
        var API_KEY = '2671443-f70b44031fad9176b9185b139';
        $.ajax({
            url: "https://pixabay.com/api/?key="+API_KEY+"&q="+ enteredQuery + "&per_page=7&lang=ru",
            dataType: 'jsonp',
            method: 'GET',
            success: function(data, textStatus) {
                // console.log('Success: ', data);
                 var divBox = document.createElement('div');
                 divBox.classList.add('out-results__wrapper');         
                $.each(data.hits, function(i) {
                // for(var i = 0; i <= 6; i++) {
                     var outResultsBox = document.createElement('div');
                     outResultsBox.classList.add('out-results__box'+ i);
                     outResultsBox.innerHTML = '<img class="out-results__image' + i + '" src="'+data.hits[i].webformatURL+'">';
                    divBox.appendChild(outResultsBox);   
                });

                $('#out-results').html(divBox);
            },
            error: function(data, textStatus) {
                console.log('Error: ', data);
            }
        });    
        return false;  
    }); 
  }


slowHoverEfect(); // function for slow hover efect for block sign up

sliderJcarousel1(); // first slider
sliderJcarousel2(); // second slider
sliderJcarousel3(); // third slider

searchImagesPixabay(); // function for search images with Pixabay API


});