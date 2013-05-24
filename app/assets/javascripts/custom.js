$(document).ready(function(){
              
	$('#slider-code').tinycarousel({
		controls: true,
		pager: true,
		interval: true
	});    

	var url = window.location.pathname;

	//if elseif block used to assign active class to the correct navbar link for its corresponding page
	if ( url.indexOf("products") !== -1 ) {
		$('#products-link').parent().addClass('active');
	}
	else if ( url.indexOf("about") !== -1 ) {
		$('#about-link').parent().addClass('active');
	}
	else if ( url.indexOf("contact") !== -1 ) {
		$('#contact-link').parent().addClass('active');
	}
	else {
		$('#home-link').parent().addClass('active');
	}

}); 