 function getStyle(obj,name){
	return (obj.currentStyle||getComputedStyle(obj,false))[name];
}    														
function move(obj,json,options){
  	var start={};		
	var dis={};
	for(var name in json){
		start[name]=parseFloat(getStyle(obj,name));
		dis[name]=json[name]-start[name];
	}
	options=options || {};   //有options这个json就用它，没有就定义一个
	options.time=options.time ||700;  //options中有time值就用，没有就定义
	options.type=options.type ||'ease-in';//options中有type值就用，没有就定义
	var icount=parseInt(options.time/30);  //执行总次数
	var n=0;
	
	clearInterval(obj.timer); 
	obj.timer=setInterval(function(){
		n++;
		for(var name in json){
			switch(options.type){
				case 'linear':
					var a=n/icount;
					var cur=start[name]+dis[name]*a;  //匀速
					break;
				case 'ease-in':
					var a=n/icount;
					var cur=start[name]+dis[name]*a*a*a;  //加速
					break;
				case 'ease-out':
					var a=1-n/icount;
					var cur=start[name]+dis[name]*(1-a*a*a);  //匀减速
					break;
			}
			if(name=='opacity'){
				obj.style.opacity=cur;
				obj.style.filter='alpha(opacity=cur*100)';
			}else{
				obj.style[name]=cur+'px';  //[]接收行间样式
			}
		}	
		if(n==icount){
			clearInterval(obj.timer);
			options.end && options.end();
		}
	},30)
}
