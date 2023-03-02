
$(function() {

    $('#start-close-button').on('click', function() {
        history.back();
    });

    $('#btn-slider-close').on('click', function() {
        $('#div-slider').hide();
        $('#div-start').fadeIn();
    });

    $('#btn-slider-home').on('click', function() {
        swiper.slideTo(0);
    });

    $('#btn-show-slider').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();


        $('#div-start').hide();
        $('#div-slider').fadeIn();

        setTimeout(function() {
            window.scrollTo(0,0);
        }, 10);

    });

    let swiper = new Swiper('.swiper-container', {

        navigation: {
            nextEl: '.btn-next-page',
            prevEl: '.btn-prev-page'
        },
        on: {
            slideChange: function () {
                $('.btn-prev-page').removeClass('on');
                $('.btn-next-page').addClass('on');

                if (this.realIndex > 0) {
                    $('.btn-prev-page').addClass('on');
                }

                if (this.realIndex > 8) {
                    $('.btn-next-page').removeClass('on');
                }

                $('ul.menu li button').removeClass('on');
                $('#header-h1').text('홈');

                switch (this.realIndex) {
                    case 3:
                        $('ul.menu li .menu-1').addClass('on');
                        $('#header-h1').text('건강관리');
                        break;

                    case 4:
                        $('ul.menu li .menu-2').addClass('on');
                        $('#header-h1').text('건강분석');
                        break;

                    case 5:
                        $('ul.menu li .menu-3').addClass('on');
                        $('#header-h1').text('건강활동');
                        break;

                    case 6:
                    case 7:
                        $('ul.menu li .menu-4').addClass('on');
                        $('#header-h1').text('체형케어');
                        break;

                    case 8:
                    case 9:
                        $('ul.menu li .menu-5').addClass('on');
                        $('#header-h1').text('포인트몰');
                        break;
                }


            },
            activeIndexChange: function () {
            },

        }

    });

    $('ul.menu .menu-1').on('click', function() {
        swiper.slideTo(3);
    });

    $('ul.menu .menu-2').on('click', function() {
        swiper.slideTo(4);
    });

    $('ul.menu .menu-3').on('click', function() {
        swiper.slideTo(5);
    });

    $('ul.menu .menu-4').on('click', function() {
        swiper.slideTo(6);
    });

    $('ul.menu .menu-5').on('click', function() {
        swiper.slideTo(8);
    });


    setTimeout(function() {
        $('#div-slider').hide();
    }, 100);


    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //$('#div-start').hide();
    //$('#div-slider').show();
});
