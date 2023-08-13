// Creates list of 140 common-named html colors
const colorRay = require('./makeFile.js').getColors();

// Parent/abstract class
class Shape {
    constructor(chars, tcolor, scolor){
        this.chars = chars;
        this.tcolor = tcolor;//.toLowerCase();
        this.scolor = scolor;//.toLowerCase();
    }

    // SHAPE SETTERS
    /*
        These are never actually used in the approach taken with this project as these
        are set with shape/object constructors.  They were included only because one
        example of Jest showed such a function being tested.
    */
    setText(t){
        if(t.length > 3){
            console.log("DUMMY");
            return false;
        }
        this.chars = t;
        return true;
    }
    setTcolor(c){
        if(!colorCheck(c)){
            console.log(`Color [${c}] is bad.\nMust be common color name or 3/6 hex (led with #)`);
            return false;
        }
        this.tcolor = c;
        return true;
    }
    setScolor(c){
        if(!colorCheck(c)){
            console.log(`Color [${c}] is bad.\nMust be common color name or 3/6 hex (led with #)`);
            return false;
        }
        this.scolor = c;
        return true;
    }

    // Specified class function RENDER()
    // ... The first line is common to all output SVG files so started abstract-parent class with
    // ... the first line and depending on child classes to complete output following a super().
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
    }
    // Similarly, the line of code for text completes all output SVG files so this is called
    // ... in all child classes to finish the output.
    render2(){
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.tcolor}">${this.chars}</text>
</svg>`;
    }
}


class Circle extends Shape {
    constructor({chars, tcolor, scolor}, x=150, y=100, r=80){
        super(chars, tcolor, scolor);
        this.x = x;
        this.y = y;
        this.r =r;
    }
    render(){
        return super.render() + `
        <circle cx="${this.x}" cy="${this.y}" r="${this.r}" fill="${this.scolor}" />
        ` + super.render2();
    }
}

class Square extends Shape {
    constructor({chars, tcolor, scolor}, l=188){
        super(chars, tcolor, scolor);
        this.l = l;
    }
    render(){
        return super.render() + `
        <rect x="56" y="8" width="${this.l}" height="${this.l}" style="fill:${this.scolor};stroke-width:3;stroke:rgb(0,0,0)" />
        ` + super.render2(this.tcolor, this.chars);
    }
}

class Triangle extends Shape {
    constructor({chars, tcolor, scolor}){
        super(chars, tcolor, scolor);
    }

    setScolor(c){ 
        super.setScolor(c);}
    // Triangle does not call render2() becasuse text needs to be slightly lower
    render(){
        return super.render() + `
        <polygon points="150, 18 244, 182 56, 182" fill="${this.scolor}" />
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.tcolor}">${this.chars}</text>
</svg>`;
    }
}

// Helper function for color validation
function colorCheck(dIn){
    if(!dIn){
        console.log(`Color requires entry`);
        return false;
    }
    if(colorRay.includes(dIn.toLowerCase())){ return true;}
    if(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(dIn)){ return true;}
    
    console.log(`dIn: ${dIn} is bad`);
    return false;
}

module.exports = {
    Circle,
    Square,
    Triangle,
    colorCheck
}