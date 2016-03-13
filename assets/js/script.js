/* 
	@info: Landing Page - ValeMesada
	@date: 10/03/2016
	@author: Bruno Monteiro | brunomonteiro3@gmail.com 
*/

(function ($) {
	// IMPORTANT: 
	// Since it's only a demo page
	// I'll disable all <a href> links to avoid bad experience 

	$('a').click(function(e){
		e.preventDefault();
	});

	// Fixed header after 100 pixels
	$(document).scroll(function() {
		if ($(document).scrollTop() >= 100) {
			$('body').addClass('fixed-header');
		} else {
			$('body').removeClass('fixed-header');
		}
	});

	// Mobile only button to show menu
	$('.show-menu').click(function(){
		$('body').toggleClass('show-menu');
	});

	// Slideshow > Settings
	var owlOptions = {
		items: 1,
		dots: true,
		nav: true,
		loop: true,
		autoHeight: true,
		onResized: newHeight
	} 

	// Slideshow > Applying the settings
	$('.area-slideshow').owlCarousel(owlOptions);

	// Slideshow > Recalculate height when window is resized
	function owlResize($owl) {
	    $owl.trigger('destroy.owl.carousel');
	    $owl.html($owl.find('.owl-stage-outer').html()).removeClass('owl-loaded');
	    $owl.owlCarousel(owlOptions);
	}

	// Slideshow > Rebuilding slideshow
	function newHeight(event){
		var owlElement = $('.area-slideshow').owlCarousel();
		owlResize(owlElement);
	};

	// Image preview on card mock-up
	function readURL(input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();
			
			reader.onload = function (e) {
				$('.card-details__fake-img').attr('src', e.target.result);
			}
			
			reader.readAsDataURL(input.files[0]);
		}
	}

	$('.card-details__fake-input').change(function(){
		readURL(this);
	});

	// Adding the click event to the CTA below the mock-up for UX purposes
	$('.card-options__cta').click(function(){
		$('.card-details__fake-input').trigger('click');
	});
})(jQuery);