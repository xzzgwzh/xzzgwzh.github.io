$(function(){




// 切换背景色
   $(".newsMenu ul li").click(function(){
           $(".newsMenu ul li").each(function(){
          $(".newsMenu ul li").removeClass("on")}),$(this).addClass("on");
       })
 
  // 菜单栏li线条去除
   $(".menubar .menu ul li a:last").css({backgroundImage:"none"});
     $(".funIcon ul li:last").css({marginRight:0});
        $(".link ul li a:last").css({marginRight:0});








  //菜单栏效果     
        $('.menu ul li').mouseover(function(){
        $(this).find('ol').slideDown("2000");
          
        });
           
        $('.menu ul li').mouseleave(function(){
        $(this).find('ol').slideUp("2000");
           $("ol").stop(false,true)

        });


      }); 



     $(function(){
 
          $(".swi").eq(0).css({display:"block"});
          $(".newsMenu ul li").click(function(){

              var ld = $(this).index();
               $(".swi").css({display:"none"});
               $(".swi").eq(ld).css({display:"block"});
          });
        
     });



