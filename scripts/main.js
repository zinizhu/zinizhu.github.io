$(document).ready(function() {

	/* FIXED NAV BAR */
	var $header = $('header');
    var $sticky = $header.before($header.clone().addClass("sticky"));

    $(window).on("scroll", function(){
      var scrollFromTop = $(window).scrollTop();
      $("body").toggleClass("scroll", (scrollFromTop > 30));
    });


    //RESPONSIVE MENU START

      var body = $('body');
      var menuTrigger = $('.js_menu_trigger');
      var mainOverlay = $('.js_main_overlay');

      menuTrigger.on('click', function(){
        body.addClass('menu-is-active');
      });

      mainOverlay.on('click', function(){
        body.removeClass('menu-is-active');
      });

      $('.menu li a').on('click', function(){
          $('body').removeClass("menu-is-active");
      });

});