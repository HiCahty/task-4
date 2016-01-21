window.onload=function(){
	addLoadEvent(erweima());
	addLoadEvent(searchbox());
	addLoadEvent(menufixed());
    addLoadEvent(chooseList());
    addLoadEvent(TopBack());

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

//下拉菜单的显示与隐藏
function chooseList(){
    var choose1=document.getElementById("choose1");
    var choose2=document.getElementById("choose2");
    var Mchoose1=document.getElementById("Mchoose1");
    var Mchoose2=document.getElementById("Mchoose2");
    var MchoFrom1=document.getElementById("MchoFrom1");
    var MchoFrom2=document.getElementById("MchoFrom2");
    choose1.onmouseover=function(){
        choFrom1.style.display="block";
    }
    choFrom1.onmouseout=function(){
        choFrom1.style.display="none";
    }
    choose2.onmouseover=function(){
        choFrom2.style.display="block";
    }
    choFrom2.onmouseout=function(){
        choFrom2.style.display="none";
    }
    Mchoose1.onmouseover=function(){
        MchoFrom1.style.display="block";
    }
    MchoFrom1.onmouseout=function(){
        MchoFrom1.style.display="none";
    }
    Mchoose2.onmouseover=function(){
        MchoFrom2.style.display="block";
    }
    MchoFrom2.onmouseout=function(){
        MchoFrom2.style.display="none";
    }
}

//导航条固定层效果及瀑布流
function menufixed(){
	var flag=1;
	var Mscroll=document.getElementById('menuscroll');
    var topback=document.getElementById("topback");
	window.onscroll=function(e){
		e=e || window.event;
		var osTop=document.documentElement.scrollTop||document.body.scrollTop;
		console.log(osTop);
		if(osTop>=299){
			Mscroll.style.visibility="visible";
		}
		else{
			Mscroll.style.visibility="hidden";
		}

        //回到顶部效果的显示和隐藏
        if(osTop>500){
            topback.style.display="block";
        }else{
            topback.style.display="none";
        }

		//瀑布流
		var dataInt={
			'data1':[{'src':'yinuo.png'},{'src':'aibike.png'},{'src':'qiqike.png'},{'src':'ayi.png'}],
			'text1':[{'span':'10分钟'},{'span':'20分钟'},{'span':'30分钟'},{'span':'40分钟'}],
			'text2':[{'h':'伊诺食客'},{'h':'艾比克'},{'h':'奇奇客'},{'h':'阿姨奶茶'}],
			'text3':[{'span':'月售1314单'},{'span':'月售520单'},{'span':'月售0单'},{'span':'月售111单'}],
			'text4':[{'span':'10元起送/免费配送'},{'span':'10元起送/免费配送'},{'span':'10元起送/免费配送'},{'span':'10元起送/免费配送'}],
            'text5':[{'p':'该商家在线支付支持使用'},{'p':'该商家在线支付支持使用'},{'p':'该商家在线支付支持使用'},{'p':'该商家在线支付支持使用'}],
            'text6':[{'p':'在线支付满15立减4'},{'p':'在线支付满15立减4'},{'p':'在线支付满15立减4'},{'p':'在线支付满15立减4'}],
            'text7':[{'p':'新用户下单立减10元'},{'p':'新用户下单立减10元'},{'p':'新用户下单立减10元'},{'p':'新用户下单立减10元'}],
            'text8':[{'p':'跑男正能量套餐'},{'p':'跑男正能量套餐'},{'p':'跑男正能量套餐'},{'p':'跑男正能量套餐'}],
            'text9':[{'span':'十元起送'},{'span':'二十元起送'},{'span':'五元起送'},{'span':'十元起送'}],
            'text10':[{'span':'免费配送'},{'span':'免费配送'},{'span':'免费配送'},{'span':'免费配送'}],
            'text11':[{'span':'平均22分钟到达'},{'span':'平均20分钟到达'},{'span':'平均12分钟到达'},{'span':'平均19分钟到达'}],
            'text12':[{'p':'为了避免高峰期配送问题，请个各位上帝提前下单，提高我们的配送效率，尽快将美味可口的饭菜送到您的嘴边，让您一天有个美好的心情。小区要求送上楼的另收5元上楼服务费'},
            {'p':'为了避免高峰期配送问题，请个各位上帝提前下单，提高我们的配送效率，尽快将美味可口的饭菜送到您的嘴边，让您一天有个美好的心情。小区要求送上楼的另收5元上楼服务费'},
            {'p':'为了避免高峰期配送问题，请个各位上帝提前下单，提高我们的配送效率，尽快将美味可口的饭菜送到您的嘴边，让您一天有个美好的心情。小区要求送上楼的另收5元上楼服务费'},
            {'p':'为了避免高峰期配送问题，请个各位上帝提前下单，提高我们的配送效率，尽快将美味可口的饭菜送到您的嘴边，让您一天有个美好的心情。小区要求送上楼的另收5元上楼服务费'}],

		};
		if(checkscrollside()){
            var oParent = document.getElementById('merwrap');
            for(var i=0;i<dataInt.data1.length;i++){
                var oMerchant=document.createElement('div'); 				/*图片*/
                oMerchant.className='merchant';  //最外层merchant                 
                oParent.appendChild(oMerchant);             
                var oMerCon=document.createElement('div');
                oMerCon.className='merchant-content';//有padding的一层
                oMerchant.appendChild(oMerCon);
                var oMerImg=document.createElement('div');
                oMerImg.className='mer-image';//装图片的一层
                oMerCon.appendChild(oMerImg);
                var oImg=document.createElement('img');
                oImg.src='images/merchant/'+dataInt.data1[i].src;
                oMerImg.appendChild(oImg);

                var oImgSpan=document.createElement('span');						/*图片下的文字*/
                oImgSpan.innerHTML=dataInt.text1[i].span;
                oMerImg.appendChild(oImgSpan);


                                                                              
                var oMerText=document.createElement('div');           		/*标题*/
                oMerText.className='merchant-text';//有文字的一层
                oMerCon.appendChild(oMerText);
                var oMerh=document.createElement('h3');           	
                oMerh.innerHTML=dataInt.text2[i].h;
                oMerText.appendChild(oMerh);

                var oMerStar=document.createElement('div');          		/*评分*/      	
                oMerStar.className='icon-star';
                oMerText.appendChild(oMerStar);  
                var oMerI0=document.createElement('i');
                var oMerI1=document.createElement('i');
                var oMerI2=document.createElement('i');
                var oMerI3=document.createElement('i');
                var oMerI4=document.createElement('i');
                oMerI0.className='fa fa-star'; 
                oMerI1.className='fa fa-star'; 
                oMerI2.className='fa fa-star'; 
                oMerI3.className='fa fa-star';
                oMerI4.className='fa fa-star'; 
                oMerStar.appendChild(oMerI0);
                oMerStar.appendChild(oMerI1);
                oMerStar.appendChild(oMerI2);
                oMerStar.appendChild(oMerI3);
                oMerStar.appendChild(oMerI4);
                var oMerStarOn=document.createElement('div');          	    	
                oMerStarOn.className='icon-star-on';
                oMerStar.appendChild(oMerStarOn);  
                var oMerI00=document.createElement('i');
                var oMerI11=document.createElement('i');
                var oMerI22=document.createElement('i');
                var oMerI33=document.createElement('i');
                var oMerI34=document.createElement('i');
                oMerI00.className='fa fa-star'; 
                oMerI11.className='fa fa-star'; 
                oMerI22.className='fa fa-star'; 
                oMerI33.className='fa fa-star';
                oMerI34.className='fa fa-star-half'; 
                oMerStarOn.appendChild(oMerI00);
                oMerStarOn.appendChild(oMerI11);
                oMerStarOn.appendChild(oMerI22);
                oMerStarOn.appendChild(oMerI33);
                oMerStarOn.appendChild(oMerI34);  

                var oMerSpan1=document.createElement('span');          		/*小字*/      	
                oMerSpan1.className='merchant-ab';
                oMerSpan1.innerHTML=dataInt.text3[i].span;
                oMerText.appendChild(oMerSpan1);
                var oMerSpan2=document.createElement('span');          		   	
                oMerSpan2.innerHTML=dataInt.text4[i].span;
                oMerText.appendChild(oMerSpan2);

               	var oMerSquare=document.createElement('div');          		/*方形小图标*/      	
                oMerSquare.className='icon-square';
                oMerText.appendChild(oMerSquare);
                var oMerISq0=document.createElement('i');  
                var oMerISq1=document.createElement('i');
                var oMerISq2=document.createElement('i');
                var oMerISq3=document.createElement('i');
                oMerISq0.innerHTML="专";
                oMerISq1.innerHTML="减";
                oMerISq2.innerHTML="首";
                oMerISq3.innerHTML="15";
                oMerISq0.style.backgroundColor="#f4a937";
                oMerISq1.style.backgroundColor="#f07373";
                oMerISq2.style.backgroundColor="#70bc46";
                oMerISq3.style.backgroundColor="#f1884f";
               	oMerSquare.appendChild(oMerISq0);
                oMerSquare.appendChild(oMerISq1);
                oMerSquare.appendChild(oMerISq2);
                oMerSquare.appendChild(oMerISq3);

                var oMerabso=document.createElement('section');               /*绝对定位框*/       
                oMerabso.className='mer-abso';
                oMerchant.appendChild(oMerabso);
                var oMerdelta=document.createElement('div');               
                oMerdelta.className='delta';
                oMerabso.appendChild(oMerdelta);
                var oMerdeltaL=document.createElement('div');               
                oMerdeltaL.className='delta-line';
                oMerabso.appendChild(oMerdeltaL);
                var oMerabText=document.createElement('div');               
                oMerabText.className='abso-text';
                oMerabso.appendChild(oMerabText);
                var oMerabCon=document.createElement('div');               
                oMerabCon.className='abso-content';
                oMerabText.appendChild(oMerabCon);
                var oMerabH=document.createElement('h3');               
                oMerabH.innerHTML=dataInt.text2[i].h;
                oMerabCon.appendChild(oMerabH);
                var oMerabI0=document.createElement('i');  
                var oMerabI1=document.createElement('i');
                var oMerabI2=document.createElement('i');
                var oMerabI3=document.createElement('i');
                oMerabI0.innerHTML="专";
                oMerabI1.innerHTML="减";
                oMerabI2.innerHTML="首";
                oMerabI3.innerHTML="15";
                oMerabI0.style.backgroundColor="#f4a937";
                oMerabI1.style.backgroundColor="#f07373";
                oMerabI2.style.backgroundColor="#70bc46";
                oMerabI3.style.backgroundColor="#f1884f";
                var oMerabP1=document.createElement('p'); 
                oMerabP1.appendChild(oMerabI0);        
                oMerabCon.appendChild(oMerabP1);
                var oMerabP2=document.createElement('p');
                oMerabP2.appendChild(oMerabI1);               
                oMerabCon.appendChild(oMerabP2);
                var oMerabP3=document.createElement('p');
                oMerabP3.appendChild(oMerabI2);                    
                oMerabCon.appendChild(oMerabP3);
                var oMerabP4=document.createElement('p');  
                oMerabP4.appendChild(oMerabI3);                 
                oMerabCon.appendChild(oMerabP4);
                var textP1 = document.createTextNode(dataInt.text5[i].p);
                var textP2 = document.createTextNode(dataInt.text6[i].p);
                var textP3 = document.createTextNode(dataInt.text7[i].p);
                var textP4 = document.createTextNode(dataInt.text8[i].p);
                oMerabP1.appendChild(textP1);
                oMerabP2.appendChild(textP2);
                oMerabP3.appendChild(textP3);
                oMerabP4.appendChild(textP4);

                var oMergrey=document.createElement('div');             /*greybox内容*/
                oMergrey.className="greybox";
                var greySP1=document.createElement('span');
                greySP1.innerHTML=dataInt.text9[i].span;
                oMergrey.appendChild(greySP1);
                var greySP2=document.createElement('span');
                greySP2.innerHTML=dataInt.text10[i].span;
                greySP2.className='greyborder';
                oMergrey.appendChild(greySP2);
                var greySP3=document.createElement('span');
                greySP3.innerHTML=dataInt.text11[i].span;
                oMergrey.appendChild(greySP3);

                var parag=document.createElement('p');                 /*长段落内容*/
                parag.innerHTML=dataInt.text12[i].p;
                oMergrey.appendChild(parag);
                oMerabCon.appendChild(oMergrey);
                oMerabCon.appendChild(parag);

            }
            //为最右边的商家改变绝对定位块位置
            if(i==4){
                oMerabso.style.left=-265+'px';
                var deltaL=oMerabso.getElementsByTagName('div')[0];
                deltaL.style.left=261+'px';
                deltaL.style.borderColor="#fff";
                var deltalineL=oMerabso.getElementsByTagName('div')[1];
                deltalineL.style.transform="rotate(135deg)";
                deltalineL.style.left=258+'px';
            } 
            var clear=document.createElement('div');
            clear.className='clear';
            oParent.appendChild(clear); 
        }
	}

}
//判断是否加载
function checkscrollside(){
    var oParent=document.getElementById('merwrap');
    var amerchant=Else.getClassObj(oParent,'merchant');
    var lastPinH=amerchant[amerchant.length-1].offsetTop+Math.floor(amerchant[amerchant.length-1].offsetHeight/2);//创建【触发添加块框函数waterfall()】的高度：最后一个块框的距离网页顶部+自身高的一半(实现未滚到底就开始加载)
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    var documentH=document.documentElement.clientHeight;
    return (lastPinH<scrollTop+documentH)?true:false;//到达指定高度后 返回true，触发waterfall()函数
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

//回到顶部效果
function TopBack(){
    var topback=document.getElementById("topback");

    topback.onclick=function(){
        var timer=setInterval(function(){
            var osTop=document.documentElement.scrollTop||document.body.scrollTop;
            var ispeed=Math.floor(-osTop/6);
            document.documentElement.scrollTop=document.body.scrollTop=osTop+ispeed;
            if(osTop==0){
                clearInterval(timer);
            }
        },20)
    }
}
  

