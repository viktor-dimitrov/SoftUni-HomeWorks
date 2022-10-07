const mathEnforcer = require("../04.math Enforcer");

const {expect} = require('chai');

describe("mathEbforcer testing", () => {
    it ("Test .addFive whit number argument", () => {
        let obj = mathEnforcer;
        let num = 5;
        let result = obj.addFive(num);
        expect(result).to.be.equal(10);
    });
    it ("Test .addFive whit negative number argument", () => {
        let obj = mathEnforcer;
        let num = -5;
        let result = obj.addFive(num);
        expect(result).to.be.equal(0);
    });
    it ("Test .addFive whit decimal number argument", () => {
        let obj = mathEnforcer;
        let num = 5.05;
        let result = obj.addFive(num);
        expect(result).to.be.equal(10.05);
    });
    it ("Test .addFive whit string argument", () => {
        let obj = mathEnforcer;
        let num = "5five";
        let result = obj.addFive(num);
        expect(result).to.be.equal(undefined);
    });
   

    it ("Test .subtractTen whit number argument", () => {
        let obj = mathEnforcer;
        let num = 5;
        let result = obj.subtractTen(num);
        expect(result).to.be.equal(-5);
    });
    it ("Test .subtractTen whit negative number argument", () => {
        let obj = mathEnforcer;
        let num = -5;
        let result = obj.subtractTen(num);
        expect(result).to.be.equal(-15);
    });
    it ("Test .subtractTen whit decimal number argument", () => {
        let obj = mathEnforcer;
        let num = 5.05;
        let result = obj.subtractTen(num);
        expect(result).to.be.equal(-4.95);
    });
    it ("Test .subtractTen whit string argument", () => {
        let obj = mathEnforcer;
        let num = "5";
        let result = obj.subtractTen(num);
        expect(result).to.be.equal(undefined);
    });
    it ("Test .sum whit number arguments", ()=> {
        let obj = mathEnforcer;
        let num1 = 5
        let num2 = 5
        let result = obj.sum(num1, num2);
        expect(result).to.be.equal(10)
    });
    it ("Test .sum whit string and number arguments", ()=> {
        let obj = mathEnforcer;
        let num1 = "5"
        let num2 = 5
        let result = obj.sum(num1, num2);
        expect(result).to.be.equal(undefined)
    });
    it ("Test .sum whit number and string arguments", ()=> {
        let obj = mathEnforcer;
        let num1 = 5
        let num2 = "5"
        let result = obj.sum(num1, num2);
        expect(result).to.be.equal(undefined)
    });
    it ("Test .sum whit  decimal numbers arguments", ()=> {
        let obj = mathEnforcer;
        let num1 = 5.5;
        let num2 = 5.5;
        let result = obj.sum(num1, num2);
        expect(result).to.be.equal(11)
    });
    it ("Test .sum whit string and string arguments", ()=> {
        let obj = mathEnforcer;
        let num1 = "5"
        let num2 = "5"
        let result = obj.sum(num1, num2);
        expect(result).to.be.equal(undefined)
    });
})