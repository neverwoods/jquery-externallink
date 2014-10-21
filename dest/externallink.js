/*
 * External link 1.1 (2014-07-16)
 *
 * Copyright (c) 2007-2014 Neverwoods Internet Technology (http://www.neverwoods.com/)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * Dependencies
 *  - jQuery >= 1.7
 *
 * @author Felix Langfeldt <felix@neverwoods.com>
 * @author Robin van Baalen <robin@neverwoods.com>
 * @link http://www.neverwoods.com/
 * 
 * @version 1.1
 *
 * CHANGELOG
 * 1.1 		Introduced event namespace '.externallink'. Using this namespace, one can easily 
 * 			unset all externallink-related events on an object using $('a').off('.externallink');
 *
 * 1.0 		First release
 */

(function($){
 	$.fn.externalLink = function() {
		$(this).each(function(){
			if (this.href && this.rel == "external") {
				$(this)
					.on("click.externallink", function (event) {
						return launchWindow(this, event);
					})
					.on("keypress.externallink", function (event) {
						return launchWindow(this, event);
					});
					
				var objCurrent = this.firstChild;
				if (objCurrent) {
					if (objCurrent.nodeType == 3) { // Text node
						this.title = (this.title != "") ? this.title + " (opens in a new window)" : objCurrent.data + " opens in a new window";
					} else if (objCurrent.alt != undefined) { // Current element is an image
						objReplacement = objCurrent;
						objReplacement.alt = (objCurrent.alt != "") ? objCurrent.alt + " (opens in a new window)" : "Opens in a new window";
						try {
							this.replaceChild(objReplacement, objCurrent);
						} catch(e){}
					}
				}
			}
		});
		return this;
	};
	function launchWindow(objAnchor, objEvent) {
		var iKeyCode;

		if (objEvent && objEvent.type == "keypress") {
			if (objEvent.keyCode) {
				iKeyCode = objEvent.keyCode;
			} else if (objEvent.which) {
				iKeyCode = objEvent.which;
			}

			if (iKeyCode != 13 && iKeyCode != 32) {
				return true;
			}
		}

		return !window.open(objAnchor);
	}

})(jQuery);

jQuery(function($) {
	$('a').externalLink();
});