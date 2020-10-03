$(function () {
    //메인메뉴
    $('.mainmenu>li').mouseover(function () {
        $('.mainnav').css('backgroundColor', 'white');
        $('.mainnav').css('border-bottom', '1px solid #eee');
        $('.mainmenu>li>a').css('color', 'black');
        $('.subnav').show();
        $('#logo img').attr('src', 'logo.png');
    });
    $('.subnav').mouseleave(function () {
        $('.mainnav').css('backgroundColor', 'transparent');
        $('.mainnav').css(
            'border-bottom',
            '1px solid rgba(255, 255, 255, 0.1)'
        );
        $('.mainmenu>li>a').css('color', 'white');
        $('.subnav').hide();
        $('#logo img').attr('src', 'logo-white.png');
    });

    //탑 스크롤
    $('footer .right>p').click(function () {
        $('html').animate({ scrollTop: 0 }, 500);
    });

    //패밀리사이트
    $('.family-site>li>p').click(function () {
        var family = $('.family-site>li>p>img').attr('src');
        console.log(family);
        if (family == 'footer-more.png') {
            $('.family-submenu').slideDown(200);
            $('.family-site>li>p>img').attr('src', 'footer-less.png');
        } else {
            $('.family-submenu').slideUp(200);
            $('.family-site>li>p>img').attr('src', 'footer-more.png');
        }
    });

    /*sticky*/
    $('.mainnav').each(function () {
        var $window = $(window),
            $header = $(this),
            headerOffsetTop = $header.offset().top;

        $window.on('scroll', function () {
            if ($window.scrollTop() > headerOffsetTop) {
                $header.addClass('sticky');
            } else {
                $header.removeClass('sticky');
            }
        });
    });

    /*팝업창*/

    //닫기버튼
    $('.close2').click(function () {
        $('.popup').hide();
    });
});
