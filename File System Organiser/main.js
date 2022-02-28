let inputArr = process.argv.slice(2);
// console.log(inputArr);


let command = inputArr[0];
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

}

function helpfn(dirPath) {
    console.log(`
        // node main.js help
        // node main.js organizer "directoryPath"
        // node main.js tree "directoryPath
        `);

}