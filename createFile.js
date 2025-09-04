//Create file
var fs = require('fs');

fs.writeFileSync("read.txt","Welcome to NodeJS");
fs.writeFileSync("read.js","console.log('Hello from NodeJS');");
fs.writeFileSync("read.html","<h1>Hello from NodeJS</h1>");
fs.writeFileSync("read.css","h1{color:red;}");