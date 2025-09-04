var data = require('./moduleexport.js');

console.log(data.userName);
for(var i=0; i<data.userName.length; i++){
    console.log(data.userName[i].firstName);
}