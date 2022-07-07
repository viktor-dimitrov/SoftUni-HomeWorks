
class Vehicle {
    constructor(type, model, parts, fuel) {

        this.type = type;
        this.model = model;
        this.parts = parts;
        this.fuel = fuel;
             
        this.parts.quality = this.parts.engine * this.parts.power;
          
    }

    drive (lostFuel) {
        return this.fuel -= lostFuel
    }
}



const Vehicle = result;

let parts = {engine: 6, power: 100};
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);

expect(vehicle.fuel).to.equal(100);





// type – a string
// model – a string
// parts – an object that contains:
// engine – number (quality of the engine)
// power – number
// quality – engine * power
// fuel – a number
// drive – a function that receives fuel loss and decreases the fuel of the vehicle by that number
