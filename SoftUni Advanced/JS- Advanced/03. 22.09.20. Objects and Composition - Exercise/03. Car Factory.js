function carFactory (inputObj) {

    let car = {};
    car.model = inputObj.model;
    
    let powerEnum = {
'Small engine': { power: 90, volume: 1800 },
'Normal engine': { power: 120, volume: 2400 },
'Monster engine': { power: 200, volume: 3500 }
    }

    let engType;

    if (inputObj.power <= 90) {
        engType = 'Small engine'; 
    } else if (inputObj.power <= 120) {
        engType = 'Normal engine';
    } else {
        engType = 'Monster engine';
    }
    car.engine = Object.assign(powerEnum[engType]);
    car.carriage =  {type: inputObj.carriage, color: inputObj.color};

    let wheels = 0;
    if (inputObj.wheelsize % 2 == 0) {
        wheels = inputObj.wheelsize - 1;
    } else {
        wheels = inputObj.wheelsize;
    }
    car.wheels = [wheels, wheels, wheels, wheels];

    return car;
    
}
console.log((carFactory ({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 })))