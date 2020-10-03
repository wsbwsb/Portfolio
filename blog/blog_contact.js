$(function(){
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
});