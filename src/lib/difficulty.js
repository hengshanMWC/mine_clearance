//设置难度
$('.num_box>button').onclick = function(){
	var num = $('.num_inp').value;
	var lei = $('.lei_inp').value;
	if(!/^[1-9][0-9]*\*[1-9][0-9]*$/.test(num)){
		alert('我求求你，请设置成数字*数字，不然运行不下去');
		return;
	}
	if(!lei>0){
		alert('没雷扫你个屁啊！');
		return;
	}
	num = num.split('*');
	if(num[0] <=1 || num[1]<=1){
		alert('请设置大于1的正整数');
		return;
	}
	difficulty.num = num[0]*num[1];
	difficulty.numX = parseInt(num[0]);
	difficulty.numY = parseInt(num[1]);
	difficulty.lei = parseInt(lei);
}