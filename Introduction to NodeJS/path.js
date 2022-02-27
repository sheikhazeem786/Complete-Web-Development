let path = require("path");
// for (let i = 1; i <= 10; i++) {
//     let dirPathToMake = `Lecture-${i}`;
//     fs.mkdirSync(dirPathToMake);
//     fs.writeFileSync(path.join(dirPathToMake + "readMe.md"), `#readme for ${dirPathToMake}`);
// }
let ext = path.extname(path.join(__dirname, "testFile.js"));
console.log("ext - > ", ext);
let name = path.basename(__dirname);
console.log(name);
name = path.basename(path.join(__dirname, "testFile.js"));
console.log(name);