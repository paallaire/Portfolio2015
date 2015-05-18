
	/* updateNav
		 Manage navbar
	*=================================================================*/	
	
	function updateNav() {
		
		var mode            = appSite.getDevice();
		var $wrapper_navbar = $('#l-header');		
		var $window         = $(window);
		
		if( mode == 'desktop' ) {
			
			if( $window.scrollTop() < 30 ) { 
			
				$wrapper_navbar
				.removeClass('bg')
				.addClass('top'); 			
			
			}
			else{ 
			
				$wrapper_navbar
				.removeClass('top')
				.addClass('bg'); 
				
			}
		
		}
		else {

			$wrapper_navbar
			.removeClass('top')
			.addClass('bg'); 	

		}	
		
	}
	

