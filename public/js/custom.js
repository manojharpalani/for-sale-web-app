$('.partner-carousel').owlCarousel({
    nav: true,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    nav: false,
    rewind: true,
    loop: true,
    margin: 10,
    responsiveClass: true,

    responsive: {
        0: {
            items: 2,
            nav: false,
            loop: false
        },
        480: {
            items: 3,
            nav: false,
            loop: false
        },
        576: {
            items: 3,
        },
        768: {
            items: 4,
        },
        992: {
            items: 6,
        }
    }
});

$('.client-review-carousel').owlCarousel({
    nav: true,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    nav: false,
    rewind: true,
    loop: true,
    margin: 30,
    responsiveClass: true,

    responsive: {
        0: {
            items: 1,
            nav: false,
            loop: false
        },
        992: {
            items: 2,
        }
    }
});



$('.replyu').after('<form action="#" class="comment-area"><textarea placeholder="Write Message"></textarea><div class="upload text-right"><a href="#"><img src="images/emoji.png" alt=""></a><a href="#"><img src="images/camera.png" alt=""></a><a href="#"><img src="images/gif.png" alt=""></a> </div></form>');

$('.reg-comment').click(function () {
    $(this).parentsUntil('div.text').toggleClass('active');
    $(this).toggleClass('active');
});




$('.replyu').click(function () {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
    } else {
        $('.replyu.active').removeClass('active');
        $(this).addClass('active');
    }
});
