var fs = require('fs');

var operation = process.argv[2];

console.log("Operation == " + operation);

if (operation == 'create') {
    var name = process.argv[3];
    var content = process.argv[4];
    fs.writeFileSync("crudfiles/" + name + ".txt", content, (err) => {
        if (err) {
            console.log("500 Error");
        } else {
            console.log("File Created Successfully");
        }
    });
}
if (operation == 'update') {
    name = process.argv[3];
    content = process.argv[4];
    fs.appendFileSync("crudfiles/" + name + ".txt", content, (err) => {
        if (err) {
            console.log("500 Error");
        } else {
            console.log("File Updated Successfully");
        }
    });
}
if (operation == 'delete') {
    name = process.argv[3];
    fs.unlinkSync("crudfiles/" + name + ".txt", (err) => {
        if (err) {
            console.log("500 Error");
        } else {
            console.log("File Deleted Successfully");
        }
    });
}
if (operation == 'read') {
    name = process.argv[3];
    try {
        let read = fs.readFileSync("crudfiles/" + name + ".txt", "utf-8");
        console.log("Read: " + read);
        console.log("File Read Successfully");
    } catch (err) {
        console.log("500 Error");
    }
}



