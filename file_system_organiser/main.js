#!/usr/bin/env node

let inputArr = process.argv.slice(2);
const { dir } = require("console");
let fs = require("fs");
let path = require("path");
// console.log(inputArr);
let command = inputArr[0];
let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', 'xz'],
    documents: ['docx', 'dox', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', 'deb']
}

switch (command) {
    case "tree":
        treefn(inputArr[1]);
        break;
    case "organize":
        organizefn(inputArr[1]);
        break;
    case "help":
        helpfn();
        break;
    default:
        console.log("Please 🙏 Input right command");
        break;
}


function treefn(dirPath) {
    // let destPath;
    if (dirPath == undefined) {
        // console.log("Kindly enter the path");
        treeHelper(process.cwd(), ""); // cwd=currWorkingDir
        return;
    } else {
        let doesExist = fs.existsSync(dirPath);
        if (doesExist) {
            treeHelper(dirPath, "");
        } else {
            console.log("Kindly enter the correct path");
            return;
        }
    }
}

function treeHelper(dirPath, indent) {
    // is file or folder
    let isFile = fs.lstatSync(dirPath).isFile();
    if (isFile == true) {
        let fileName = path.basename(dirPath);
        console.log(indent + " |⑉⑉⑉⑉ " + fileName)
    } else {
        let dirName = path.basename(dirPath);
        console.log(indent + " ╹⑉⑉⑉⑉ " + dirName);
        let childrens = fs.readdirSync(dirPath);
        for (let i = 0; i < childrens.length; i++) {
            let childPath = path.join(dirPath, childrens[i]);
            treeHelper(childPath, indent + "\t");
        }
    }
}





function organizefn(dirPath) {
    // console.log("The command implemented for ", dirPath);
    // 1. input -> directory path given
    let destPath;
    if (dirPath == undefined) {
        // console.log("Kindly enter the path");
        destPath = process.cwd();
        return;
    } else {
        let doesExist = fs.existsSync(dirPath);
        if (doesExist) {
            // 2. create -> organied files -> directory
            destPath = path.join(dirPath, "organized_files")
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
        // now get data of all files except directories
        let isFile = fs.lstatSync(childAddress).isFile();
        if (isFile) {
            let category = getCategory(childNames[i]);
            // console.log(childNames[i], " belongs to --> ", category);
            // 4. copy/cut files to that organized directory
            sendFiles(childAddress, dest, category);
        }
    }
}

function sendFiles(srcFilePath, dest, category) {
    let categoryPath = path.join(dest, category);
    if (fs.existsSync(categoryPath) == false) {
        fs.mkdirSync(categoryPath);
    }
    let fileName = path.basename(srcFilePath);
    let destFilePath = path.join(categoryPath, fileName);
    fs.copyFileSync(srcFilePath, destFilePath);
    fs.unlinkSync(srcFilePath);
    console.log(fileName, " copied to ", category);
}

function getCategory(name) {
    let ext = path.extname(name);
    // console.log(ext);
    ext = ext.slice(1);
    for (let type in types) {
        let cTtypeArray = types[type];
        for (let i = 0; i < cTtypeArray.length; i++) {
            if (ext == cTtypeArray[i]) {
                return type;
            }
        }
    }
    return "others";
}





function helpfn(dirPath) {
    console.log(`
        // node main.js help
        // node main.js organizer "directoryPath"
        // node main.js tree "directoryPath
        `);

}