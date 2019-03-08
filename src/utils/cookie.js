	// JavaScript Document
function setCookie(key,value,m){//创建
	var oDate = new Date();
	oDate.setDate(oDate.getDate()+m);
	document.cookie = key + '=' + value + ";expires=" + oDate;
}
function getCookieK(key){//用key来查找，返回一个value
	var aCookie=document.cookie.split('; ');
	for(var i=0;i<aCookie.length;i++){
		var aA=aCookie[i].split('=');
		if(aA[0]==key){
			return aA[1];
		}
	}
	return '';
}
function getCookieV(value){//用value来查找，返回key数组
	var aV=[];
	var aCookie=document.cookie.split('; ');
	for(var i=0;i<aCookie.length;i++){
		var aA=aCookie[i].split('=');
		if(aA[1]==value){
			aV.push(aA[0]);
		}
	}
	return aV;
}
function removeCookieK(key){//删掉key相同的cookie
	setCookie(key,1,-1);
}
function removeCookieV(value){//删掉value相同的cookie
	var aV=getCookieV(value);
	for(var i=0;i<aV.length;i++){
		removeCookieK(aV[i]);
	}
}