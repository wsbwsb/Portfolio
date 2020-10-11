$(function(){
    //메인메뉴
    $(".mainnav").mouseover(function(){
        $(".submenu").stop().slideDown(300);
        $(".menu-bg").stop().slideDown(300);
    });
    $(".mainnav").mouseout(function(){
        $(".submenu").stop().slideUp(300);
        $(".menu-bg").stop().slideUp(300);
    });

    //서브메뉴 css효과
    $(".mainnav>ul>li").mouseover(function(){
        $(".submenu",this).css(
            "border-top","2px solid #6995c2"
        )
        $(".submenu",this).css(
            "background-color","#f0f0f0"
        )
    });
    $(".mainnav>ul>li").mouseout(function(){
        $(".submenu",this).css(
            "border-top","#6995c2"
        )
        $(".submenu",this).css(
            "background-color","#f8f8f8"
        )
    });

    //탭메뉴
    $(".tab-btn>li>a").click(function(){
        $(".tab-content>li").hide();
        $($(this).attr("href")).show();
        $(".tab-btn>li>a").removeClass("selected");
        $(this).addClass("selected");
        return false;
    });

    //배너 슬라이드
    $(".banner>ul").click(function(){
        $(".banner>ul").animate({
            marginLeft: "-276px"
        },500,"swing",function(){
            $(".banner>ul>li:first").appendTo(".banner>ul");
            $(".banner>ul").css("marginLeft","0");
        });
    });

    setInterval(function(){
        $(".banner>ul").click();
    },4000);

    $(".button-bar .stop").click(function(){
        var btn=$(".button-bar .stop").attr("src");
        if(btn=="img/mpop_stop.gif"){
            $(".button-bar .stop").attr("src","img/mpop_play.gif");
        }else{
            $(".button-bar .stop").attr("src","img/mpop_stop.gif");
        }
    });

    //팝업창
    $(".popup-btn>p").click(function(){
        $(".popup").hide();
    });
});