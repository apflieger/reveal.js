Reveal.addEventListener('ready', function(ready) {
	var update = function(index) {
		$('.menu>div').removeClass('current');
		var length = $('.menu>div').length;
		var first = $('.first').index();
		var last = $('.last').index();
		if (index >= first && index <= last){
			$($('.menu>div')[length - index + 2]).addClass('current');
			$('.menu').addClass('expand');
			$('.menu').removeClass('collapse');
			$('.reveal').addClass('collapse');
			$('.reveal').removeClass('expand');
		}
		else {
			$('.menu').addClass('collapse');
			$('.menu').removeClass('expand');
			$('.reveal').addClass('expand');
			$('.reveal').removeClass('collapse');
		}
	};

	update(Reveal.getIndices().h);
	Reveal.addEventListener('slidechanged', function(event) {
		// event.previousSlide, event.currentSlide, event.indexh, event.indexv
		update(event.indexh);
	});

});