if(IsPC()){
	oDivld.onmousedown = function(e){//用运动的鼠标位置减去按下的鼠标位置
		var v = e || event;
		var mL = e.clientX - oDivld.offsetLeft;
		document.onmousemove = function(e){
			var v=e || event;
			var mML = v.clientX - mL;
			if(mML>oDiv.offsetWidth-oDivld.offsetWidth){
				mML=oDiv.offsetWidth-mML.offsetWidth;
				//oDivdi.state = true;
				fnJC(fnP);
			}
			if(mML<0){
			   mML=0;
			}
			oDivld.style.left=mML+'px';
		}
		document.onmouseup = function(){
			if(oDivld.offsetLeft!=0){
				setStyle(oDivld,10,{left:0});
			}
			document.onmousemove=null;
			document.onmouseup=null;
		}
		return false;
	}
}else{
	oDivld.innerHTML = '新局';
	oDivld.onclick = function(){
		//oDivdi.state = true;
		fnJC(fnP);
	}
}