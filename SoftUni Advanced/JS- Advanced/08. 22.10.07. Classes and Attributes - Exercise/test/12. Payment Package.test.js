const PaymentPackage = require("../12. Payment Package");

const { expect } = require('chai');
const {assert} = require('chai')

describe("Testing Payment Package methods", () => {

    it("Test whit valid name and value", () => {
        let myPP = new PaymentPackage("Karcho", 2);
        expect(myPP.name).to.be.equal("Karcho");
        expect(myPP.value).to.be.equal(2);
    });

    it("Test whit empty string for name and  number for value", () => {
        assert.throw(() => new PaymentPackage("", 2), `Name must be a non-empty string`);
    });

    it("Test whit number for name and  number for value", () => {
        assert.throw(() => new PaymentPackage(2, 2), `Name must be a non-empty string`);
    });

    it("Test whit valid name and string for value", () => {
        assert.throw(() => new PaymentPackage("Karcho", "2"), `Value must be a non-negative number`);
    });

    it("Test whit valid name and negative number for value", () => {
        assert.throw(() => new PaymentPackage("Karcho", -2), `Value must be a non-negative number`);
    });

    it("Test VAT value whit string", () => {
        let myPP = new PaymentPackage("Karcho", 2);
        assert.throw(() => myPP.VAT = "20 ", 'VAT must be a non-negative number')
    });

    it("Test VAT value whit negative number", () => {
        let myPP = new PaymentPackage("Karcho", 2);
        assert.throw(() => myPP.VAT = -20, 'VAT must be a non-negative number')
    });

    it("Test Active value whit string", () => {
        let myPP = new PaymentPackage("Karcho", 2);
        assert.throw(() => myPP.active = "falsee", 'Active status must be a boolean')
    });

    it("Test toString method whit valid name and value, and active = true", () => {
        let myPP = new PaymentPackage("Karcho", 2);
        let result = myPP.toString();
        expect(result).to.be.equal(`Package: Karcho\n- Value (excl. VAT): 2\n- Value (VAT 20%): 2.4`)
    
    });

    it("Test toString method whit valid name and value, and active = false", () => {
        let myPP = new PaymentPackage("Karcho", 2);
        myPP.active = false;
        let result = myPP.toString();
        expect(result).to.be.equal(`Package: Karcho (inactive)\n- Value (excl. VAT): 2\n- Value (VAT 20%): 2.4`)
    
    });
    it("Test toString method whit valid name and value = decimal number, VAT = decimal number ", () => {
        let myPP = new PaymentPackage("Karcho", 20,3);
        myPP.VAT = 30,5;
        let result = myPP.toString();
        expect(result).to.be.equal(`Package: Karcho\n- Value (excl. VAT): 20\n- Value (VAT 30%): 26`)
    
    });
   
})