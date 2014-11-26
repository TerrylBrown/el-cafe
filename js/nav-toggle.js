/*nav-toggle.js*/
$(function() {

	$siteNav = $("#site-nav");

	$(".toggle-nav").click(function(){
		if($siteNav.is(":visible")) {
			$siteNav.slideUp();
		} else {
			$siteNav.slideDown();
		}
		event.preventDefault();
	});

	var $window = $(window);
	var windowSize = $window.width();

	

});