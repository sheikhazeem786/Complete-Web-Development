let inputArr = process.argv.slice(2);
const { dir } = require("console");
let fs = require("fs");
let path = require("path");
// console.log(inputArr);
let command = inputArr[0];
utility.types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', 'xz'],
    documents: ['docx', 'dox', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', 'deb']
}
switch (command) {
    case "tree":
        treefn();
        break;
    case "organize":
        organizefn();
        break;
    case "help":
        helpfn();
        break;
    default:
        console.log("Please 🙏 Input right command");
        break;
}

function treefn(dirPath) {
    console.log("The command implemented for ", dirPath);

}

function organizefn(dirPath) {
    console.log("The command implemented for ", dirPath);
    // 1. input -> directory path given
    if (dirPath == undefined) {
        console.log("Kindly enter the path");
        return;
    } else {
        let doesExist = fs.existsSync(dirPath);
        if (doesExist) {
            // 2. create -> organied files -> directory
            let destPath = path.join(dirPath, "organized_files")
            if (fs.existsSync(destPath) == false) {
                fs.mkdirSync(destPath);
            }

        } else {
            console.log("Kindly enter the correct path");
            return;
        }
    }
    organizeHelper(dirPath, destPath);
}

function organizeHelper(src, dest) {
    // 3. identify categories of all the files present in that input directory
    let childNames = fs.readdirSync(src);
    // console.log(childNames);
    for (let i = 0; i < childNames.length; i++) {
        let childAddress = path.join(src, childNames[i]);
        let isFile = fs.lstatSync(childAddress).isFile();
        if (isFile) {
            console.log(childNames[i]);
            let category = getCategory(childNames[i]);
            // 4. copy/cut files to that organized directory
        }
    }
}

function getCategory(name) {
    let ext = path.extname(name);
    console.log(ext);
}





function helpfn(dirPath) {
    console.log(`
        // node main.js help
        // node main.js organizer "directoryPath"
        // node main.js tree "directoryPath
        `);

}