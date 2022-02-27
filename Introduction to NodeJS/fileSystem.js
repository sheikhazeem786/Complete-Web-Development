// File -> create,            read,               update,             delete, 
//         writeFileSync,     readFileSync,       appendFilesync,     unlinkSync 
let fs = require("fs");
// fs.readFileSync gives file in the form of binary buffer
// read
// let buffer = fs.readFileSync("testFile.js");
// print
// console.log("binary data", buffer);
// for print file in the form of String, use concatinate(+)
// console.log("String data -> " + buffer);

// creates a file in w mode
// fs.openSync("testFile.txt", "w");

// if  file doesn't exist -> creates then adds 
// if exist -> adds or replace content to the file
// fs.writeFileSync("testFile.txt", "I am fs.writeFileSync");

// update
// fs.appendFileSync("testFile.txt", "-> I am fs.appendFileSync");

// Folder(directory) -> create,     read,           delete
//                      mkdirSync,  readdirSyc,     rmdirSync

// //create folder
// fs.mkdirSync("meriDirectory");
// write content in it
// fs.writeFileSync("meriDirectory/meriFile.txt", "I am from fs.mkdirSync and written by fs.writeFileSync");
// fs.writeFileSync("meriDirectory/testFile2.txt", "This is second");
// fs.writeFileSync("meriDirectory/testFile3.txt", "This is third");

// // read folder
// let content = fs.readdirSync("meriDirectory");
// console.log(content);
// for (let i = 0; i < content.length; i++) {
//     console.log("Deleting file -> ", content[i]);
//     // remove file
//     fs.unlinkSync("meriDirectory/" + content[i]);
// }

// //remove directory
// fs.rmdirSync("meriDirectory");



// fs.existSync ->if a file exist at a path -> true/false
// let doesPathExists = fs.existsSync("testFile.txt");
// console.log(doesPathExists);
// doesPathExists = fs.existsSync("testFile2.txt");
// console.log(doesPathExists);

// // fs.lstatSync -> fs.lstatSync(path,options)
// let detailsObj = fs.lstatSync(__dirname + "\\fileSystem.js");
// let ans = detailsObj.isFile();
// console.log(ans);
// ans = detailsObj.isDirectory();
// console.log(ans);

// E:\Web Developement\Introduction to NodeJS\fileSystem.js
// E:\Web Developement\Introduction to NodeJS\testFile.js

for (let i = 1; i <= 10; i++) {
    let dirPathToMake = `Lecture-${i}`;
    fs.mkdirSync(dirPathToMake);
    fs.writeFileSync(dirPathToMake + "\\" + "readMe.md", `#readme for ${dirPathToMake}`);
}