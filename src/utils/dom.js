const $ = document.querySelector.bind(document)
function getStyle(oA,sS){//为什么了兼容
	if(oA.currentStyle){
		return oA.currentStyle[sS];
	}else{
		return getComputedStyle(oA)[sS];
	}
}
function getClass(obj,sClass){
	var aA=obj.getElementsByTagName('*');
	var aB=[];
	for(var i=0;i<aA.length;i++){
		if(aA[i].className==sClass){
			aB.push(aA[i]);
		}
	}
	return aB;
}