/*
    Render tests remove new-line because they were problematic with string-literals.
    The effective output remains functional and as expected for this application.
*/
const {Circle, Square, Triangle} = require('./shapes.js');
const paramInput = {"chars": "tri", "tcolor": "lime", "scolor": "black"};

describe('Testing circles', ()=>{
    const c = new Circle(paramInput);


    // Is there an object created?
    it('Should create an object', ()=>{
        expect(c).toBeTruthy();
    })

    // Is the object created the type it should be?
    it('Should be circle', ()=>{
        expect(c.constructor.name).toEqual('Circle');
    });

    // Example test prescribed in Canvas
    it('Should render() string output', ()=>{
        c.setScolor("blue");
        
        const expected = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\
        <circle cx="150" cy="100" r="80" fill="blue" />\
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="lime">tri</text>\
</svg>'.replace(/\r?\n|\r/g, '');
        const actual = c.render().replace(/\r?\n|\r/g, '');
        expect(actual).toEqual(expected);
    })
});

describe('Testing squares', ()=>{
    const s = new Square(paramInput);

    // Is there an object created?
    it('Should create an object', ()=>{
        expect(s).toBeTruthy();
    })


    // Is the object created the type it should be?
    it('Should be square', ()=>{
        expect(s.constructor.name).toEqual('Square');
    });

    // Example test prescribed in Canvas
    it('Should render() string output', ()=>{
        s.setScolor("blue");
        
        const expected = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\
        <rect x="56" y="8" width="188" height="188" style="fill:blue;stroke-width:3;stroke:rgb(0,0,0)" />\
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="lime">tri</text>\
</svg>'.replace(/\r?\n|\r/g, '');
        const actual = s.render().replace(/\r?\n|\r/g, '');
        expect(actual).toEqual(expected);
    })
});

describe('Testing triangles', ()=>{
    const t = new Triangle(paramInput);

    // Is there an object created?
    it('Should create an object', ()=>{
        expect(t).toBeTruthy();
    })

    // Is the object created the type it should be?
    it('Should be triangle object', ()=>{
        expect(t.constructor.name).toEqual('Triangle');
    });

    // Example test prescribed in Canvas
    it('Should render() string output', ()=>{
        t.setScolor("blue");
        
        const expected = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\
        <polygon points="150, 18 244, 182 56, 182" fill="blue" />\
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="lime">tri</text>\
</svg>'.replace(/\r?\n|\r/g, '');
        const actual = t.render().replace(/\r?\n|\r/g, '');
        expect(actual).toEqual(expected);
    })
});