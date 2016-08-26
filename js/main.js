'use strict';

// function navColorChange() {
//   var navbar = $('nav');
//   var innerHeight = $('#overlayView').innerHeight();
//   var offset = $('#overlayView').offset().top;
//   $(window).scroll(function () {
//     // if ($(window).scrollTop() > innerHeight - offset) {
//     //   navbar.wrap('  <div class="navbar-fixed"> </div>');
//     //   navbar.addClass('green darken-1');
//     // } else {
//     //   navbar.removeClass('green darken-1');
//     // }
//   });
// }
//
// function navWrapChange() {
//   var navbar = $('nav');
//   $(window).scroll(function () {
//
//     //console.log(!navbar.parent().is(".overlay"));
//     // if (navbar.parent().is("div")) {
//     //   navbar.unwrap();
//     // }
//   });
// }
//
// var options = [
//   {
//     selector: 'nav', offset: 200, callback: navWrapChange()
//   },
//   {
//     selector: 'nav', offset: 200, callback: navColorChange()
//   }
// ];
// Materialize.scrollFire(options);


$('.button-collapse').sideNav({
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
  }
);

jQuery(document).ready(function ($) {
  var timelineBlocks = $('.cd-timeline-block'),
    offset = 0.8;

  //hide timeline blocks which are outside the viewport
  hideBlocks(timelineBlocks, offset);

  //on scolling, show/animate timeline blocks when enter the viewport
  $(window).on('scroll', function () {
    (!window.requestAnimationFrame)
      ? setTimeout(function () {
      showBlocks(timelineBlocks, offset);
    }, 100)
      : window.requestAnimationFrame(function () {
      showBlocks(timelineBlocks, offset);
    });
  });

  function hideBlocks(blocks, offset) {
    blocks.each(function () {
      ( $(this).offset().top > $(window).scrollTop() + $(window).height() * offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
    });
  }

  function showBlocks(blocks, offset) {
    blocks.each(function () {
      ( $(this).offset().top <= $(window).scrollTop() + $(window).height() * offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
    });
  }
});