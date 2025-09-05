var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World\n');
// }).listen(8080);

//console.log('Server running at http://127.0.0.1:8080/');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h1>Server Created</h1>");
    res.end();
}).listen(8081);

var age = 36;
http.createServer(function(req, res){
    res.writeHead(200,{'content-type':"text/json"})
    res.write("<h2>Server 2</h2>");
    res.write(
        `
        <!Doctype html>
        <html>
            <head>
                <title>My Page</title>
            </head>
            <body>
                <h1>Age: ${age}</h1>
            </body>
        </html>
        `
    )
    res.end();
}).listen(8082);