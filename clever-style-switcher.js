/*============================================================================*\

	JavaScript for Clever Style-Switcher
	-----------------------------------------------------------------------
	© 2015 & 2016 by Carroket, Inc.
	http://www.carroket.com/
	-----------------------------------------------------------------------
	Made by Brian Sexton.
	http://www.briansexton.com/
	-----------------------------------------------------------------------
	MIT License

\*============================================================================*/

(function(document, options) {

	var cleverStyleSwitcher = new CleverStyleSwitcher();

	function CleverStyleSwitcher() {

		// TO DO: Consider whether any options should be addressed here.
	}

	CleverStyleSwitcher.prototype.setStyle = function(title) {

		// Select all style sheet elements with "title" attributes. Note that
		// querySelectorAll returns a NodeList, NOT an Array.

		var styleSheets = document.head.querySelectorAll('link[rel*="stylesheet"][title]');

		// Work through that NodeList.

		[].forEach.call(styleSheets, function(element) {

			// Disable all style sheets, INCLUDING the requested style sheet
			// because some browsers, including at least Chrome and Safari, do
			// not actually seem to enable alternate style sheets with disabled
			// properties set to false. Firefox works fine either way.

			if (element.title) {

				element.disabled = true;

				// Enable the requested style sheet.

				if (element.title === title) {

					element.disabled = false;
				}
			}
		});
	};

	// If a namespace was specified, attach cleverStyleSwitcher to it.

	if (options instanceof Object && options.namespace instanceof Object) {

		options.namespace.cleverStyleSwitcher = cleverStyleSwitcher;
	}

})(window.document);