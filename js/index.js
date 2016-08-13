function rnd(n,m){
	return parseInt(Math.random()*(m-n)+n)
}
window.addEventListener('DOMContentLoaded',function(){
	document.documentElement.style.fontSize=document.documentElement.clientHeight/(320/20)+'px';
	

	
//-----------------------page2 屏保-----------------------

	var oCir1=document.querySelector('.circle1');
	var oCir2=document.querySelector('.circle2');
	var oA=document.querySelector('#oA');//音乐
	var oHeader2=document.querySelector('#header2');

	$(function(){
		$('.circle1').on('tap',function(){
			move(oCir1,{opacity:0},{time:1500,end:function(){
				oC.style.display='block';
				move(oCir2,{opacity:1},{time:1500,end:function(){
					oA.src='mp3/My Songs Know What You Did In The Dark Light Em Up.mp3';
					oA.play();
					$('.circle2').on('tap',function(){
						oC.style.display='none';
						move(oCir2,{opacity:0},{time:1500,end:function(){
							move(oCir1,{opacity:1},{time:1500});
							oA.src='';
						}});
					});
				}});
			}});
		});
	});
		
	//屏保
	var oC=document.querySelector('#oc');
	var gd=oC.getContext('2d');
	(function(){
		var w=1;
		var h=1; 
		var x=0;
		var y=0;
		var n=5;
		var aPoint=[];
		var oldPoint=[];  //存放点运动时的坐标
		var len=100;      //oldPoint的长度

		oC.width=document.documentElement.clientWidth;
		oC.height=document.documentElement.clientHeight;
		gd.fillStyle='blue';
		for(i=0;i<n;i++){
			x=rnd(0,oC.width-w);
			y=rnd(0,oC.height-h);
			gd.fillRect(x,y,w,h);
			aPoint.push({x:x,y:y,speedX:rnd(-5,5),speedY:rnd(-5,5)});
		}

		setInterval(function(){
			gd.clearRect(0,0,oC.width,oC.height);
			for(var i=0;i<aPoint.length;i++){
				if(aPoint[i].x<=0 || aPoint[i].x>=oC.width-w){
					aPoint[i].speedX*=-1;
				}
				if(aPoint[i].y<=0 || aPoint[i].y>=oC.height-h){
					aPoint[i].speedY*=-1;
				}
				aPoint[i].x+=aPoint[i].speedX;
				aPoint[i].y+=aPoint[i].speedY;
				gd.fillRect(aPoint[i].x,aPoint[i].y,w,h);	
			}

			var arr=[];
			arr[0]={x:aPoint[0].x+w/2,y:aPoint[0].y+h/2};
			gd.beginPath();
			//每次画要重新开始画笔
			gd.moveTo(aPoint[0].x+w/2,aPoint[0].y+h/2);
			for(var i=1;i<aPoint.length;i++){
				gd.lineTo(aPoint[i].x+w/2,aPoint[i].y+h/2);

				arr[i]={x:aPoint[i].x,y:aPoint[i].y};
			}
			gd.strokeStyle='blue';
			gd.closePath();
			gd.stroke();

			oldPoint.push(arr);
			if(oldPoint.length>len){
				oldPoint.shift();    //先进的先删除
			}

			for(var i=0;i<oldPoint.length;i++){	
				var opa=i/oldPoint.length;
				gd.beginPath();
				gd.strokeStyle='rgba(0,0,255,'+opa+')';
				gd.moveTo(oldPoint[i][0].x,oldPoint[i][0].y);
				for(var j=1;j<arr.length;j++){
					gd.lineTo(oldPoint[i][j].x,oldPoint[i][j].y);
				}
				//二维数组
				gd.closePath();
				gd.stroke();
			}
		},16);
	})();


//-----------------------page3 计算器-----------------------

	var oOut=document.querySelector('#out');
	var oIn=document.querySelector('#in');
	
	function rnd(n,m){
		return parseInt(Math.random()*(m-n)+n);
	}

	//创建5个圆
	for(var i=0;i<5;i++){
		var aSpan=document.createElement('span');
		oOut.appendChild(aSpan);
	}
	
	//创建5个圆
	for(var i=0;i<5;i++){
		var aDiv=document.createElement('div');
		oIn.appendChild(aDiv);
	}
	
	var aSpan=oOut.getElementsByTagName('span');
	var aDiv=oIn.getElementsByTagName('div');
	var R=oOut.offsetWidth/2;
	var R2=oIn.offsetWidth/2;

	//外圆的初始角度
	var n0=0;
	var n1=70;
	var n2=40;
	var n3=40;
	var n4=70;
	
	//内圆的初始角度
	var Dn0=0;
	var Dn1=70;
	var Dn2=40;
	var Dn3=40;
	var Dn4=70;
	
	var x0=R;
	var y0=R;
	var x1=R+Math.sin(d2a(n1))*R;
	var y1=R-Math.cos(d2a(n1))*R;
	var x2=R+Math.sin(d2a(n2))*R;
	var y2=R+Math.cos(d2a(n2))*R;
	var x3=R-Math.sin(d2a(n3))*R;
	var y3=R+Math.cos(d2a(n3))*R;
	var x4=R-Math.sin(d2a(n4))*R;
	var y4=R-Math.cos(d2a(n4))*R;
	
	var Dx0=R2;
	var Dy0=R2;
	var Dx1=R2+Math.sin(d2a(Dn1))*R2;
	var Dy1=R2-Math.cos(d2a(Dn1))*R2;
	var Dx2=R2+Math.sin(d2a(Dn2))*R2;
	var Dy2=R2+Math.cos(d2a(Dn2))*R2;
	var Dx3=R2-Math.sin(d2a(Dn3))*R2;
	var Dy3=R2+Math.cos(d2a(Dn3))*R2;
	var Dx4=R2-Math.sin(d2a(Dn4))*R2
	var Dy4=R2-Math.cos(d2a(Dn4))*R2;

	//外圆的初始位置
	aSpan[0].style.left=x0+'px';
	aSpan[1].style.left=x1+'px';
	aSpan[1].style.top=y1+'px';
	aSpan[2].style.left=x2+'px';
	aSpan[2].style.top=y2+'px';
	aSpan[3].style.left=x3+'px';
	aSpan[3].style.top=y3+'px';
	aSpan[4].style.left=x4+'px';
	aSpan[4].style.top=y4+'px';
	
	//内圆的初始位置
	aDiv[0].style.left=Dx0+'px';
	aDiv[1].style.left=Dx1+'px';
	aDiv[1].style.top=Dy1+'px';
	aDiv[2].style.left=Dx2+'px';
	aDiv[2].style.top=Dy2+'px'; 
	aDiv[3].style.left=Dx3+'px';
	aDiv[3].style.top=Dy3+'px';
	aDiv[4].style.left=Dx4+'px';
	aDiv[4].style.top=Dy4+'px';
	
	//角度转弧度
	function d2a(n){
		return Math.PI/180*n;
	}
	
	//外圆
	function outMove(){
		n0+=10;
		n1+=10;
		n2-=10;
		n3+=10;
		n4-=10;

		if(n0>=360)n0=0;
		if(n1>=360)n1=0;
		if(n2>=360)n2=0;
		if(n3>=360)n3=0;
		if(n4>=360)n4=0;

		aSpan[0].style.left=x0+Math.sin(d2a(n0))*R+'px';
		aSpan[0].style.top=y0-Math.cos(d2a(n0))*R+'px';
		aSpan[1].style.left=x1+Math.sin(d2a(n1))*R-Math.sin(d2a(70))*R+'px';
		aSpan[1].style.top=y1-Math.cos(d2a(n1))*R+Math.cos(d2a(70))*R+'px';
		aSpan[2].style.left=x2+Math.sin(d2a(n2))*R-Math.sin(d2a(40))*R+'px';
		aSpan[2].style.top=y2+Math.cos(d2a(n2))*R-Math.cos(d2a(40))*R+'px';
		aSpan[3].style.left=x3-Math.sin(d2a(n3))*R+Math.sin(d2a(40))*R+'px';
		aSpan[3].style.top=y3+Math.cos(d2a(n3))*R-Math.cos(d2a(40))*R+'px';
		aSpan[4].style.left=x4-Math.sin(d2a(n4))*R+Math.sin(d2a(70))*R+'px';
		aSpan[4].style.top=y4-Math.cos(d2a(n4))*R+Math.cos(d2a(70))*R+'px';
	}
	setInterval(function(){
		outMove();
	},150);

	for(var i=0;i<aSpan.length;i++){
		aSpan[i].innerHTML=i;
		aSpan[i].style.background='rgb('+rnd(0,256)+','+rnd(0,256)+','+rnd(0,256)+')';
	}

	//内圆
	function inMove(){
		Dn0+=10;
		Dn1+=10;
		Dn2-=10;
		Dn3+=10;
		Dn4-=10;

		if(Dn0>=360)Dn0=0;
		if(Dn1>=360)Dn1=0;
		if(Dn2>=360)Dn2=0;
		if(Dn3>=360)Dn3=0;
		if(Dn4>=360)Dn4=0;

		aDiv[0].style.left=Dx0-Math.sin(d2a(Dn0))*R2+'px';
		aDiv[0].style.top=Dy0-Math.cos(d2a(Dn0))*R2+'px';
		aDiv[1].style.left=Dx1-Math.sin(d2a(Dn1))*R2-Math.sin(d2a(70))*R2+'px';
		aDiv[1].style.top=Dy1-Math.cos(d2a(Dn1))*R2+Math.cos(d2a(70))*R2+'px';
		aDiv[2].style.left=Dx2-Math.sin(d2a(Dn2))*R2-Math.sin(d2a(40))*R2+'px';
		aDiv[2].style.top=Dy2+Math.cos(d2a(Dn2))*R2-Math.cos(d2a(40))*R2+'px';
		aDiv[3].style.left=Dx3+Math.sin(d2a(Dn3))*R2+Math.sin(d2a(40))*R2+'px';
		aDiv[3].style.top=Dy3+Math.cos(d2a(Dn3))*R2-Math.cos(d2a(40))*R2+'px';
		aDiv[4].style.left=Dx4+Math.sin(d2a(Dn4))*R2+Math.sin(d2a(70))*R2+'px';
		aDiv[4].style.top=Dy4-Math.cos(d2a(Dn4))*R2+Math.cos(d2a(70))*R2+'px';
	}
	setInterval(function(){
		inMove();
	},150);
	
	for(var i=0;i<aDiv.length;i++){
		aDiv[i].innerHTML=i+5;
		aDiv[i].style.background='rgb('+rnd(0,256)+','+rnd(0,256)+','+rnd(0,256)+')';
	}


	
	//计算
	var oAdd=document.querySelector('#add');
	var oMinus=document.querySelector('#minus');
	var oMultiply=document.querySelector('#multiply');
	var oDivide=document.querySelector('#divide');
	var oSign=document.querySelector('#sign');
	var oClear=document.querySelector('#clear');
	var oResult=document.querySelector('#result');

	$(function(){
		var k='';
		var n=0;
		var m=0;
		var swit=true;
		$('#out span,#in div').on('tap',function(){
			if(swit){
				n=this.innerHTML;
				oResult.innerHTML=n;	
			}else{
				m=this.innerHTML;
				oResult.innerHTML+=m;
			}
			swit=!swit;
		});
		
		$('#add').on('tap',function(){
			k='+';
			oResult.innerHTML+='+';
		});
		$('#minus').on('tap',function(){
			k='-';
			oResult.innerHTML+='-';
		});
		$('#multiply').on('tap',function(){
			k='*';
			oResult.innerHTML+='*';
		});
		$('#divide').on('tap',function(){
			k='/';
			oResult.innerHTML+='/';
		});
		
		$('#clear').on('tap',function(){
			k='';
			oResult.innerHTML='';
		});

		$('#sign').on('tap',function(){
			switch(k){
				case '+':oResult.innerHTML=parseInt(n)+parseInt(m);break;
				case '-':oResult.innerHTML=parseInt(n)-parseInt(m);break;
				case '*':oResult.innerHTML=parseInt(n)*parseInt(m);break;
				case '/':oResult.innerHTML=parseInt(m)/parseInt(n);break;
			}
		})
	});


//-----------------------page4 立方体-----------------------
	var oBox=document.querySelector('.box');

	(function(){
		var x=30;
		var y=-60;
		
		oBox.addEventListener('touchstart',function(ev){
			var disX=ev.targetTouches[0].pageX-x;
			var disY=ev.targetTouches[0].pageY-y;
				
				
			function fnMove(ev){
				x=ev.targetTouches[0].pageX-disX;
				y=ev.targetTouches[0].pageY-disY;
				oBox.style.WebkitTransform='perspective(1200px) rotateX(-'+y+'deg) rotateY('+x+'deg)';
			}
			function fnEnd(ev){
				document.removeEventListener('touchmove',fnMove,false);
				document.removeEventListener('touchend',fnEnd,false);				
			}
			document.addEventListener('touchmove',fnMove,false);
			document.addEventListener('touchend',fnEnd,false);
			ev.preventDefault();	
		},false);
	})();

//-----------------------page5 抛体运动-----------------------
	;(function(){
		var oBox3=document.querySelector('#box3');
		var oDiv=document.querySelector('#div1');
		var oW=document.documentElement.clientWidth-oDiv.offsetWidth;
		var oH=oBox3.offsetHeight-oDiv.offsetHeight;
		var speedX=0;
		var speedY=0;
		var lastX=0;
		var lastY=0;
		var timer=null;
		var i=0;

		function collision(){
			clearInterval(timer);
			timer=setInterval(function(){
				speedY+=3;
				var l=oDiv.offsetLeft+speedX;
				var t=oDiv.offsetTop+speedY;
				if(l<=0){
					l=0;
					speedX*=-.7;
					speedY*=.7;
				}
				if(l>=oW){
					l=oW;
					speedX*=-.7;
					speedY*=.7;
				}
				if(t<=0){
					t=0;
					speedY*=-.7;
					speedX*=.7;
				}
				if(t>=oH){
					t=oH;
					speedY*=-.7;
					speedX*=.7
				}
				oDiv.style.left=l+'px';
				oDiv.style.top=t+'px';
				if(Math.abs(speedX)<1) speedX=0;
				if(Math.abs(speedY)<1) speedY=0;
				if(speedX==0 && speedY==0 && t==oH){
					clearInterval(timer)
				}
			},30)
		}

		oDiv.addEventListener('touchstart',function(ev){
			var disX=ev.targetTouches[0].clientX-oDiv.offsetLeft;
			var disY=ev.targetTouches[0].clientY-oDiv.offsetTop;

			function fnMove(ev){
				var oEvent=ev||event;

				oDiv.style.left=ev.targetTouches[0].clientX-disX+'px';
				oDiv.style.top=ev.targetTouches[0].clientY-disY+'px';

				speedX=ev.targetTouches[0].clientX-lastX;
				speedY=ev.targetTouches[0].clientY-lastY;
				lastX=ev.targetTouches[0].clientX;
				lastY=ev.targetTouches[0].clientY;
			}
			function fnEnd(ev){
				document.removeEventListener('touchmove',fnMove,false);
				document.removeEventListener('touchend',fnEnd,false);
				collision();
			}
			document.addEventListener('touchmove',fnMove,false);
			document.addEventListener('touchend',fnEnd,false);
			ev.preventDefault();
		},false);
	})();
},false)