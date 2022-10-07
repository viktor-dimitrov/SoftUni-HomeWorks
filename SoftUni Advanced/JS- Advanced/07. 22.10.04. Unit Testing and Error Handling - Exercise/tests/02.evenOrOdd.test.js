const { isOddOrEven } = require("../02.evenOrOdd");

const {expect} = require("chai");
const {assert} = require("chai")




describe ("Test function isOddOrEven", () => {
    it ("test whit number argument", () => {
        assert.equal(isOddOrEven(5), undefined)
    })
    it ("test whit array argument", () => {
        assert.equal(isOddOrEven([5]), undefined)
    })
    it ("test whit even string  argument", () => {
        assert.equal(isOddOrEven("55"), "even")
    })
    it ("test whit odd string  argument", () => {
        assert.equal(isOddOrEven("555"), "odd")
    })
})
