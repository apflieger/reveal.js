Reveal.addEventListener('ready', function(ready) {
	var update = function(index) {
		console.log(index - 1 > 0);
		$('.menu>div').removeClass('current');
		var length = $('.menu>div').length;
		if (index - 2 > 0){
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