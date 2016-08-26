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

$(document).ready(function(){
  $('.scrollspy').scrollSpy();
});