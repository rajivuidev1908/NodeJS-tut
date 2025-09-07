var path = require('path');

console.log("File Name: " + path.basename(__filename));
console.log("Directory Name: " + path.dirname(__filename));
console.log("File Extension: " + path.extname(__filename));
console.log("Parse: " + JSON.stringify(path.parse(__filename)));
console.log("Join: " + path.join(__dirname, 'html', 'file.html'));

console.log("Normalize: " + path.normalize('D://02NodeJs/NodeJS-tut//html//file.html'));
console.log("Resolve: " + path.resolve('html', 'file.html'));       
console.log("Is Absolute: " + path.isAbsolute('D://02NodeJs/NodeJS-tut//html//file.html'));
console.log("Is Absolute: " + path.isAbsolute('./html/file.html'));
console.log("Relative: " + path.relative('D://02NodeJs/NodeJS-tut//html//file.html', 'D://02NodeJs/NodeJS-tut//path.js'));
console.log("Sep: " + path.sep);
console.log("Delimiter: " + path.delimiter);
console.log("Format: " + path.format({
    root: 'D:/',
    dir: 'D:/02NodeJs/NodeJS-tut/html',
    base: 'file.html'
}));    
console.log("Format: " + path.format({
    root: 'D:/',
    dir: 'D:/02NodeJs/NodeJS-tut/html',
    name: 'file',
    ext: '.html'
}));
console.log("Format: " + path.format({
    base: 'file.html'
}));

