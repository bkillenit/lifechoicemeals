$(document).ready(function(){
              
	$('#slider-code').tinycarousel({
		controls: true,
		pager: true,
		interval: true
	});    

	var url = window.location.pathname;

	if ( url.indexOf("products") !== -1 ) {
		//used to give the home link the active class
		$('#products-link').parent().addClass('active')
	}
	else if ( url.indexOf("about") !== -1 ) {
		//used to give the home link the active class
		$('#about-link').parent().addClass('active')
	}
	else if ( url.indexOf("contact") !== -1 ) {
		//used to give the home link the active class
		$('#contact-link').parent().addClass('active')
	}
	else {
		//used to give the home link the active class
		$('#home-link').parent().addClass('active')
	}

}); 