(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });


  window.sr = ScrollReveal();
  sr.reveal('.cbp-ig-grid li');
  sr.reveal('.img-banderines');
  sr.reveal('.logo-page');

  // // Collapse Navbar
  // var hideLogo = function() {
  //   if ($("#mainNav").offset().top > 200) {
  //     $("#logo").removeClass("hide-logo");
  //   } else {
  //     $("#logo").addClass("hide-logo");
  //   }
  // };
  //
  // hideLogo();
  //
  // $(window).scroll(hideLogo);

})(jQuery); // End of use strict

$(document).ready(function() {

  // Fakes the loading setting a timeout
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 2500);

});
