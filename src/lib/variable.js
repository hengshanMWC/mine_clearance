//连续点击定时器会停
var oDiv = $('#A');
var oDivB = $('#B');
var oInput = $('#dian');

var oDivld = getClass(oDiv,'ld')[0];
var oDivkk = getClass(oDiv,'kk')[0];
var oDivdi  =  getClass(oDiv,'di')[0];//备雷地
var oDiv1 = getClass(oDivB,'B1')[0];
var oDiv2 = getClass(oDivB,'B2')[0];
var oDiv3 = getClass(oDivB,'B3')[0];

var OCr_di = getClass(oDivdi,'cr_di')[0];//布雷地
var aInput = oDivkk.getElementsByTagName('input');
oInput.dian = true;//让榜单有2重点击效果
var	come_back = {};//储存本局.用于重开本局
var b_back = false;//判断是否需要重开
var oD = null;//定时器
var difficulty = {//雷局
	num:0,
	numX:0,
	numY:0,
	lei:0,
}
oDivdi.red = 0;