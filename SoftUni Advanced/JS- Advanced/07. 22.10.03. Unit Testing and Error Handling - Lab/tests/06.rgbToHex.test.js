let {assert} = require('chai');
const { rgbToHexColor } = require('../06.rgbToHex');

describe("Test input parameters for valid type and valid range", () => {
    it("Test1 all parameters in range",() => {
        assert.equal(rgbToHexColor(1, 1, 1), '#010101')
    });
    it("Test0 all parameters 0",() => {
        assert.equal(rgbToHexColor(0, 0, 0), '#000000')
    });
    it("Test2 all parameters in range",() => {
        assert.equal(rgbToHexColor(255, 1, 1), '#FF0101')
    });
    it("Test3 all parameters in range",() => {
        assert.equal(rgbToHexColor(1, 255, 1), '#01FF01')
    });
    it("Test4 all parameters in range",() => {
        assert.equal(rgbToHexColor(1, 1, 255), '#0101FF')
    });
    it("Test all parameters out of range",() => {
        assert.equal(rgbToHexColor(-1, -1, -1), undefined)
    });

   

    it("Test first parameter out of range  < 0",() => {
        assert.equal(rgbToHexColor(-1, 1, 1), undefined)
    });
    it("Test first parameter out of range  > 255",() => {
        assert.equal(rgbToHexColor(266, 1, 1), undefined)
    });

    it("Test first parameter type",() => {
        assert.equal(rgbToHexColor("1", 1, 1), undefined)
    });
    it("Test first parameter whit decimal num",() => {
        assert.equal(rgbToHexColor(2.55, 1, 1), undefined)
    });

   

    
    it("Test second parameter out of range  < 0",() => {
        assert.equal(rgbToHexColor(1, -1, 1), undefined)
    });
    it("Test second parameter out of range  > 255",() => {
        assert.equal(rgbToHexColor(1, 266, 1), undefined)
    });

    it("Test second parameter type",() => {
        assert.equal(rgbToHexColor(1, "1", 1), undefined)
    });
    it("Test second parameter whit decimal num",() => {
        assert.equal(rgbToHexColor(1, 2.55, 1), undefined)
    });

    it("Test third parameter out of range  < 0",() => {
        assert.equal(rgbToHexColor(1, 1, -1), undefined)
    });
    it("Test third parameter out of range  > 255",() => {
        assert.equal(rgbToHexColor(1, 1, 266), undefined)
    });

    it("Test third parameter type",() => {
        assert.equal(rgbToHexColor(1, 1, "1"), undefined)
    });
    it("Test third parameter whit decimal num",() => {
        assert.equal(rgbToHexColor(1, 1, 2.55), undefined)
    });
    it("Test1 all parameters 0",() => {
        assert.equal(rgbToHexColor(0, 0, 0), '#000000')
    });
 
})
