fnRankingList();
$('.num_box>button').click();
fnJC(fnP);
aInput[1].value = difficulty.lei - oDivdi.red;
$('#come_back').onclick = function(){
	if(b_back){
		fnJC();
		oDivdi.replaceChild(come_back,OCr_di);
		OCr_di = come_back;
		fnM();
	}
}

function fnJC(fn){//集成的
    clearInterval(oD);
	while(OCr_di.children.length){
		OCr_di.removeChild(OCr_di.children[0]);
	}
	aInput[0].value=0;
	oDivdi.red=0;
	aInput[1].value= difficulty.lei - oDivdi.red;
	if(fn)fn();
	oDivdi.onclick = function(e){
		var oButton = e.target;
		if(oButton.nodeName == 'BUTTON'){
			if(fn){
				come_back = false;
				fnL(oButton);//设置雷数
			}
			fnRemove(oButton);//排雷
			fnKS();//计时
			fnEvent();//事件
		}
	}
	oDivdi.oncontextmenu = function(){
		return false;
	}
}
function fnKS(){//计时
    clearInterval(oD);
    if(aInput[0].value == 0)++aInput[0].value;
	oD = setInterval(function(){
		++aInput[0].value;
	},1000);
}
function fnEvent(){
	oDivdi.onclick = function(e){
		var oButton = e.target
		if(oButton.nodeName == 'BUTTON' && oButton.className.indexOf('hong') == -1){
			fnRemove(oButton);
		}
	}
	oDivdi.oncontextmenu = function(e){
		if(e.target.nodeName == 'BUTTON'){
			fnYJ.call(e.target);
		}
		return false;
	}
}

function fnYJ(){//右键操作
	var cN = this.className;
	switch(cN){
		case '':
		if(oDivdi.red < difficulty.lei){
			this.className = 'hong';
			oDivdi.red++;//设置上限++
		}else{
			this.className = 'huang';
		}
		break;
		case 'hong':
		this.className = 'huang';
		oDivdi.red--;//设置上限--;
		break;
		case 'huang':
		this.className = '';
	}
	aInput[1].value = difficulty.lei - oDivdi.red;
}

