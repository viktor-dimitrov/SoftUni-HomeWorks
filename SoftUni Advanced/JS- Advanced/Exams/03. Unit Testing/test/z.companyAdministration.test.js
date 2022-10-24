const companyAdministration = require("../0companyAdministration");

const {expect} = require('chai');
const {assert} = require('chai');

describe("Testing companyAdministration methods", ()=> {

        it ("Testing . hiringEmployee(name, position, yearsExperience)", ()=>{
            assert.throw(()=>companyAdministration.hiringEmployee('Ivan', 'builder', 2), `We are not looking for workers for this position.` );
            assert.equal(companyAdministration.hiringEmployee('Ivan', "Programmer", 3), `Ivan was successfully hired for the position Programmer.`)
            assert.equal(companyAdministration.hiringEmployee('Ivan', "Programmer", 2), `Ivan is not approved for this position.`)
            assert.equal(companyAdministration.hiringEmployee('Ivan', "Programmer", 3), `Ivan was successfully hired for the position Programmer.`)
            assert.equal(companyAdministration.hiringEmployee('Ivan', "Programmer", 3), `Ivan was successfully hired for the position Programmer.`)
    }) 
       
        it ("Testing .calculateSalary(hours)", ()=>{
            assert.throw(()=> companyAdministration.calculateSalary('string'), "Invalid hours")
            assert.throw(()=> companyAdministration.calculateSalary(-1), "Invalid hours")
            assert.equal(companyAdministration.calculateSalary(1), 15)
            assert.equal(companyAdministration.calculateSalary(160), 2400)
            assert.equal(companyAdministration.calculateSalary(161), 3415)
        })

        it ("Testing .firedEmployee(employees, index)", ()=>{
             assert.throw(()=> companyAdministration.firedEmployee("employees", "index"), "Invalid input")
             assert.throw(()=> companyAdministration.firedEmployee(['Ivan'], -1), "Invalid input")
             assert.throw(()=> companyAdministration.firedEmployee(['Ivan'], 1), "Invalid input")
             assert.throw(()=> companyAdministration.firedEmployee(['Ivan'], 2), "Invalid input")
             assert.throw(()=> companyAdministration.firedEmployee([], 0), "Invalid input");
             assert.throw(()=> companyAdministration.firedEmployee(['Ivan','Hasan'], 1.5), "Invalid input")

             assert.equal(companyAdministration.firedEmployee(['Ivan', 'Pesho', 'Hasan'], 2), 'Ivan, Pesho')
             assert.equal(companyAdministration.firedEmployee(['Ivan', 'Pesho', 'Hasan'], 1), 'Ivan, Hasan')
             assert.equal(companyAdministration.firedEmployee(['Ivan', 'Pesho', 'Hasan'], 0), 'Pesho, Hasan')
             assert.equal(companyAdministration.firedEmployee([''], 0), '')
           
        })
        

    
})