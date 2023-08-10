class Shape {
    constructor(chars, tcolor, scolor){
        this.chars = chars;
        this.tcolor = tcolor.toLowerCase();
        this.scolor = scolor.toLowerCase();
    }

    setText(t){
        if(t.length > 3){
            console.log("DUMMY");
        }
        this.chars = t;
    }
    setTcolor(c){
        this.tcolor = c;
    }
    setScolor(c){
        this.scolor = c;
    }


    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
    }
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
    render(){
        return super.render() + `
        <polygon points="150, 8 244, 172 56, 172" fill="${this.scolor}" />
        ` + super.render2(this.tcolor, this.chars);
    }
}

module.exports = {
    Circle,
    Square,
    Triangle
}