function fnP(){//局初始化
	b_back = false;
    for(var i=0;i<difficulty.num;i++){
	    var oD=document.createElement('div');
	    OCr_di.appendChild(oD);
	    var oI=document.createElement('button');
	    oI.zi = 0;//清除后显示的
	    oI.z = i;//下标
	    // oI.innerText = i;
	    oD.appendChild(oI);
    }
    OCr_di.style.height = OCr_di.children[0].offsetHeight * difficulty.numY + 'px'
    OCr_di.style.width = OCr_di.children[0].offsetWidth * difficulty.numX + 2 + 'px';
}
//设置雷数
//oButton是当前第一次触发的按钮，所以不能为雷
function fnL(oButton){
	b_back = true;
	var aL = [],
		mL,oB;
	while(aL.length < difficulty.lei){
		mL = parseInt(Math.random() * difficulty.num);//下标
		oB = OCr_di.children[mL].firstElementChild;//按钮
		if(aL.every(val=>val!=mL) && oB != oButton){
			oB.zi = '雷';
			aL.push(mL);
		}
	}
	fnM();
}
//初始化按钮块属性
function fnM(){//
	fnc_M();
	var stateDom = OCr_di.children;//雷地
	for(var z = 0,len = stateDom.length;z<len;z++){
		var north = z - difficulty.numX;//北
		var south = z + difficulty.numX;//南
		var oButton = stateDom[z].firstElementChild;//清雷按钮
		if(oButton.zi != '雷'){
		    if(z % difficulty.numX == 0){//判断是否是每行的第一个//左边
			    if(z == 0){//上
					 oButton.aA = [
						 stateDom[south].firstElementChild,//南
						 stateDom[z + 1].firstElementChild,//东
						 stateDom[south + 1].firstElementChild,//东南
					 ];
			    }else if(z == difficulty.num-difficulty.numX){//下
					oButton.aA=[
						 stateDom[north].firstElementChild,//北
						 stateDom[z + 1].firstElementChild,//东
						 stateDom[north + 1].firstElementChild,//东北
					];
			    }else{
					oButton.aA = [
						 stateDom[north].firstElementChild,//北
						 stateDom[south].firstElementChild,//南
						 stateDom[z + 1].firstElementChild,//东
						 stateDom[north + 1].firstElementChild,//东北
						 stateDom[south + 1].firstElementChild,//东南
					];
			    }
		    }else if((z + 1) % difficulty.numX == 0){//右边
				if((z+1)==difficulty.numX){//上
					oButton.aA = [
						 stateDom[south].firstElementChild,//南
						 stateDom[z - 1].firstElementChild,//西
						 stateDom[south - 1].firstElementChild,//西南
					];
				}else if(z+1==difficulty.num){//下
					oButton.aA = [
						 stateDom[north].firstElementChild,//北
						 stateDom[z - 1].firstElementChild,//西
						 stateDom[north - 1].firstElementChild,//西北
					];
				}else{
					oButton.aA = [
						 stateDom[north].firstElementChild,//北
						 stateDom[south].firstElementChild,//南
						 stateDom[z - 1].firstElementChild,//西
						 stateDom[north - 1].firstElementChild,//西北
						 stateDom[south - 1].firstElementChild,//西南
					];
				}
			}else if(z < difficulty.numX){//不是雷，并且余数大于0小于difficulty.numX-1，并且必须第一行//上边
			    oButton.aA = [
						 stateDom[south].firstElementChild,//南
						 stateDom[z - 1].firstElementChild,//西
						 stateDom[z + 1].firstElementChild,//东
						 stateDom[south - 1].firstElementChild,//西南
						 stateDom[south + 1].firstElementChild,//东南
			    ];
		    }else if(z > difficulty.num - difficulty.numX){//下边
			    oButton.aA = [
						 stateDom[north].firstElementChild,//北
						 stateDom[z - 1].firstElementChild,//西
						 stateDom[z + 1].firstElementChild,//东
						 stateDom[north - 1].firstElementChild,//西北
						 stateDom[north + 1].firstElementChild,//东北
			    ];
			}else{
				oButton.aA = [
						 stateDom[north].firstElementChild,//北
						 stateDom[south].firstElementChild,//南
						 stateDom[z - 1].firstElementChild,//西
						 stateDom[z + 1].firstElementChild,//东
						 stateDom[north + 1].firstElementChild,//东北
						 stateDom[south + 1].firstElementChild,//东南
						 stateDom[north - 1].firstElementChild,//西北
						 stateDom[south - 1].firstElementChild,//西南
				];
			}
			fnText(oButton);
		}
	}			
}
//重开保存
function fnc_M(){//
	come_back = OCr_di.cloneNode(true);
	Array.from(OCr_di.children).forEach((val,i) => {
		var oButton = come_back.children[i].firstElementChild;
		var vB = val.firstElementChild;
		oButton.z = vB.z;
		oButton.zi = vB.zi;
	})
}
//设置显示周围有多少个雷，
function fnText(oButton){
	oButton.aA.forEach(val => {
		if(val.zi == '雷')oButton.zi++;
	});
}
function fnFX(oButton){//OCr_di子数组，下标，上下，方向组，是否触发递归扫
	oButton.aA.forEach(val => {
		//该按钮是否删除 并且 没有被设置成疑雷
		if(!val.b && val.className.indexOf('hong') == -1)fnRemove(val);
	})
}
function fnRemove(oButton){//点击删除(OCr_di的子数组,位置,边长,方向)
	var mZ = oButton.z;
	var parent = oButton.parentNode;
	parent.removeChild(oButton);
	oButton.b = true;//下次清雷不会被触发
	var aButton = OCr_di.getElementsByTagName('button');
	if(oButton.zi != '雷' && aButton.length == difficulty.lei){
		if(Array.from(aButton).every(val=>val.zi == '雷')){//胜利条件：按键个数等于雷个数
		     clearInterval(oD);
		     fnEnd();
			 if(parseInt(aInput[0].value) > parseInt(getCookieK('B3'))){
			     alert(aInput[0].value + '秒完成,犀利');
			 }else{
				 var sBan = '探花';
				 var mMiao = parseInt(aInput[0].value);
				 var mB2 = parseInt(getCookieK('B2'));
				 var mB1 = parseInt(getCookieK('B1'));
				 if(mMiao < mB2 || !mB2){
					 setCookie('B3',mB2,1000);
					 if(mMiao < mB1 || !mB1){
						 setCookie('B2',mB1,1000);
					     setCookie('B1',mMiao,1000);
						 sBan = '状元'
					 }else{
						 setCookie('B2',mMiao,1000);
						 sBan = '榜眼';
					 }
				 }else{
					 setCookie('B3',mMiao,1000);
				 }
				 var sName = prompt('恭喜你以' + mMiao + '秒成为' + sBan + ',愿你名留青史.请填下你的姓名或者别号','路人');

				 switch (sBan)
				 {
					 case '探花':
					 setCookie('o3',sName,1000);
					 break;
					 case '榜眼':
					 setCookie('o3',getCookieK('o2'),1000);
					 setCookie('o2',sName,1000);
					 break;
					 case '状元':
					 setCookie('o3',getCookieK('o2'),1000);
					 setCookie('o2',getCookieK('o1'),1000);
					 setCookie('o1',sName,1000);
					 console.log(sName);
					 break;	 
				 }
				 fnRankingList();
			 }
		}
	}
	if(oButton.zi){//触雷或者周围有雷
	    parent.innerHTML = oButton.zi;
		if(oButton.zi == '雷'){
		    fnEnd();
			if(confirm('触雷失败是否重新开局')){
				//oDivdi.state  =  true;
				//oDivdi.abc = false;
				fnJC(fnP);
			}else{
				clearInterval(oD);
			}
		}
	}else{//周围都没有雷会自动递归清楚周围
		fnFX(oButton);
	}
}
function fnEnd(){
	oDivdi.onclick = null;
	oDivdi.oncontextmenu = function(){
		return false;
	}
}
