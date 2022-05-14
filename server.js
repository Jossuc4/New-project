let serveur={
    launch:function(serverPort){
        let httpServer=require('http').createServer()
        httpServer.on('request',(req,res)=>{
            res.end('Hello World')
        }).listen(serverPort)
    }
}
module.exports=serveur