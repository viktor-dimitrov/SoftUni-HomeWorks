const { isSymmetric } = require("../05.checkForSymmetry")

const { expect } = require('chai');

describe ( "isSymmetric", () => {
    it ('Result shoud be "false" whit "string" argument', () => {
        let strInput = 'str';
        let result = isSymmetric(strInput);
        expect(result).to.be.equal(false)
    });
    it ('Result shoud be "false" whit "number" argument', () => {
        let numInput = 6;
        let result = isSymmetric(numInput);
        expect(result).to.be.equal(false)
    });
    it ('Result shoud be "false" whit "object" argument', () => {
        let objInput = {};
        let result = isSymmetric(objInput);
        expect(result).to.be.equal(false)
    })
    it ('Result shoud be "false" whit "function" argument', () => {
        let funcInput = () => {};
        let result = isSymmetric(funcInput);
        expect(result).to.be.equal(false)
    });
    it('Result shoud be "false" , if argument is "Array", but isn`t Symmetric', () => {
        let notSymmetricArr = [3,4,5,4,4,4,3];
        let result = isSymmetric(notSymmetricArr);
        expect(result).to.be.equal(false);
    });
    it('Result be "true" whit symmetric array argument', () => {
        let symmArray = [1,2,2,1];
        let result = isSymmetric(symmArray);
        expect(result).to.be.equal(true);

    });
  
    it ('Result shoud be "false" whitout argument', () => {
        let result = isSymmetric();
        expect(result).to.be.equal(false);

    })
    it('Result shoud be "false" whit "boolean" argument', () => {
        let boolInput = true;
        let result = isSymmetric(boolInput);
        expect(result).to.be.equal(false)
    })
    it ('Result shoud be "true" whit array.length = 1', ()=>{
        let input = [9];
        let result = isSymmetric(input);
        expect(result).to.be.equal(true)
    })
    it ('Return shoud be "true" whit symmetric Array of strings', ()=>{
        let strArray = ['S', 'A', 'S'];
        let result = isSymmetric(strArray);
        expect(result).to.be.equal(true);
    })
    it ('Result ne "false" when type of elements in array are not same', () => {
        let arr = [6,'6'];
        let result = isSymmetric(arr);
        expect(result).to.be.equal(false);

    }) 


})

