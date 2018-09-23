const fs = require('fs');
const http = require('http');
http.createServer((req,res)=>{
	//response.writeHead(响应状态码，响应头对象): 发送一个响应头给请求。
	res.writeHead(200,{'Content-Type':'text/html'})
	var sHtml = '';
	fs.readFile(__dirname+'\\mine_clearance.html','utf-8',(error,data)=>{
		if(error){
			sHtml = error;
		}else{
			sHtml = data;
			res.end(sHtml);
		}
	});
}).listen(80);//端口号