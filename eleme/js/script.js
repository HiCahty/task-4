window.onload=function(){
	addLoadEvent(erweima());
	addLoadEvent(searchbox());
}


function addLoadEvent(func){
	var oldonload=window.onload;
	if(typeof window.onload!='function'){
		window.onload=func;
	}
	else{
		window.onload=function(){
			oldonload();
			func();
		}
	}
}

//导航条部分内容隐藏的显示
function erweima(){
	//menu-height二维码
	var $speciala=$("#speciala");
	var $delsao=$("#delsao");
	//menu-right二维码
	var $delsao2=$("#delsao2");
	var $qrcode=$("qrcode");
	//menu-height二维码
	speciala.onmouseover=function(){
		delsao.style.display="block";
	}
	speciala.onmouseout=function(){
		delsao.style.display="none";
	}
	//menu-right二维码
	qrcode.onmouseover=function(){
		delsao2.style.display="block";
	}
	qrcode.onmouseout=function(){
		delsao2.style.display="none";
	}
}

//右侧导航条显示与隐藏
function iconexplain(){
	var $iconex=$('.icon-explain');
}




//搜索框伸缩
function searchbox(){
	var $searinput=$('#searinput');
	searinput.onfocus=function(){
		Move.animove(searinput,{width:270});
	}
	searinput.onblur=function(){
		Move.animove(searinput,{width:200});
	}
}


