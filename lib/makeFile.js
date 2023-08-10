// This file coppied from previous (week 9) challenge
const fs = require('fs');

function writeToFile(data){
   const saveDir = `${__dirname}/../Images/logo.svg`;
   fs.writeFile(saveDir, data, (e) => { e ? console.log(`wtf(e) error: ${e}`) : console.log(`Generated logo.svg`);});
}

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





