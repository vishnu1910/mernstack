var http = require('http')
var fs = require('fs')
http.createServer(function(req,res){
    fs.readFile('demo.html',function(err,data){
        res.write(data);
        res.end();
    });
}).listen(8000);
