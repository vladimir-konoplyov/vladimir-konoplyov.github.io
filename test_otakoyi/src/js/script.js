$(function() {

// Перший слайдер
function sliderJcarousel() {
    $('.jcarousel').jcarousel();
    $('.jcarousel-prev').click(function() {
    $('.jcarousel').jcarousel('scroll', '-=1');
    });
    $('.jcarousel-next').click(function() {
        $('.jcarousel').jcarousel('scroll', '+=1');
    });
    $('.jcarousel-pagination').on('jcarouselpagination:active', 'a', function() {
      $(this).addClass('active');

        $('.jcarousel-prev').addClass('prev1');
        $('.jcarousel-next').addClass('next1');
    })
      .on('jcarouselpagination:inactive', 'a', function() {
        $(this).removeClass('active');
      })
      .jcarouselPagination();
}

// Другий слайдер
function sliderJcarousel2() {
    $('.jcarousel2').jcarousel();
    $('.jcarousel2-prev').click(function() {
    $('.jcarousel2').jcarousel('scroll', '-=1');
    });
    $('.jcarousel2-next').click(function() {
        $('.jcarousel2').jcarousel('scroll', '+=1');
    });
    $('.jcarousel2-pagination').on('jcarouselpagination2:active', 'a', function() {
      $(this).addClass('active');
        $('.jcarousel2-prev').addClass('prev2');
        $('.jcarousel2-next').addClass('next2');
    })
      .on('jcarouselpagination2:inactive', 'a', function() {
        $(this).removeClass('active');
      })
      .jcarouselPagination2();
}

//Функція для розгортання головного меню при натисканні на іконку
  function showMenuMain() {
    var count = 0;
    $('.small-menu').click(function() {
      console.log('COUNT = ', count);
      $('.menu').slideDown('slow');
      count++;
      if (count % 2 !== 0) {
        $('.menu').css('display', 'block').css('z-index', '100');
      } else {
        $('.menu').slideUp('slow');
      }
      $(document).keydown(function(e) {
      if(e.keyCode === 27) {
        $('.menu').slideUp('slow');
        count = 0;
      }
    });
    });   
  }

//Функція для розгортання бокового меню при натисканні на іконку
  function showMenuSide() {
    var count = 0;
    $('.side-menu-hide').click(function() {
      $('.side-box').fadeIn('slow');
      count++;
      console.log('COUNT=', count);
      if (count % 2 !== 0) {
        $('.side-box').css('display', 'block').css('z-index', '100');
      } else {
        $('.side-box').fadeOut('slow');
      }
      $(document).keydown(function(e) {
      if(e.keyCode === 27) {
        $('.side-box').fadeOut('slow');
        count = 0;
      }
    });
    });   
  }

  //Функція для розгортання меню футера при натисканні на категорію
  function showMenuFooter() {
    var count1 = 0, count2 = 0, count3 = 0, count4 = 0, count5 = 0;
    
     // if ($(window).width() < '750') {

    $('.footer-menu-link1').click(function(e) {
      e.preventDefault();
      if ($(window).width() < '970') {
        $('.footer-menu1').fadeIn('slow');
        count1++;
        if (count1 % 2 !== 0) {
        $('.footer-menu1').css('display', 'block');
        } else {
         $('.footer-menu1').fadeOut('slow');
        }
      }
    }); 

    $('.footer-menu-link2').click(function(e) {
      e.preventDefault();
      if ($(window).width() < '970') {
        $('.footer-menu2').fadeIn('slow');
        count2++;
        if (count2 % 2 !== 0) {
        $('.footer-menu2').css('display', 'block');
        } else {
         $('.footer-menu2').fadeOut('slow');
        }
      }
    }); 

    $('.footer-menu-link3').click(function(e) {
      e.preventDefault();
      if ($(window).width() < '970') {
        $('.footer-menu3').fadeIn('slow');
        count3++;
        if (count3 % 2 !== 0) {
        $('.footer-menu3').css('display', 'block');
        } else {
         $('.footer-menu3').fadeOut('slow');
        }
      }
    }); 

    $('.footer-menu-link4').click(function(e) {
      e.preventDefault();
      if ($(window).width() < '970') {
        $('.footer-menu4').fadeIn('slow');
        count4++;
        if (count4 % 2 !== 0) {
        $('.footer-menu4').css('display', 'block');
        } else {
         $('.footer-menu4').fadeOut('slow');
        }
      }
    }); 

    $('.footer-menu-link5').click(function(e) {
      e.preventDefault();
      if ($(window).width() < '970') {
        $('.footer-menu5').fadeIn('slow');
        count5++;
        if (count5 % 2 !== 0) {
        $('.footer-menu5').css('display', 'block');
        } else {
         $('.footer-menu5').fadeOut('slow');
        }
      }
    }); 
  // }
  }

// Функція прокрутки екрану догори при натисканні на кнопку (зі стрілкою вверх)
  function scrollUp() {
    $('#scrollup img').mouseover( function(){
    $(this).animate({opacity: 0.65},100);
  }).mouseout( function(){
    $(this).animate({opacity: 1},100);
  }).click( function(){
    window.scroll(0 ,0); 
    return false;
  });

  $(window).scroll(function(){
    if ($(document).scrollTop() > 0 ) {
      $('#scrollup').fadeIn('fast');
    } else {
      $('#scrollup').fadeOut('fast');
    }
  });
  }

// Функція перевірки розміру екрану (вікна) та відображення меню після згортання
function windowSize(){
    if ($(window).width() > '969') {
    $('.menu').css('display', 'block');
    $('.side-box').css('display', 'block');
  } else if ($(window).width() <= '970') {
    $('.menu').css('display', 'none');
    $('.side-box').css('display', 'none');
  }

    if ($(window).width() > '969') {
    $('.footer-menu1').css('display', 'block');
    $('.footer-menu2').css('display', 'block');
    $('.footer-menu3').css('display', 'block');
    $('.footer-menu4').css('display', 'block');
    $('.footer-menu5').css('display', 'block');
  }
    if ($(window).width() <= '970') {
    $('.footer-menu1').css('display', 'none');
    $('.footer-menu2').css('display', 'none');
    $('.footer-menu3').css('display', 'none');
    $('.footer-menu4').css('display', 'none');
    $('.footer-menu5').css('display', 'none');
  } 
}

// Виклик функцій
$(window).load(windowSize); 
$(window).resize(windowSize);
sliderJcarousel();
sliderJcarousel2();
showMenuMain();
showMenuSide();
showMenuFooter();
scrollUp();

});




