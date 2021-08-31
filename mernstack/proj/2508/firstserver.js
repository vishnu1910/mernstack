var http  = require('http');
http.createServer(function(req,res){
    res.end('L for lion')
}).listen(8000);

console.log('server is running')