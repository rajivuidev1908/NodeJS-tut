const fs = require('fs');
var http = require('http');
var queryString = require('querystring');

http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' });
    console.log(req.url);
    if (req.url == '/') {
        res.write(`
        <form action="/submit" method="post">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name"><br><br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email"><br><br>
            <input type="submit" value="Submit">
        </form>
        `);
        res.end();
    }else if(req.url == '/submit'){ 
        //Create an Array
        let dataBody = [];
        req.on('data', (chunk)=>{
            dataBody.push(chunk);
        });
        req.on('end', ()=>{
            let rawData = Buffer.concat(dataBody).toString();
            let readableData = queryString.parse(rawData);
            console.log(readableData);
            fs.writeFileSync("html/" + readableData.name + ".txt", "This is Rajiv Kumar", (err)=>{
                if(err) {
                    res.write("500 Error");
                }else {
                    res.write("File Created Successfully");
                }
            });
        });
        
        res.write("Form Submitted Successfully......");
        res.end();
    } else {
        res.write("Page Not Found");
    }
    res.end();
}).listen(5000);

