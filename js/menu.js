Reveal.addEventListener('ready', function(ready) {
	var update = function(index) {
		$('.menu>div').removeClass('current');
		var length = $('.menu>div').length;
		if (index - 2 > 0)
			$($('.menu>div')[length - index + 2]).addClass('current');
	};

	update(Reveal.getIndices().h);
	Reveal.addEventListener('slidechanged', function(event) {
		// event.previousSlide, event.currentSlide, event.indexh, event.indexv
		update(event.indexh);
	});

});