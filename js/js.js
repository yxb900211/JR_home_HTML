// JavaScript Document
$(function(){
	
//计算侧边栏高度	
	var bootHeight = $(document).height()
	
	$('.boot_container_left').height(bootHeight - '68'+'px')
	
//侧边效果
	$('.boot_container_left li b').click(function(){

		if($(this).parents('li').hasClass('a')){
			
		$('.boot_container_left li').removeClass('a')
		
		$('.boot_container_left li').find('b').find('span').removeClass('boot_rotate')
		
		$(this).parents('li').css('background','url(img/h_02.png) no-repeat left center')
		
		$(this).parents('li').find('b').css('border-bottom','1px solid #363e50')
		
		$(this).parents('li').find('b').css('color','#daedff')
		
		$(this).parents('li').find('.boot_block').css('display','block')
		
		$(this).parents('li').find('.boot_hend').css('display','none')

		$(this).parents('li').find('.boot_bloe').slideUp()
			
			}else{
				
	    $(this).parents('li').addClass('a').siblings().removeClass('a')
		
		$(this).parents('li').css('background','url(img/hh.png) no-repeat left top')
		
		       .siblings().css('background','url(img/h_02.png) no-repeat left center')   
		
		$(this).parents('li').find('b').css('border-bottom','none').parents('li')
		
		       .siblings().find('b').css('border-bottom','1px solid #363e50')
		
		$(this).parents('li').find('b').css('color','#fff').parents('li')
		
		      .siblings().find('b').css('color','#daedff')
		
		$(this).parents('li').find('.boot_block').css('display','none').parents('li')
		
		       .siblings().find('.boot_block').css('display','block')
		
		$(this).parents('li').find('.boot_hend').css('display','block').parents('li')
		
		       .siblings().find('.boot_hend').css('display','none')
		
	    $(this).parents('li').find('b').find('span').addClass('boot_rotate').parents('li')
		
		       .siblings().find('b').find('span').removeClass('boot_rotate')
		  
			   $(this).parents('li').find('.boot_bloe').slideDown().parents('li')
			   
			         .siblings().find('.boot_bloe').slideUp()
				
				}
	})	
	
//公用弹窗 layui
	
	
$('.popup').click(function(){
	
	var msg = $(this).attr('data-msg');

	layui.use('layer', function(){
		
	 layer.confirm(msg, 
		{
			skin: 'sancu',
			
			closeBtn: 0,
			
			area: ['20%', 'auto'],
			 //宽高
			title:'提示信息'
			
		}, function(index){

	  layer.close(index);
	});
	});
});  

	
//修改密码

	$('.mima_left span').click(function() {
		$(this).addClass('goot').siblings().removeClass('goot');
		$('.boot_mint>.mima_right:eq(' + $(this).index() + ')').show().siblings().hide();
	})
	
//商品列表
$('.ctor li').click(function() {
		$(this).addClass('golip').siblings().removeClass('golip');
		$('.bconr>.waci:eq(' + $(this).index() + ')').show().siblings().hide();
	})
	
		
$('.time_right').click(function() {

	var pp = $(this).parents('.boot_time').find('.time_cone');

	var getNum = parseInt(pp.val());

	if(getNum < 1000000) {

		pp.val(getNum + 1)

	} else {

		alert("不可以大于1000000");

	}

})

$('.time_left').click(function() {

	var pp = $(this).parents('.boot_time').find('.time_cone');

	var getNum = parseInt(pp.val());

	if(getNum > 0) {

		pp.val(getNum - 1)

	} else {

		alert("不可以小于0");

	}
})	
	
	
//多选 


$(".checkAll").click(function() {
   
   
	$(this).parents('.atero').find('.at').attr("checked",this.checked); 
	
});

$(".at").click(function(){
	
	 var $subBox = $(this).parents('.atero').find(".at");
	
	$(this).parents('.atero').find(".checkAll").attr("checked",$subBox.length == $(this).parents('.atero').find(".at:checked").length ? true : false);
});	
	
	
	
	
	
$('.ast').click(function(){
	
	
	$('.ast').css('background','url(img/wei.png) no-repeat')
	
	$('.chent').attr("checked",'');
	
	$(this).css('background','url(img/xuan.png) no-repeat')
	
	$(this).parents('.aese_ledt').find('.chent').attr("checked",'checked');
	
	})
	
	
	
//充值申请切换
$('.boot_xob li').click(function() {
	
	      
	     
		 $(this).find('.dad').prop('checked','checked');
	
		$(this).addClass('xob').siblings().removeClass('xob');
		
		$('.boot_colp>.boot_xobr:eq(' + $(this).index() + ')').show().siblings().hide();
		
		
		
	})	
	
	
	

	
	
	
	
	
	

	
//公用iframe	

	$('.iframe').click(function(){
		
    var iframe = $(this).attr('data-iframe');

	layui.use('layer', function(){
		
	layer.open({
       type: 2,
       title: false,
       shadeClose: true,
       shade: 0.8,
       area: ['50%', '50%'],
       content: iframe  //iframe的url
    }); 
	
	
	});
});

$('.jdtop').click(function(){
	
	
		
	layer.open({
            type: 2,
            title: '分销商接点图',
            shadeClose: true,
            maxmin: true,
            area: ['100%', '100%'],
            content: '接点图全屏.html'

         
	})
  
 }); 
 
 
 
 
 
	

//layui 日期插件	
layui.use('laydate', function(){
  var laydate = layui.laydate;
  
  var start = {
    min: laydate.now()
    ,max: '2099-06-16 23:59:59'
    ,istoday: false
    ,choose: function(datas){
      end.min = datas; //开始日选好后，重置结束日的最小日期
      end.start = datas //将结束日的初始值设定为开始日
    }
  };
  
  var end = {
    min: laydate.now()
    ,max: '2099-06-16 23:59:59'
    ,istoday: false
    ,choose: function(datas){
      start.max = datas; //结束日选好后，重置开始日的最大日期
    }
  };
  
  document.getElementById('LAY_demorange_s').onclick = function(){
    start.elem = this;
    laydate(start);
  }
  document.getElementById('LAY_demorange_e').onclick = function(){
    end.elem = this
    laydate(end);
  }
  
});	
	
	
	
	
	
	
	
	})