

	/*  getHighestElement
	*=================================================================*/		
	
	(function( $ ) {
	 
			$.fn.getHighestElement = function() {
				
					var HighestHeight = -1;
					
					this.each( function() {
															
						var $this = $(this);
						
						if( $this.height() > HighestHeight ) { HighestHeight = 	$this.height(); }
															
					});
					
					this.css('min-height',HighestHeight);

				return this;
	 
			};
	 
	}( jQuery ));


	/*  getURLParameter
	*=================================================================*/		
	
	function getURLParameter(name) {
	
		return decodeURI(
				(RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
		);
	
	}


	/*  Avoid `console` errors in browsers that lack a console.
	*=================================================================*/		

	(function() {
		
			var method;
			var noop = function () {};
			var methods = [
					'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
					'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
					'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
					'timeStamp', 'trace', 'warn'
			];
			var length = methods.length;
			var console = (window.console = window.console || {});
	
			while (length--) {
					method = methods[length];
	
					// Only stub undefined methods.
					if (!console[method]) {
							console[method] = noop;
					}
			}
			
	}());
	
	
	/* Change console.log message color
	   URL http://stackoverflow.com/questions/9332979/change-console-log-message-color
	*=================================================================*/	
	
	function log(msg, color){
			color = color || "black";
			bgc = "White";
			switch (color) {
					case "success":  color = "Green";      bgc = "LimeGreen";       break;
					case "info":     color = "blue";       bgc = "white";       break;
					case "error":    color = "Red";        bgc = "Black";           break;
					case "start":    color = "OliveDrab";  bgc = "PaleGreen";       break;
					case "warning":  color = "Tomato";     bgc = "Black";           break;
					case "end":      color = "Orchid";     bgc = "MediumVioletRed"; break;
					default: color = color;
			}
	
			if (typeof msg == "object"){
					console.log(msg);
			} else if (typeof color == "object"){
					console.log("%c" + msg, "color: PowderBlue;font-weight:bold; background-color: RoyalBlue;");
					console.log(color);
			} else {
					console.log("%c" + msg, "color:" + color + ";font-weight:bold; background-color: " + bgc + ";");
			}
	}	
	
	
	/* Track Outbound Links in Google Analytics
	   URL http://www.sitepoint.com/track-outbound-links-google-analytics/
	*=================================================================*/	

	(function($) {
		
		// current page host
		var baseURI = window.location.host;
	 
		// click event on body
		$("body").on("click", function(e) {
			
			// abandon if link already aborted or analytics is not available
			if (e.isDefaultPrevented() || typeof ga !== "function") return;
	 
			// abandon if no active link or link within domain
			var link = $(e.target).closest("a");
			
			if (link.length != 1 || baseURI == link[0].host) return;
	 
			// cancel event and record outbound link
			e.preventDefault();
			var href = link[0].href;
			ga('send', {
				'hitType': 'event',
				'eventCategory': 'outbound',
				'eventAction': 'link',
				'eventLabel': href,
				'hitCallback': loadPage
			});
	 
			// redirect after one second if recording takes too long
			setTimeout(loadPage, 1000);
	 
			// redirect to outbound page
			function loadPage() {
				document.location = href;
			}
	 
		});		
		
	})(jQuery);

	
	
	/* Debounced Resize() jQuery Plugin
	   URL http://www.paulirish.com/2009/throttled-smartresize-jquery-event-handler/
	*=================================================================*/	

	(function($,sr){
	
		// debouncing function from John Hann
		// http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
		var debounce = function (func, threshold, execAsap) {
				var timeout;
	
				return function debounced () {
						var obj = this, args = arguments;
						function delayed () {
								if (!execAsap)
										func.apply(obj, args);
								timeout = null;
						};
	
						if (timeout)
								clearTimeout(timeout);
						else if (execAsap)
								func.apply(obj, args);
	
						timeout = setTimeout(delayed, threshold || 100);
				};
		}
		// smartresize 
		jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };
	
	})(jQuery,'smartresize');



