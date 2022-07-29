function needForSpeed(inputArr){
    let carsCount = Number(inputArr.shift());
    let garage = {};

    for (let i = 0; i < carsCount; i++) {
        let [car, km, fuel] = inputArr.shift().split('|');
        garage[car] = new Map();
        garage[car].set('km', Number(km));
        garage[car].set('fuel', Number(fuel));
    }

    let index = 0;
    let line = inputArr[index];

    while (line !== 'Stop' ) {
        let tokens = line.split(' : ');
        let command = tokens.shift();
        let car = tokens.shift();
        
        switch(command) {
            case'Drive':
                if (garage[car].get('fuel') < Number(tokens[1])) {
                    console.log('Not enough fuel to make that ride')
                } else {
                    let restFuel = (garage[car].get('fuel') - Number(tokens[1]))
                    let newKm = (garage[car].get('km') + Number(tokens[0]));
                    garage[car].set('fuel', restFuel );
                    garage[car].set('km', newKm);
                    console.log(`${car} driven for ${tokens[0]} kilometers. ${tokens[1]} liters of fuel consumed.`)
                }

                if (garage[car].get('km') >= 100000) {
                    console.log(`Time to sell the ${car}!`);
                    delete garage[car];
                }

            break;

            case'Refuel':
            let reFuel = Number(tokens[0]);
            let newFuel = garage[car].get('fuel') + reFuel;
            let diff = 75 - garage[car].get('fuel')
            
                if (newFuel >= 75) {
                    garage[car].set('fuel', 75);
                    console.log(`${car} refueled with ${diff} liters`);
                } else {
                    garage[car].set('fuel', newFuel);
                    console.log(`${car} refueled with ${reFuel} liters`);
                }
            break;

            case'Revert':
            let revert = Number(tokens[0])
            let newKm = garage[car].get('km') - revert;
                if (newKm > 10000) {
                    garage[car].set('km', newKm);
                    console.log(`${car} mileage decreased by ${revert} kilometers`);
                } else {
                    garage[car].set('km', 10000);
                }
            break;
        }
        index++;
        line = inputArr[index];
    }
    
    for (let key in garage) {
        console.log(`${key} -> Mileage: ${garage[key].get('km')} kms, Fuel in the tank: ${garage[key].get('fuel')} lt.`);
    }

}
needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]
  )