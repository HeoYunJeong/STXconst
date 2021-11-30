$(document).ready(function () {

	// header Area
	const header = $('.header');
	const gnb = header.find('.gnb');
	const header_class = 'header_open';

	gnb.mouseenter(function () {
		header.addClass(header_class);
	});
	gnb.mouseleave(function () {
		header.removeClass(header_class);
	});

	// move to business
	$('.move-cate').click(function (e) {
		// event return
		e.preventDefault();
		let tg_y = $('.cate').offset().top;
		$('html, body').animate({
			scrollTop: tg_y
		});
	});

	// modal close
	$('.modal').click(function () {
		$(this).fadeOut();
	});

});