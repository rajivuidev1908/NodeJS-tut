var http = require('http');

var arg = process.argv;
const port = arg[2];
console.log("Server is currently running on port - " + port);
http.createServer((req, res)=>{
    res.write("Port Number is: "+port);
    res.end();
}).listen(port);

