const fs = require("fs");

// fs.readFile('readme.txt', 'utf-8', (err, data) => {
// console.log(err, data);
// });

// const a = fs.readFileSync('readme.txt');
// console.log(a.toString());
// console.log("Finish!");

fs.writeFile('samplefile.txt', "This is a data", () => {
    console.log("Written to the file");
});