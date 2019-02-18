(function($) {
	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav2',
		offset: 75
	});

	// Collapse Navbar
	var navbarCollapse = function() {
		if ($("#mainNav2").offset().top > 100) {
			$("#mainNav2").addClass("navbar-scrolled");
		} else {
			$("#mainNav2").removeClass("navbar-scrolled");
		}
	};

	// Collapse now if page is not at top
	navbarCollapse();
	
	// Collapse the navbar when page is scrolled
	$(window).scroll(navbarCollapse);
})(jQuery); // End of use strict
