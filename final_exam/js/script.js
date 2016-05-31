$(function() {

	// var ScreenWidth = screen.width; 
	// if (ScreenWidth == 768) {
	// 	alert('рАзрешение экрана = ', ScreenWidth);
	// 	console.log('рАзрешение экрана = ', ScreenWidth);
	// }

// if (screen.width <= '768') {
//    $('body').css('background', 'green');
// } else if (screen.width > '768') {
//     $('body').css('background', 'blue');
// }

// function windowSize(){
// if ($(window).width() < '768') {
//     $('.slider__box').css('display', 'block');
//     $('.jcarousel').css('display', 'none');
// } else if ($(window).width() > '768') {
//     $('.slider__box').css('display', 'none');
//     $('.jcarousel').css('display', 'block');
// }
// }

// $(window).load(windowSize); 
// $(window).resize(windowSize);

function windowSize(){
  //   var w = $(window).width();
  //   var elem = $('.out-results').text ();

  //   if ((w >= '320') && (w <= '767')) {
  //       if ($('.out-results').length !== 0) {
  //      $('.out-results').css('margin', '0 auto 29px');  
  //        console.log('elem2 = ', elem);          
  //       }
  // }
  // else if ((w >= '768') && (w <= '939')) {
  //       if ($('.out-results').length !== 0) {  
  //   $('.out-results').css('overflow', 'hidden');
  //   $('.out-results').css('margin', '33px auto 95px'); 
  //   console.log('elem3 = ', elem);        
  //       }

  //    if ($('.out-results').length == 1) {
  //   $('.out-results').css('overflow', 'visible');
  //   $('.out-results').css('margin', '0px auto 29px');         
  //       }

        // if (!$.trim($('.out-results').val())) {
        //     $('.out-results').addClass('active');
        //     $('.active').css('overflow', 'hidden');
        //     $('.active').css('margin', '33px auto 95px');          
        // } 
        // else if ($.trim($('.out-results').val())) {
        //     $('.out-results').removeClass('active');
        //     $('.out-results').css('margin', '0 auto 29px');
        //     $('.active').css('overflow', 'none');
        // } 



    // $('.out-results:empty').css('overflow', 'hidden');
    // $('.out-results').css('margin', '33px auto 95px');
  // }

}

$(window).load(windowSize); 
$(window).resize(windowSize);


    $('.jcarousel1').jcarousel();
    $('.jcarousel-prev1').click(function() {
    $('.jcarousel1').jcarousel('scroll', '-=1');
    });
    $('.jcarousel-next1').click(function() {
        $('.jcarousel1').jcarousel('scroll', '+=1');
    });


    $('.jcarousel2').jcarousel();
    $('.jcarousel-prev2').click(function() {
    $('.jcarousel2').jcarousel('scroll', '-=1');
    });
    $('.jcarousel-next2').click(function() {
    $('.jcarousel2').jcarousel('scroll', '+=1');
    });

    $('.jcarousel3').jcarousel();
    $('.jcarousel-prev3').click(function() {
    $('.jcarousel3').jcarousel('scroll', '-=1');
    });
    $('.jcarousel-next3').click(function() {
    $('.jcarousel3').jcarousel('scroll', '+=1');
    });


    $('.grid').masonry({
      // options
      itemSelector: '.grid-item',
      columnWidth: 200
    });





        $('.search-form').on('submit', function() {
        var enteredQuery = $('#entered-query').val();
        $('.discover__boxes').hide();
        $.ajax({
            url: "http://api.pixplorer.co.uk/image?word="+ enteredQuery +"&amount=7&size=tb",
            // dataType: 'jsonp',
            // method : 'GET',
            success: function(data, textStatus) {
                console.log('Success: ', data);
                // var ul = document.createElement('ul');
                // var ul = document.createElement('ul');
                var divBox = document.createElement('div');
                divBox.classList.add('out-results__wrapper');
                $.each(data.images, function(i) {
                    // var li = document.createElement('li');
                    // var box = document.createElement('div');
                    // var divBox = document.createElement('div');
                    // li.classList.add('output-items');
                    // li.innerHTML = 'Result №'+ (i+1) + ': ' +'<a href="'+data.images[i].imageurl+'" title="'+data.images[i].imageurl+'" target="_blank">'+data.images[i].word+ '</br>' +'<img class="image-output" src="'+data.images[i].imageurl+'">';
                    // li.innerHTML = '<img class="image-output" src="'+data.images[i].imageurl+'">';
                    // li.innerHTML = '<div class="box-image-output' + i + '"><img class="image-output' + i + '" src="'+data.images[i].imageurl+'"></div>';
                     var outResultsBox = document.createElement('div');
                     outResultsBox.classList.add('out-results__box'+ i);

                     outResultsBox.innerHTML = '<img class="out-results__image' + i + '" src="'+data.images[i].imageurl+'">';
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



});