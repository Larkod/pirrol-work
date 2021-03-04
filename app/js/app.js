
$(document).ready(function() {
	$('.header__mobile-bar').click(function() {
		console.log('sad');
		if ($('.header__nav-list').hasClass('active')) {
			$('.header__nav-list').removeClass('active');
			$(this).removeClass('active');
		}
		else
		{
			$(this).addClass('active');
			$('.header__nav-list').addClass('active');
		}
	});

	$('.header__nav-item').click(function() {
		let id = $(this).attr('scroll');
		$('.header__nav-item').removeClass('active');
		$(this).addClass('active');
  		$('html,body').stop().animate({ scrollTop: $(id).offset().top }, 1000);
	});

	$('.section').on('mousemove',(function(){
		let id = $(this).attr('id');
		if (id !== undefined) {
			$('.header__nav-item').removeClass('active');
			$('.header__nav-item[scroll="#'+id+'"]').addClass('active');
		}
		
	}));

});

$('.phrases__slider').slick({
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
	prevArrow: false,
    nextArrow: false
});




