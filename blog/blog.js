    $(function(){
        //튤팁
        $("span.tooltip").css({
		position:"absolute",
        top:"40px",
        left:"30px",
		display:"none"
        });
        $("#postbox>ul>li>a").mouseenter(function(){
            $("span.tooltip",this).fadeIn(200);
        }).mouseleave(function(){
            $("span.tooltip",this).fadeOut(200);
        });

        //카테고리 목록 숨김처리
        $("#category h3 img").click(function(){
            if($("#category h3 img").attr("src")=="blog/hidebtn.png"){
                $("#mainlist").hide();
                $("#category h3 img").attr("src","blog/showbtn.png");
            }else{
                $("#mainlist").show();
                $("#category h3 img").attr("src","blog/hidebtn.png");
            }
        });

        //글 목록 숨김처리
        $("#postlist2").hide();
        $("#list").click(function(){
              var text1=$("#list").text();
            if(text1=="목록열기"){
                $("#postlist2").show();
                $("#list").text("목록닫기");
            }else{
                $("#postlist2").hide();
                $("#list").text("목록열기");
            }
        });


        //페이지 넘버
        $(".number a:first-child").addClass("css");

        $("#postlist3").hide();
        $(".number a:last-child").click(function(){
            $("#postlist2").hide();
            $("#postlist3").show();
            $(".number a:last-child").addClass("css");
            $(".number a:first-child").removeClass("css");
        });

        $("#postlist3").hide();
        $(".number a:first-child").click(function(){
            $("#postlist3").hide();
            $("#postlist2").show();
            $(".number a:first-child").addClass("css");
            $(".number a:last-child").removeClass("css");
        });
    });
