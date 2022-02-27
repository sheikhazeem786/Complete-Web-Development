let cp = require("child_process");

// Open Calculator
// console.log("Trying to open Calculator");
// cp.execSync("calc");
// console.log("Opened Calculator");

// Open VS Code
// console.log("Trying to open VS Code");
// cp.execSync("code");
// console.log("Opened VS Code");

// Open Website
// console.log("Trying to open our Website ❤️");
// cp.execSync("start chrome https://magical-notes.web.app");
// console.log("Opened Website ❤️");

// Open JS file
let openFile = cp.execSync("node testFile.js");
console.log("OutPut is -> " + openFile);