$(function() {

  // Animation for Pixelfresh game page (1-st page)
function pixelfreshAnimate() {
  $(".pixelfresh-logo").addClass('animated zoomIn snake');
  $(".pixelfresh-image").addClass('animated bounceInUp shake');
  $(".pixelfresh-first-line").addClass('animated bounceInLeft').css('animation-delay', '.7s');
  $(".pixelfresh-second-line").addClass('animated bounceInRight').css('animation-delay', '.7s');
  $(".pixelfresh-logo__image").css('transition', '3s linear').css('transform', 'rotate(360deg)');
};

// Animation for Out of brake grand pris game page (2-nd page)
function oobpgAnimate() {
  $('.oobgp-logo').css('visibility', 'visible');
  $('.oobgp-text-box').css('visibility', 'visible');
  $(".oobgp-logo__image1").addClass('animated bounceInDown').css('animation-delay', '0.2s');;
  $(".oobgp-logo__image2").addClass('animated bounceInUp').css('animation-delay', '0.8s');
  $(".oobgp-logo__text-first-line").addClass('animated bounceInRight').css('animation-delay', '1.5s');
  $(".oobgp-logo__text-second-line").addClass('animated bounceInRight').css('animation-delay', '2s');
  $(".oobgp-logo__text-third-line").addClass('animated bounceInRight').css('animation-delay', '2.5s');
  $(".oobgp-text__first-line").addClass('animated fadeInLeft').css('animation-delay', '3s');
  $(".oobgp-text__second-line").addClass('animated fadeInLeft').css('animation-delay', '3.5s');
  $(".oobgp-text__third-line").addClass('animated fadeInLeft').css('animation-delay', '4s');
};

// Animation for Out of brake grand pris game page (3-rd page)
function oobAnimate() {
  $('.oob-logo').css('visibility', 'visible');
  $('.oob-text-box').css('visibility', 'visible');
  $(".oob-logo__image").addClass('animated rollIn').css('animation-delay', '0.2s');
  $(".oob-logo__text-first-line").addClass('animated bounceInRight').css('animation-delay', '0.8s');
  $(".oob-logo__text-second-line").addClass('animated bounceInLeft').css('animation-delay', '1.3s');
  $(".oob-text__first-line").addClass('animated lightSpeedIn').css('animation-delay', '1.8s');
  $(".oob-text__second-line").addClass('animated lightSpeedIn').css('animation-delay', '2.3s');
};


// variables
var $header_top = $('.header-top');
var $nav = $('nav');

// toggle menu 
$header_top.find('a').on('click', function() {
  $(this).parent().toggleClass('open-menu');
});

// fullpage customization
$('#fullpage').fullpage({
  sectionsColor: ['#1fd1d7', '#ee6085', '#1f9dd7'],
  sectionSelector: '.vertical-scrolling',
  slideSelector: '.horizontal-scrolling',
  navigation: true,
  slidesNavigation: true,
  controlArrows: false,
  anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection'],
  menu: '#menu',

  afterLoad: function(anchorLink, index) {
    $header_top.css('background', 'rgba(0, 47, 77, .3)');
    $nav.css('background', 'rgba(0, 47, 77, .25)');

    if (index == 1) {
      pixelfreshAnimate();
    }


    if (index == 2) {
      oobpgAnimate();
    }

    if (index == 3) {
      oobAnimate();
    }

    if (index == 5) {
        $('#fp-nav').hide();
      }
  },

  onLeave: function(index, nextIndex, direction) {
    if(index == 5) {
      $('#fp-nav').show();
    }
  },

  afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
    if(anchorLink == 'fifthSection' && slideIndex == 1) {
      $.fn.fullpage.setAllowScrolling(false, 'up');
      $header_top.css('background', 'transparent');
      $nav.css('background', 'transparent');
      $(this).css('background', '#374140');
      $(this).find('h2').css('color', 'white');
      $(this).find('h3').css('color', 'white');
      $(this).find('p').css(
        {
          'color': '#DC3522',
          'opacity': 1,
          'transform': 'translateY(0)'
        }
      );
    }
  },

  onSlideLeave: function( anchorLink, index, slideIndex, direction) {
    if(anchorLink == 'fifthSection' && slideIndex == 1) {
      $.fn.fullpage.setAllowScrolling(true, 'up');
      $header_top.css('background', 'rgba(0, 47, 77, .3)');
      $nav.css('background', 'rgba(0, 47, 77, .25)');
    }
  } 
});

});




