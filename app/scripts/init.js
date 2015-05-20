
(function($) {

	"use strict";

	/* ================================================================
		Inits
	*=================================================================*/

	/* appSite
	*=======================================*/

	appSite.init({
    debug: true
	});


	/* Boostrap
	*=======================================*/

	$('body').scrollspy({ target: '#navbar' });


	/* WOW
	*=======================================*/

	$(".wow").each(function() {
		var wowHeight = $(this).height() / 5;
		$(this).attr("data-wow-offset", wowHeight);
	});

	var wow = new WOW(
		{
			boxClass     : 'wow',
			animateClass : 'animated',
			offset       : 0,
			mobile       : false,
			live         : true
		}
	);
	wow.init();


	/* ADD transition CSS after loading + 1ms
	*=======================================*/

	setTimeout(function(){

		var $wrapper_navbar = $('#l-header');
		$wrapper_navbar.addClass('is-transition');

	}, 1);


	/* Nav responsive
	*=======================================*/
	var $navbar = $('#navbar');

	if( $navbar.length > 0 ) {

		$navbar.on('click','a', function(e){

			e.preventDefault();

			var $element = $(this);

			$('.navbar-collapse.in').collapse('hide');
			$('navbar-mobile').removeClass('collapsed');

			if( $element.length > 0 ) {
				$('html,body').animate({ scrollTop: $(this.hash).offset().top}, 500);
			}

		});

	}


	/* Main Nav State
	*=======================================*/

	updateNav();

	$(window).on('scroll', function() { updateNav();});

	$(window).smartresize(function(){ updateNav(); });


})(jQuery);
