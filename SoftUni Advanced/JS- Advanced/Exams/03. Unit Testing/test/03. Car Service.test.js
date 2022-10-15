const carService = require("../03. Car Service");

const {expect} = require("chai")
const {assert} = require("chai")

describe ("Testing carService methods", () => {
    it ("Testing  .isItExpensive with argument 'Engine' ", ()=> {

        let issue = "Engine";
        let result = carService.isItExpensive(issue);
        expect(result).to.be.equal(`The issue with the car is more severe and it will cost more money`)
    })

    it ("Testing  .isItExpensive with argument 'Transmission' ", ()=> {
        let issue = "Transmission";
        let result = carService.isItExpensive(issue);
        expect(result).to.be.equal(`The issue with the car is more severe and it will cost more money`)
    })

    it ("Testing  .isItExpensive with other argument ", ()=> {
        let issue = "Lights";
        let result = carService.isItExpensive(issue);
        expect(result).to.be.equal(`The overall price will be a bit cheaper`);
    })

    //_________________________________________________________________________________________

    it ("Testing .discount whit string arguments", () => {
        let arg1 = "One";
        let arg2 = "Two";
           assert.throw(() => carService.discount(arg1, arg2), "Invalid input");
    })

    it ("Testing .discount whit string and number arguments", () => {
        let arg1 = "One";
        let arg2 = 2;
           assert.throw(() => carService.discount(arg1, arg2), "Invalid input");
    })
    it ("Testing .discount whit number and string arguments", () => {
        let arg1 = 1;
        let arg2 = "Two";
           assert.throw(() => carService.discount(arg1, arg2), "Invalid input");
    })

    it ("Testing .discount whit 3 and 10", () => {
      
           expect(carService.discount(3, 10)).to.be.equal ("Discount applied! You saved 1.5$");
    })

    it ("Testing .discount whit 8 and 10", () => {
      
        expect(carService.discount(8, 10)).to.be.equal("Discount applied! You saved 3$");
 })

 
 it ("Testing .discount whit 1 and 10", () => {
      
    expect(carService.discount(1, 10)).to.be.equal("You cannot apply a discount");
})

//__________________________________________________________________________

it ("Testing .partsToBuy with argument not Array", ()=> {
    assert.throw(() => carService.partsToBuy("arg1", [1, 2 ,3]), "Invalid input")
})

it ("Testing .partsToBuy with argument not Array", ()=> {
    assert.throw(() => carService.partsToBuy([1, 2 ,3], "arg1"), "Invalid input")
})

it ("Testing .partsToBuy with arguments empty Array", ()=> {
    expect(carService.partsToBuy([], [["blowoff valve", "injectors"]])).to.be.equal(0)
})

it ("Testing .partsToBuy with valid arguments ", ()=> {
     expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }],["blowoff valve", "injectors"])).to.be.equal(145)
 })




})

