var http = require('http');
var fs = require('fs');
var queryString = require('querystring');

http.createServer((req, res)=>{
    if(req.url == '/'){
        fs.readFile('html/form.html',(err,data)=>{
            if(err){
                res.writeHead(404,{'content-type':'text/html'});
                res.write("File Not Found");
            }else{
                res.writeHead(200,{'content-type':'text/html'});
                res.write(data);
            }
            res.end();
        })
    }else if(req.url == '/submit'){
        let dataBody = [];
        req.on('data',(chunk)=>{
            dataBody.push(chunk);
        });
        req.on('end', ()=>{
            let rawData = Buffer.concat(dataBody).toString();
            let redableData = queryString.parse(rawData);
            console.log(redableData);
        })
        res.write("Form Submitted Successfully");
        res.end();
    }else{
        res.write("Page Not Found");
        res.end();
    }
}).listen(6001);