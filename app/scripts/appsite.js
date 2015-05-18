	
	/* appSite
	*=================================================================*/	
	"use strict";

	var appSite = appSite || {};
	
	appSite = function()
	{
		
		/* ================================================================= 
			Proprety
		*=================================================================*/				
		
		/* Settings
		*=================================================*/
		
		var settings;	
		
		var defaults = {
			MAX_WIDTH_SMARTPHONE : 768,
			MAX_WIDTH_TABLET     : 1024,
			debug                : false,
			lang                 : 'fr'
		};		
		
		/* Private proprety
		*=================================================*/
		
		// CSS selector
		var $window         = $(window);
		var $body           = $('body');	

		// proprety
		var width       = 0;
		var height      = 0;											
		var orientation = null;
		var viewport    = null;		


		/* ================================================================= 
			Event
		*=================================================================*/			
		
		$(window).smartresize(function(){
																		
			update();

		});
		
		
		/* ================================================================= 
			Function
		*=================================================================*/				
		
		/* GET
		*=================================================================*/					
		
		/* getDevice */						
		var getDevice = function() { return viewport; };		
		
		/* getWidth */						
		var getWidth = function() { return width; }	;	
		
		/* getHeight */						
		var getHeight = function() { return height; }	;	
		
		/* getOrientation */						
		var getOrientation = function() { return orientation; };						
		
		
		/* updateDevice
		*=================================================================*/					
		var updateDevice = function() {
			
			if( width <= settings.MAX_WIDTH_SMARTPHONE ) { viewport = 'phone'; }
			else if( width >= settings.MAX_WIDTH_SMARTPHONE && width <= settings.MAX_WIDTH_TABLET ) { viewport = 'tablet'; }					
			else { viewport = 'desktop'; }
						
		};
		
		
		/* updateOrientation
		*=================================================================*/					
		var updateOrientation = function() {
			
			/* TO DO */
						
		};			
		
		
		/* updateDimensions
		*=================================================================*/					
		var updateDimensions = function() {
			
			width  = $window.width();
			height = $window.height();		
						
		};				
		
		
		/* init
		*=================================================================*/				
		var init = function(options)
		{
			
			settings = $.extend( {}, defaults, options );	
			
			if( settings.debug === true ) {
				
				log(" ===== settings of appSite ==== ", 'start');	
				log("defaults " + JSON.stringify(defaults), 'info' );
				log("options "  + JSON.stringify(options), 'info' );
				log("settings " + JSON.stringify(settings), 'info' );
				log(" ===== settings of appSite ==== ", 'end');
			
			}
			
			update();
			
		};	
		
		
		/* update
		*=================================================================*/			
		var update = function() {
			
			updateDimensions();
			updateDevice();
			updateOrientation();
			
			if( settings.debug === true ) {
			
				log(" ===== Info init of appSite ==== ", 'start');	
				log(" w " + 	getWidth() , 'info');
				log(" h " +  getHeight() , 'info');
				log(" viewport " + 	getDevice() , 'info');
				log(" orientation " + 	getOrientation() , 'info');		
				log(" ===== END ==== ", 'end');
			
			}			
			
		};
		

		// This is the part that separates the private and public stuff. Anything
		// in this object becomes public. Anything NOT in this object becomes
		// private.
		var oPublic =
		{
			init           : init,
			update         : update,
			getWidth       : getWidth,
			getHeight      : getHeight,					
			getDevice      : getDevice,
			getOrientation : getOrientation,
			
		};
		
		return oPublic;
		
	}();
			

