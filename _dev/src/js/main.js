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

  // owl-carousel init
  $(".owl-carousel[data-type='colors']").owlCarousel({
  	items: 5,
  	loop: true,
  	smartSpeed: 1000,
  	autoHeight: true,
  	nav: true,
  	navText: [
  		"<span class='icon icon-arrow_grey owl-nav_arrow'></span>",
  		"<span class='icon icon-arrow_grey owl-nav_arrow'></span>"
  	]
  });

  // fancybox gallery
  $("[data-fancybox='patterns']").fancybox();
  $("[data-fancybox='group']").fancybox();

	//open form
	$(".button[rel='open:form']").click(function (e) {
		e.preventDefault();

		var $modal = $("#modal_form");

		$modal.on($.modal.BLOCK, function(e) {
			$('body').css({
				'overflow-y': 'scroll'
			})
		});

		$modal.modal({
			fadeDuration: 500
		});
	})
	
});


