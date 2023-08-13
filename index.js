require('dotenv').config();
const inquirer = require('inquirer');
const wtf = require('./lib/makeFile.js');
const {Circle, Square, Triangle, colorCheck} = require('./lib/shapes.js');

function init() {
    // Build questions for Inquirer
    questions = [
        {   
            type: `input`,
            message: `Enter 3 chars>> `,
            name: `chars`,
            validate: (chars)=>{
                if(chars.length > 3) { return `Too many chars entered.  3 maximium`;}
                return true;
            }
        },
        {   
            type: `input`,
            message: `Text color -- must be common name or 3 or 6 digit hex (with leading #)>> `,
            name: `tcolor`,
            validate: (tcolor)=>{
                return colorCheck(tcolor);
            }
        },
        {
            type: `list`,
            message: `Shape>> `,
            name: `shape`,
            choices: [`circle`, `square`, `triangle`]
        },
        {
            type: `input`,
            message: `Shape color -- must be common name or 3 or 6 digit hex (with leading #)>> `,
            name: `scolor`,
            validate: (scolor)=>{
                return colorCheck(scolor);
            }
        },];

    inquirer.prompt(questions).then((response) => {
        // Logic for shape choice being created
        console.log(`response: ${JSON.stringify(response)}`);
        let theShape;
        switch(response.shape){
            case('circle'):
                theShape = new Circle(response); break;
            case('square'):
                theShape = new Square(response); break;
            case('triangle'):
                theShape = new Triangle(response); break;
        }

        // Created shape is then rendered and output to file per rubric
        wtf.writeToFile(theShape.render());
        return response;
    })
    .catch((e) => { console.log(`Inquirer had a problem :(\t>> ${e}`);});
}

init();
