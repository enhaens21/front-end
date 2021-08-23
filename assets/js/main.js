if ($('.bestseller_sec_slider').length > 0) {
    $('.bestseller_sec_slider').owlCarousel({
        animateOut: 'fadeOut',
        nav: false,
        dots: false,
        autoplay: false,
        // autoplayTimeout: 2500,
        autoplayHoverPause: true,
        loop: true,
        stagePadding: 30,
        navText: ['<i class="las la-angle-double-left"></i>', '<i class="las la-angle-double-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
}
$('.buy_now_popup .close_btn').on('click', function (event) {
    $('.buy_now_popup').hide();
    $('body .main_contant').removeClass('popup_open');
});
$('.bestseller_box .buy_now').on('click', function (event) {
    $('.buy_now_popup').show();
    $('body .main_contant').addClass('popup_open');
});