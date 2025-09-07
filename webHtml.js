const fs = require('fs');
var http = require('http');

http.createServer((req, res)=>{
    fs.readFile('html/web.html', (err, data)=>{
        if(err){
            res.writeHead(404);
            res.write("Error: File Not Found");
            res.end();
        }else{
            res.write(data);
        }
        res.end();
    });
}).listen(4000);