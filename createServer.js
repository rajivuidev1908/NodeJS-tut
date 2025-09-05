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

http.createServer(function(req, res){
    res.writeHead(200,{'content-type':"text/html"})
    res.write("<h2>Server 2</h2>");
    res.end();
}).listen(8082);