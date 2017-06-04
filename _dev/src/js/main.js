'use strict';

$(function () {

  // Инициализация скрипта
  Smooth_Scroll.init();
  
  // owl-carousel init
  $(".owl-carousel[data-type='main']").owlCarousel({
    items: 1,
    loop: true,
    smartSpeed: 1000,
    autoHeight: true,
    nav: true,
    dots: true,
    navText: [
      "<span class='icon icon-arrow_white owl-nav_arrow'></span>",
      "<span class='icon icon-arrow_white owl-nav_arrow'></span>"
    ]
  });

  // owl-carousel init
  $(".owl-carousel[data-type='clients']").owlCarousel({
  	items: 6,
  	loop: true,
  	smartSpeed: 1000,
  	autoHeight: true,
  	nav: true,
  	navText: [
  		"<span class='icon icon-arrow_grey owl-nav_arrow'></span>",
  		"<span class='icon icon-arrow_grey owl-nav_arrow'></span>"
  	]
  });

  //
});


