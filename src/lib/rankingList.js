//榜单
function fnRankingList(){
 	var o1 = getCookieK('o1');
	var o2 = getCookieK('o2');
	var o3 = getCookieK('o3');
 	var B1 = getCookieK('B1');
 	var B2 = getCookieK('B2');
 	var B3 = getCookieK('B3');
 	B1 = isNaN(B1)?'':B1;
 	B2 = isNaN(B2)?'':B2;
 	B3 = isNaN(B3)?'':B3;
 	oDiv1.innerHTML = o1+':'+B1+'秒';
 	oDiv2.innerHTML = o2+':'+B2+'秒';
 	oDiv3.innerHTML = o3+':'+B3+'秒';
}
//榜首
oInput.onclick=function(){
	if(oInput.dian){
	    setStyle(oInput,10,{right:-oInput.offsetWidth},function(){
		    setStyle(oDivB,10,{right:-oDivB.offsetWidth},function(){
			    setStyle(oInput,10,{right:0});
				oInput.dian=false;
		    });
	    });
	}else{
		setStyle(oInput,10,{right:-oInput.offsetWidth},function(){
			setStyle(oDivB,10,{right:0},function(){
				setStyle(oInput,10,{right:0});
				oInput.dian=true;
			});
		})
	}
}