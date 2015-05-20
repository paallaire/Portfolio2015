
	/* updateNav
		 Manage navbar
	*=================================================================*/

	function updateNav() {

		var mode            = appSite.getDevice();
		var $wrapperNavbar = $('#l-header');
		var $window         = $(window);

		if( mode === 'desktop' ) {

			if( $window.scrollTop() < 30 ) {

				$wrapperNavbar
				.removeClass('is-bg')
				.addClass('is-top');

			}
			else{

				$wrapperNavbar
				.removeClass('is-top')
				.addClass('is-bg');

			}

		}
		else {

			$wrapperNavbar
			.removeClass('is-top')
			.addClass('is-bg');

		}

	}
