function setStyle(oA,mX,json,fnH){//节点，速率，样式，后续方法
	clearInterval(oA.oD);
	oA.oD=setInterval(function(){
		var bT=true;//循环json的没个要调的值，然后结束定时器
		for(var sS in json){
		    if(sS!='opacity'){
		         m=parseInt(getStyle(oA,sS));//获得该属性的值
		    }else{
		         m=Math.round(parseFloat(getStyle(oA,sS))*100);//小数点失去精，要四舍五入,透明度*100方便计算
		    }
		    var mS=(json[sS]-m)/mX;
		    mS=mS>0?Math.ceil(mS):Math.floor(mS);
			
			if(sS=='opacity'){
				oA.style.filter='alpha(opacity:'+(m+mS)+')';
				oA.style.opacity=(m+mS)/100;
			}else{
			    oA.style[sS]=m+mS+'px';
		    }
			if(m!=json[sS]){
			    bT=false;
		    }
		}
		if(bT){
			clearInterval(oA.oD);
		    if(fnH){
			   fnH();
	        }
		}
	},30);
}

function setY(oA,mZ,mJ,mS){//节点，目标值，增值，时间
		clearInterval(oA.oD);
		if(!oA.style.borderRadius){
			oA.style.borderRadius='1px';
		}
		var mM=parseInt(oA.style.borderRadius);
		oA.oD=setInterval(function(){
			if(mM!=mZ){
				mM=parseInt(oA.style.borderRadius)+mJ;
			    oA.style.borderRadius=mM+'px';
			}else{
				clearInterval(oA.oD);
			}
		},mS);

}