/**
 * Created by hp on 2016/2/15.
 */
//�ֲ�ͼ  �ֲ�ͼ  �ֲ�ͼ  �ֲ�ͼ  �ֲ�ͼ  �ֲ�ͼ  �ֲ�ͼ  �ֲ�ͼ  �ֲ�ͼ
var i=0;
var w=$(".content li").width();
var move=0;
//��ʱ�ֲ�
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
//��ť�ֲ�
function move_btn(id){
    var b;
    if(id=="1"){
        switch (i){
            case 0:b=2;i=b;break;
            case 1:b=0;i=b;break;
            case 2:b=1;i=b;break;
            default :alert("���ֲ�����ʧ�� 0.0 ��ʼ�С�����");b=0;i=b;
        }
    }else if(id=="2"){
        switch (i){
            case 0:b=1;i=b;break;
            case 1:b=2;i=b;break;
            case 2:b=0;i=b;break;
            default :alert("���ֲ�����ʧ�� 0.0 ��ʼ�С�����");b=0;i=b;
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
//�ֲ���ť��ʾ/����
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

//work_pic ��꾭��ͼƬЧ��  work_pic ��꾭��ͼƬЧ��  work_pic ��꾭��ͼƬЧ��
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

//team_sign ��꾭����ʾ  team_sign ��꾭����ʾ  team_sign ��꾭����ʾ
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

//contact�б��е��û��� �����ʼ� ��Ϣ��۽�ʧ���¼�
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

//contact�еı���֤��HTML������

//��ҳ���� ��ҳ���� ��ҳ���� ��ҳ���� ��ҳ���� ��ҳ����
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

//���ض����͵ײ�   ���ض����͵ײ�    ���ض����͵ײ�   ���ض����͵ײ�
$(function() {
    //���ض����͵ײ���ť����ʾ/����
    var lift = 0;
    $(window).scroll(function () {    //�����ֹ���ʱִ��
        lift = $(window).scrollTop();  //��ȡ��ǰ����λ�ò���ֵ��lift
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
    //���ض���
    $("#turn div.turn_top").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, "slow");
    });
    //���صײ�
    $("#turn div.turn_bottom").click(function () {
        var docHeight = $("html").height();  //��ȡ�ĵ��ĸ߶Ȳ���ֵ��docHeight
        $("html,body").animate({
            scrollTop: docHeight
        }, "slow");
    });
});