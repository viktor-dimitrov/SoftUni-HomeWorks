const chooseYourCar = require("../00chooseYourCar");

const {expect} = require('chai');
const {assert} = require('chai');


describe('Testing chooseYourCar methods', ()=> {
    describe('Testing .choosingType(type, color, year)', ()=> {
        it ('Testing year - (year < 1900 || year > 2022)', ()=>{
            assert.throw(()=>chooseYourCar.choosingType('Sedan', 'red', 1899), `Invalid Year!` );
            assert.throw(()=>chooseYourCar.choosingType('Sedan', 'red', 2023), `Invalid Year!` );
            assert.equal(chooseYourCar.choosingType('Sedan', 'red', 2010), `This red Sedan meets the requirements, that you have.`);
            assert.equal(chooseYourCar.choosingType('Sedan', 'red', 2020), `This red Sedan meets the requirements, that you have.`);
            assert.equal(chooseYourCar.choosingType('Sedan', 'red', 2009), `This Sedan is too old for you, especially with that red color.`);
            assert.throw(()=>chooseYourCar.choosingType('Van', 'red', 2012), `This type of car is not what you are looking for.` );
        })
    })

    describe('Testing .brandName(brands, brandIndex) ', ()=>{
        it(`Testing inputs`, ()=>{
            assert.throw(()=>chooseYourCar.brandName('Lada, WV', 1), "Invalid Information!" );
            assert.throw(()=>chooseYourCar.brandName(["Lada", "WV"], "1"), "Invalid Information!" );
            assert.throw(()=>chooseYourCar.brandName(["Lada", "WV"], "one"), "Invalid Information!" );
            assert.throw(()=>chooseYourCar.brandName(["Lada", "WV"], -1), "Invalid Information!" );
            assert.throw(()=>chooseYourCar.brandName(["Lada", "WV"], 2), "Invalid Information!" );
            assert.throw(()=>chooseYourCar.brandName(["Lada", "WV"], 1.5), "Invalid Information!" );
            assert.equal(chooseYourCar.brandName(["Lada", "WV"], 1), `Lada`);
            assert.equal(chooseYourCar.brandName(["Lada", "WV","BMW", "Toyota", "Peugeot"], 4), `Lada, WV, BMW, Toyota`);
            assert.equal(chooseYourCar.brandName([''], 0), ``);
        })
    })

    describe('Testing .carFuelConsumption(distanceInKilometers, consumptedFuelInLiters)', ()=>{
        it(`Testing inputs`, ()=> {
            assert.throw(()=>chooseYourCar.carFuelConsumption("string", 5), "Invalid Information!" );
            assert.throw(()=>chooseYourCar.carFuelConsumption(-1, 5), "Invalid Information!" );
            assert.throw(()=>chooseYourCar.carFuelConsumption(0, 5), "Invalid Information!" );
            assert.throw(()=>chooseYourCar.carFuelConsumption(5, "string"), "Invalid Information!" );
            assert.throw(()=>chooseYourCar.carFuelConsumption(5, -1), "Invalid Information!" );
            assert.throw(()=>chooseYourCar.carFuelConsumption(5, 0), "Invalid Information!" );
            assert.equal(chooseYourCar.carFuelConsumption(100, 8), "The car burns too much fuel - 8.00 liters!" );
            assert.equal(chooseYourCar.carFuelConsumption(100, 5), "The car is efficient enough, it burns 5.00 liters/100 km." );
            assert.equal(chooseYourCar.carFuelConsumption(100, 7), "The car is efficient enough, it burns 7.00 liters/100 km." );
        })
    })


})