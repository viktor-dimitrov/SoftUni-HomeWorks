const {expect} = require('chai')
const {sum} = require("../04.SumOfNumbers");

describe('sum', () => {
    it ("Shoud return correct result whit array of numbers", ()=> {
        
        let testArray = [2,5];

        let result = sum(testArray);

        expect(result).to.be.equal(7);

    }) 

})