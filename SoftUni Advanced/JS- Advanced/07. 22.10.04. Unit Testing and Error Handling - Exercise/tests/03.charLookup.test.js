const { lookupChar } = require("../03.charLookup");

const { expect } = require ("chai")

describe ("Testin lookupChar function", () => {
    it ("Test whit string and number inputs - number < string.length - 1 ", () => {
        let str = "code";
        let num = 0;
        let result =  lookupChar(str, num);
        expect(result).to.be.equal("c") 
    })
   
    it ("Test whit number and number inputs ", () => {
        let str = 5;
        let num = 1;
        let result =  lookupChar(str, num);
        expect(result).to.be.equal(undefined) 
    })
    it ("Test whit string and string inputs ", () => {
        let str = "code";
        let num = "1";
        let result =  lookupChar(str, num);
        expect(result).to.be.equal(undefined) 
    })
    it ("Test whit string and number inputs - number > string.length - 1 ", () => {
        let str = "code";
        let num = 4;
        let result =  lookupChar(str, num);
        expect(result).to.be.equal("Incorrect index") 
    })
    it ("Test whit string and number inputs - number < 0", () => {
        let str = "code";
        let num = -4;
        let result =  lookupChar(str, num);
        expect(result).to.be.equal("Incorrect index") 
    })
    it ("Test whit string and number inputs - number = string.length - 1 ", () => {
        let str = "code";
        let num = 3;
        let result =  lookupChar(str, num);
        expect(result).to.be.equal("e") 
    })
    it ("Test whit string and decimal number", () => {
        let str = "code";
        let num = 1.5;
        let result =  lookupChar(str, num);
        expect(result).to.be.equal(undefined) 
    })
  
})