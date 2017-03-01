$(function(){
	$('.menubg').click(function() {
		$('.header .top-menu').removeClass('opened');
		$('.menubg').fadeOut();
	});
	$('.header .menu-button').click(function() {
		$('.header .top-menu').addClass('opened');
		$('.menubg').fadeIn();
	});
	$('.news-page .photos').slick({
		autoplay: false,
		dots: true,
		arrows: false
	});
	$('.news-list .item .photos').slick({
		autoplay: false,
		dots: true,
		arrows: false
	});

  $(window).scroll(function () {
    headerFloat();
  });
  headerFloat();

  function headerFloat() {
    var winPos = $(window).scrollTop();
    if (winPos > 10) {
      console.log('some');
      $('header').addClass('floating');
    } else {
      $('header').removeClass('floating');
    }
  }

});
