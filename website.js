var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
    let colletHeaderData;
    fs.readFile('website/header.html', 'utf-8', (err, headerData) => {
        if (err) {
            res.writeHead(404, { 'content-type': 'text/html' });
            res.write("File Not Found");
        }
        colletHeaderData = headerData;

    });
    if (req.url == '/') {
        fs.readFile('website/index.html', (err, data) => {
            if (err) {
                res.writeHead(404, { 'content-type': 'text/html' });
                res.write("File Not Found");
            } else {
                res.writeHead(200, { 'content-type': 'text/html' });
                res.write(colletHeaderData + data);
                res.end();
            }

        });
    }
    else if (req.url == '/about') {
        fs.readFile('website/about.html', (err, aboutData) => {
            if (err) {
                res.writeHead(404, { 'content-type': 'text/html' });
                res.write("File Not Found");
            }
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write(colletHeaderData + aboutData);
            res.end();

        });
    } 
    else if (req.url == '/contact') {
        fs.readFile('website/contact.html', (err, contactData) => {
            if (err) {  
                res.writeHead(404, { 'content-type': 'text/html' });
                res.write("File Not Found");
            }
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write(colletHeaderData + contactData);
            res.end();
        });
    } else if (req.url == '/style.css') {
        fs.readFile('website/style.css', 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(404, { 'content-type': 'text/plain' });
                res.write("File Not Found");
                return false
            }
            res.writeHead(200, { 'content-type': 'text/css' });
            res.write(data);
            res.end();


        });
    }
}).listen(4000);