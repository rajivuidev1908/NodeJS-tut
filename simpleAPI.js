var http = require('http');
const { json } = require('stream/consumers');
const userData = [
    {
        id: 1,
        name: "Rajiv Kumar",
        location: "Kolkata",
        age: 25
    },
    {
        id: 2,
        name: "Manoj Kumar",
        location: "Pune",
        age: 26
    },
    {
        id: 3,
        name: "Atul Kumar",
        location: "Bangalore",
        age: 30
    },
    {
        id: 4,
        name: "Sourabh Kumar",
        location: "Noida",
        age: 37
    }
]
http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(userData));
    res.end();
}).listen(3000);