var http = require('http');

http.createServer((req, res) => {
    console.log(req.url);
    if (req.url == '/') {
        res.write("Home Page");
    } else if (req.url == '/about') {
        res.write("About Page");
    } else if (req.url == '/contact') {
        res.write("Contact Page");
    } else {
        res.write("Page Not Found");
    }
    res.end();
}).listen(3001);