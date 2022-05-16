let server=require('http').createServer()

server.on('request',(req,res)=>{
	console.log("Hello World")
}).listen(4000)

