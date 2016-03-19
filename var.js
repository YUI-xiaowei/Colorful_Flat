/**
 * Created by hp on 2016/2/15.
 */
//轮播图  轮播图  轮播图  轮播图  轮播图  轮播图  轮播图  轮播图  轮播图
var i=0;
var w=$(".content li").width();
var move=0;
//计时轮播
function start(){
    i++;
    if(i>2)
        i=0;
    move=-(w*i+25);
    $(".container ul.content").stop(true,false)
        .animate({left:move},500);
    $(".btn li").eq(i).addClass("high")
        .siblings().removeClass("high");
}
setInterval("start()",2000);
//按钮轮播
function move_btn(id){
    var b;
    if(id=="1"){
        switch (i){
            case 0:b=2;i=b;break;
            case 1:b=0;i=b;break;
            case 2:b=1;i=b;break;
            default :alert("左轮播加载失败 0.0 初始中。。。");b=0;i=b;
        }
    }else if(id=="2"){
        switch (i){
            case 0:b=1;i=b;break;
            case 1:b=2;i=b;break;
            case 2:b=0;i=b;break;
            default :alert("右轮播加载失败 0.0 初始中。。。");b=0;i=b;
        }
    }
    move_img(b);
}
function move_img(b){
    move=-(w*b+25);
    $(".container ul.content").stop(true,false)
        .animate({"left":move});
    $(".btn li").eq(i).addClass("high")
        .siblings().removeClass("high");
}
//轮播按钮显示/隐藏
$(function(){
   $("#lun_bo").mouseover(function(){
      $("#lun_bo div.move").css({
          "display":"block"
      },"fast");
   }).mouseout(function(){
       $("#lun_bo div.move").css({
           "display":"none"
       },"fast");
   });
});

//work_pic 鼠标经过图片效果  work_pic 鼠标经过图片效果  work_pic 鼠标经过图片效果
$(function(){
    $(".work_pic li").mouseover(function(){
        i=$(this).index();
        $(".work_pic li p").eq(i).slideDown("normal")
            .parent().siblings().children("p").slideUp("normal");
        $(".work_pic li img").eq(i).stop().animate({"top":"-40px"},"slow");
    }).mouseout(function(){
        $(".work_pic li img").parent().children("img").stop().animate({"top":"0"},"slow");
    });
});

//team_sign 鼠标经过提示  team_sign 鼠标经过提示  team_sign 鼠标经过提示
$(function(){
    var x=3;
    y=15;
    $("#team a.tooltip").mouseover(function(e){
        this.myTitle=this.title;
        this.title="";
        var signWord="<div class='sign_word'>"+this.myTitle+"</div>";
        $("#team").append(signWord);
        $("div.sign_word").css({
            "top":(e.pageY+y)+"px",
            "left":(e.pageX+x)+"px"
        }).show("fast");
    }).mouseout(function(){
        this.title=this.myTitle;
        $("div.sign_word").remove();
    });
});

//contact中表单中的用户名 电子邮件 信息框聚焦失焦事件
$(function(){
    $("#contact :input").focus(function(){
        var txt_value=$(this).val();
        if(txt_value==this.defaultValue){
            $(this).val("");
        }
    });
    $("#contact :input").blur(function(){
        var txt_value=$(this).val();
        if(txt_value==""){
            $(this).val(this.defaultValue);
        }
    });
});

//contact中的表单验证在HTML代码中

//网页换肤 网页换肤 网页换肤 网页换肤 网页换肤 网页换肤
$(function(){
   $("#skin li").click(function(){
       $("#"+this.id).addClass("selected")
           .siblings().removeClass("selected");
       $("#cssfile").attr("href","css/"+this.id+".css");
       var index=$(this).index();
       $("div.tab_box>div").eq(index).show()
           .siblings().hide();
   })
});

//返回顶部和底部   返回顶部和底部    返回顶部和底部   返回顶部和底部
$(function() {
    //返回顶部和底部按钮的显示/隐藏
    var lift = 0;
    $(window).scroll(function () {    //当滚轮滚动时执行
        lift = $(window).scrollTop();  //获取当前滚动位置并赋值给lift
        if (lift > 300) {
            $("#turn").css({
                "display": "block"
            });
        } else {
            $("#turn").css({
                "display": "none"
            });
        }
    });
    //返回顶部
    $("#turn div.turn_top").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, "slow");
    });
    //返回底部
    $("#turn div.turn_bottom").click(function () {
        var docHeight = $("html").height();  //获取文档的高度并赋值给docHeight
        $("html,body").animate({
            scrollTop: docHeight
        }, "slow");
    });
});