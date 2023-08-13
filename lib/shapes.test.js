
const {Circle, Square, Triangle} = require('./shapes.js');

describe('Testing circles', ()=>{
    it('Should be circle', ()=>{
        const c = new Circle('cir', 'blue', 'red');
        // console.log('c>>>\n', c.constructor.name);
        expect(c.constructor.name).toEqual('Circle');
    });
});

describe('Testing squares', ()=>{
    it('Should be square', ()=>{
        const s = new Square('sqr', 'blue', 'red');
        // console.log('s>>>\n', s.constructor.name);
        expect(s.constructor.name).toEqual('Square');
    });
});

describe('Testing triangles', ()=>{
    // A test prescribed in Canvas
    it('Should pass this minimal test provided in rubric', ()=>{
        const shape = new Triangle({"chars": "tri", "tcolor": "lime", "scolor": "black"});
        shape.setScolor("blue");
        
        // Removed all whitespace for comparision on output
        const expected = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\
        <polygon points="150, 18 244, 182 56, 182" fill="blue" />\
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="lime">tri</text>\
        </svg>'.replace(/\s+/g, '');
        const actual = shape.render().replace(/\s+/g, '');
        expect(actual).toEqual(expected);
    })


    it('Should be triangle', ()=>{
        const t = new Triangle('tri', 'blue', 'red');
        // console.log('t>>>\n', t.constructor.name);
        expect(t.constructor.name).toEqual('Triangle');
    });
});