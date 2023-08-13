// This file coppied from previous (week 9) challenge with minor changes
const fs = require('fs');

function writeToFile(data){
   const saveDir = `${__dirname}/../Images/logo.svg`;
   fs.writeFile(saveDir, data, (e) => { e ? console.log(`wtf(e) error: ${e}`) : console.log(`Generated logo.svg`);});
}

// Function that reads colors from file and outputs array of colors.
// Used to validate color selection if not hex.
// Original list of colors used to create this source-file:
// ... https://learn.coderslang.com/0028-html-colors-with-names-hex-and-rgb-codes/
const getColors = ()=>{
   let text = fs.readFileSync('./lib/colors.txt', 'utf-8');
   text = text.split(/\r?\n/);
   let ray = [...text];
   return ray;
}

module.exports = {
   writeToFile,
   getColors
}





