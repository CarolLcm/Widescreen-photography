$(function(){
	//点击导航栏 缓慢滑动到指定位置
	$('.jump').click(function(){
		var num=$(this).index()
		$('html,body').animate({scrollTop:$('.a').eq(num).offset().top}, 800); 
	})
	$('.team').click(function(){
		$('html,body').animate({scrollTop:$('.t').offset().top}, 800);
	})
	$('.gall').click(function(){
		$('html,body').animate({scrollTop:$('.g').offset().top}, 800);
	})
	$('.pric').click(function(){
		$('html,body').animate({scrollTop:$('.p').offset().top}, 800);
	})
	$('.serv').click(function(){
		$('html,body').animate({scrollTop:$('.s').offset().top}, 800);
	})
	$('.test').click(function(){
		$('html,body').animate({scrollTop:$('.T').offset().top}, 800);
	})
	$('.cont').click(function(){
		$('html,body').animate({scrollTop:$('.c').offset().top}, 800);
	})
	$('.go').click(function(){
		$('html,body').animate({scrollTop:'0px'}, 800);
	})

	//导航栏中 DROPDOWN 的点击样式
	var flag=1;
	$('li.DR').click(function(){
		if(flag){
			$(this).css('background','#E7E7E7').children('ul').show()
			flag=0;
		}else{
			$(this).css('background','white').children('ul').hide()
			flag=1;
		}	
	})

	//Meet the Team 版块中的图标hover事件
	$('#TEAM>ul>li>ul>li').mouseenter(function(){
		$(this).children('a').addClass('run').prev().addClass('run1').delay(1000).addClass('run1').next().addClass('run');
	})

	//轮播图1
	var bLeft=0;
	var i=0;
	var timer=setInterval(run,3000)
	function run(){
		if(bLeft==(-1423*4)){
			$('ul.img').append($('ul.img li').first());
			bLeft+=1423; 
			$('ul.img').css('left',bLeft+'px')
		}
		bLeft-=1423;
		var obj={
			left:bLeft+'px'
		}
		if(i<4){
			i++;
		}else{
			i=0;
		}
		$('ul.img div').css('opacity',0).animate({opacity:1},2000);
		$('ul.circle li').eq(i).attr('class','active').siblings().removeAttr('class','active');
		$('ul.img').animate(obj,800)
	}
	$('.aRight').click(function(){
		clearInterval(timer);
		run();
		timer=setInterval(run,3000)
	})
	$('.aLeft').click(function(){
		clearInterval(timer);
		if(bLeft==0){
			$('ul.img').prepend($('ul.img li').last());
			bLeft-=1423;
			$('ul.img').css('left',bLeft+'px')
		}
		bLeft+=1423;
		var obj={
			left:bLeft+'px'
		}
		$('ul.img').animate(obj,800)
		if(i<=0){
			i=4;
		}else if(i<5){
			i--;
		}
		console.log(i)
		$('ul.circle li').eq(i).attr('class','active').siblings().removeAttr('class','active');
		timer=setInterval(run,3000)
	})
	$('ul.circle li').mouseover(function(){
		clearInterval(timer);
		var index=$(this).index();
		$(this).attr('class','active').siblings().removeAttr('class','active');
		var obj1={
			left:-1423*index+'px'
		}
		$('ul.img').animate(obj1,1);
		bLeft=-1423*index;
		i=index;
		timer=setInterval(run,3000)
	})
	//轮播图2
	var cLeft=0;
	var j=0;
	var timer1=setInterval(fun,2000)
	function fun(){
		if(cLeft==(-897*3)){
			$('ul.bhImg').append($('ul.bhImg li').first());
			cLeft+=897; 
			$('ul.bhImg').css('left',cLeft+'px')
		}
		cLeft-=897;
		var obj={
			left:cLeft+'px'
		}
		if(j<3){
			j++;
		}else{
			j=0;
		}
		$('ul.bhCircle li').eq(j).attr('class','active').siblings().removeAttr('class','active');
		$('ul.bhImg').animate(obj,1)
	}
	//轮播图3
	var k=0;
	var dLeft=0;
	var timer2=setInterval(loop,3000)
	function loop(){
		if(dLeft==(-550*2)){
			$('ul.lbImg').append($('ul.lbImg li').first());
			dLeft+=550; 
			$('ul.lbImg').css('left',dLeft+'px')
		}
		dLeft-=550;
		var obj2={
			left:dLeft+'px'
		}
		if(k<2){
			k++;
		}else{
		k=0;
		}
		$('ul.lbCircle li').eq(k).attr('class','active').siblings().removeAttr('class','active');
		$('ul.lbImg').animate(obj2,500)
	}
	$('ul.lbCircle li').click(function(){
		clearInterval(timer2);
		var index=$(this).index();
		$(this).attr('class','active').siblings().removeAttr('class','active');
		var obj3={
			left:-550*index+'px'
		}
		$('ul.lbImg').animate(obj3,1);
		dLeft=-550*index;
		k=index;
		timer2=setInterval(loop,3000)
	})
	//图片版块
	//1.遮罩层
	$('div.img a').mouseenter(function(){
		$(this).children('div').slideDown().prev().css('opacity',0.8)
	})
	$('div.img a').mouseleave(function(){
		$(this).children('div').slideUp().prev().css('opacity',1)
	})
	//2.放大
	flag1=1;
	$('div.img img').click(function(){
		if(flag1){
			$(this).css({'zIndex':3,'transform':'scale(1.5)'}).fadeTo(1000,1)
			flag1=0;
		}else{
			$(this).css({'zIndex':0,'transform':'scale(1)'}).fadeTo(800,0.6).fadeTo(500,1)
			flag1=1;
		}
	})

	//footer 中点击出现相应版块
	$('.fTop>ul>li').click(function(){
		var index=$(this).index();
		$(this).attr('class','select').siblings().removeAttr('class','select');
		$('.border div').eq(index).show().siblings().hide();
		$('.two h6').text('');
		$('.two input').not('.check').val();
	})

	//登录
	//点击 Simple Pricing 下的SIGN UP出现登录框
	$('.lMiddle div.load').click(function(){	
		$('.last div.login').show()	
	})
	$('.last div.login p.cancel').click(function(){	
		$('.last div.login').hide()
		$('.login h6').text('')
		$('.login input').val('')
	})
	//提交条件判断
	$('.login h3').click(function(){
		if($('.login input').val().length==0||(flag==false)||$('.login .pass').val().length==0){
			alert('请完善登录信息！')
			$('.login h3 a').attr('herf','javascript:void(0)')
		}
		if($('.login input').val().length!=0&&(flag1==true)&& $('.login .pass').val().length!=0){
			alert('提交成功！')
			$('.login h3 a').attr('herf','../1.php')
		}
	})

	//last submit
	$('.submit input').mouseenter(function(){
		$(this).next().show()
	})
	$('.submit input').mouseleave(function(){
		$(this).next().hide()
	})

	//SIGN UP 与 Send Message 中的input点击
	var flag1=false;
	$('input').not('.check').focus(function(){
		$(this).next().text('*请填写此字段！').css('color','#ccc')
	})
	$('input').not('.check').blur(function(){
		$(this).next().text('')
		if($(this).val().length==0){
			$(this).next().text('!用户名不能为空').css('color','#FF3C41')
			flag1=false;
		}else{
			var pattern = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
			if(pattern.test($('input.input').val())){
				flag1 = true;
			}else{
				$('input.input').next().text('*邮箱地址应包括"@" 数字 和字母').css('color','#D8BF62')
				flag1 = false;
			}
		}
	})
	$('#cle').click(function(){
		$('.two h6').text('')
	})

	//footer 提交 条件判断
	$('#sub').click(function(){
		if($('.two input').val().length==0||(flag1==false)){
			$('form').attr('action','javascript:void(0)')
			alert('请完善登录信息！')
		}else{
			$('form').attr('action','../1.php')
			alert('登录成功！')
		}
	})
	//Send Message 中的文本域聚焦时清除里边的内容
	$('textarea').focus(function(){
		$(this).removeAttr('placeholder')
	})
	$('textarea').blur(function(){
		$(this).attr('placeholder','Message...')
	})

	//回到顶部
	$(window).scroll(function(){
		var sTop=document.body.scrollTop||document.documentElement.scrollTop;
		if(sTop<600){
			$('.gotop').fadeOut(1000)
		}else{
			$('.gotop').fadeIn(1000)
		}
	})
})