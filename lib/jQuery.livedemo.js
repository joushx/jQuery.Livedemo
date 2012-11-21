/* 
* Copyright (c) 2012 Johannes Mittendorfer (http://jmittendorfer.hostingsociety.com)
* Licensed under the MIT License (LICENSE.txt).
*
* Version: 0.1
*/
(function($) {
	$.fn.livedemo = function(options){

		// plugin settings
		var settings = $.extend({
			output: null
		}, options);
		
		// for chainability
		return this.each(function(){
			
			// keydown event handler
			$(this).change(function(){
				var code = $(this).text();
				$(settings.output).html(code);
			});
		});
	};
})( jQuery );