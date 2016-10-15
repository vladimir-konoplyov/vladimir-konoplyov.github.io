$(function() {

  // Animation for Pixelfresh game page (1-st slide)
function pixelfreshAnimate() {
  $(".pixelfresh-logo__image").css('transition', '0.3s linear').css('transform', 'rotate(-360deg)');
};

// Animation for Out of brake grand pris game page (2-nd slide)
function oobpgAnimate() {
  $('.oobgp-logo__text-box').css('visibility', 'visible');
  $(".oobgp-logo__text-first-line").addClass('animated bounceInLeft').css('animation-delay', '0.5s');
  $(".oobgp-logo__text-second-line").addClass('animated bounceInRight').css('animation-delay', '1s');
  $(".oobgp-logo__text-third-line").addClass('animated bounceInRight').css('animation-delay', '1s');
};

// Animation for Out of brake grand pris game page (3-rd slide)
function oobAnimate() {
  $('.oob-logo__text-box ').css('visibility', 'visible');
  $(".oob-logo__text-first-line").addClass('animated bounceInLeft').css('animation-delay', '0.5s');
  $(".oob-logo__text-second-line").addClass('animated bounceInRight').css('animation-delay', '1s');
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