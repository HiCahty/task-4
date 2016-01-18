var Move={
	animove:function(obj,json,fn) {
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			//1.读当前值
			for(var attr in json){
				var icur=0;
				if(attr=='opacity')
					icur=Math.round(parseFloat(Else.getStyle(obj,attr)*100));
				else
					icur=parseInt(Else.getStyle(obj,attr));
				//2.算速度
				var iSpeed=(json[attr]-icur)/8;
				iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
				//检测停止
				if(icur==json[attr]){
					clearInterval(obj.timer);
					if (fn) {fn()};//链式动画
				}
				else{
					if (attr=='opacity') {
						obj.style.filter='alpha(opacity:'+(icur+iSpeed)+')';
						obj.style.opacity=(icur+iSpeed)/100;
					}
					else obj.style[attr]=icur+iSpeed+'px';
				}
			}
		},10)
	},
}

var Else={
	getStyle:function (obj,attr){
		if(obj.currentStyle)
			return obj.currentStyle[attr];
		else
			return getComputedStyle(obj,false)[attr];	
	},
}
