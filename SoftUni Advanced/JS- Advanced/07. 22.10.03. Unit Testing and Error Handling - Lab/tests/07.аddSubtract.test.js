const createCalculator = require("../07.аddSubtract");
const {expect} = require('chai')

 




describe ("Testing function createCalculator", () => {
    
    it("Testing .add funcionality whit 'number' argument", () => {
        let calc = createCalculator();
        calc.add(5)
        expect(calc.get()).to.be.equal(5)
    });
    it("Testing .add funcionality whit 'string' argument", () => {
        let calc = createCalculator();
        calc.add('5')
        expect(calc.get()).to.be.equal(5)
    });
    it("Testing .subtract funcionality whit 'number' argument", () => {
        let calc = createCalculator();
        calc.subtract(5)
        expect(calc.get()).to.be.equal(-5)
    })
})
