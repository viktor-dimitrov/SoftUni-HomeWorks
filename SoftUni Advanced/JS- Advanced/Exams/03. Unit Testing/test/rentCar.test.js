const rentCar = require("../0rentCar");

const {expect} = require('chai');
const {assert} = require('chai');

describe("Testing rentCar methods", ()=> {

    describe("Testig .searchCar(shop, model)", ()=> {
        it ("Test input validations", () => {
            assert.throw(()=>rentCar.searchCar('shop', 'model'),"Invalid input")
            assert.throw(()=>rentCar.searchCar(['shop'], ['model']),"Invalid input")
        })

        it ('Testing findModel', ()=>{
        
            let shop = ['Lada','VW', 'Audi', 'Toyota']
            let model = 'Lada'
            let result = rentCar.searchCar(shop, model);
            expect(result).to.be.equal('There is 1 car of model Lada in the catalog!')

        })
        it ('Testing findModel', ()=>{
            assert.throw(()=>rentCar.searchCar([],'Dacia'), "There are no such models in the catalog!")

        })

        it ('Testing findModel', ()=>{
            assert.throw(()=>rentCar.searchCar(['Lada','VW', 'Audi', 'Toyota'],'Dacia'), "There are no such models in the catalog!")

        })
       
    })

    describe("Testing .calculatePriceOfCar(model, days)", ()=> {

        it ('Testing input validations', ()=>{
            assert.throw(()=>rentCar.calculatePriceOfCar('string', '1'),'Invalid input!');
            assert.throw(()=>rentCar.calculatePriceOfCar('string', 1.5),'Invalid input!');
            assert.throw(()=>rentCar.calculatePriceOfCar(1, 1),'Invalid input!');
            assert.throw(()=>rentCar.calculatePriceOfCar('string', 1),'No such model in the catalog!');
            

            let model = "Audi";
            let days = 1;
            let result = rentCar.calculatePriceOfCar(model, days);
            expect(result).to.be.equal('You choose Audi and it will cost $36!');
        })
    })

    describe ('Testing .checkBudget(costPerDay, days, budget) ', () => {
        it ("Testing input types", ()=> {
            assert.throw(()=>rentCar.checkBudget("one",1,1),'Invalid input!');
            assert.throw(()=>rentCar.checkBudget(1,"two",1),'Invalid input!');
            assert.throw(()=>rentCar.checkBudget(1,1,"three"),'Invalid input!');
            
        })
        it ("Testing returns", ()=> {
            expect(rentCar.checkBudget(1,2,3)).to.be.equal('You rent a car!');
            expect(rentCar.checkBudget(1,1,1)).to.be.equal('You rent a car!');
            expect(rentCar.checkBudget(3,2,1)).to.be.equal('You need a bigger budget!')
        })
    })

})