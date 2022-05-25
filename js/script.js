$(document).ready(function () {

	// header Area
	const header = $('.header');
	const nav = header.find('.nav');
	const header_class = 'header_open';

	nav.mouseenter(function () {
		header.addClass(header_class);
	});
	nav.mouseleave(function () {
		header.removeClass(header_class);
	});

	// move to business
	$('.move-category').click(function (e) {
		// event return
		e.preventDefault();
		let tg_y = $('.category').offset().top;
		$('html, body').animate({
			scrollTop: tg_y
		});
	});

	// modal close
	$('.modal').click(function () {
		$(this).fadeOut();
	});

});