require('dotenv').config();
const inquirer = require('inquirer');
const filer = require('./lib/makeFile.js');
const {Circle, Square, Triangle} = require('./lib/shapes.js');

function init() {
    colorRay = filer.getColors();
    // console.log(colorRay);
    questions = [
        {type: `input`, message: `Enter 3 chars>> `,    name: `chars`},
        {type: `input`, message: `Text color>> `,       name: `tcolor`},
        {type: `list`,  message: `Shape>> `,            name: `shape`,
                        choices: [`circle`, `square`, `triangle`]},
        {type: `input`, message: `Shape color>> `,      name: `scolor`},];

    inquirer.prompt(questions).then((response) => {
        console.log("After prompts>>> ", response);
        if(colorRay.includes(response.tcolor)){
            console.log('Text color ', response.tcolor, ' is in!!!');
        }
        if(colorRay.includes(response.scolor)){
            console.log('Shape color ', response.scolor, ' is in!!!');
        }

        let theShape;
        switch(response.shape){
            case('circle'):
                theShape = new Circle(response); break;
            case('square'):
                theShape = new Square(response); break;
            case('triangle'):
                theShape = new Triangle(response); break;
        }
        filer.writeToFile(theShape.render());
        return response;
    })
    .catch((e) => { console.log(`Inquirer had a problem :(\t>> ${e}`);});
}

init();