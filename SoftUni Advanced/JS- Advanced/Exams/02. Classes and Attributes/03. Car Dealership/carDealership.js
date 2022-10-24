class CarDealership {

    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (model === '' || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error("Invalid input!");
        };
        let currCar = {
            model,
            horsepower,
            price,
            mileage
        };
        this.availableCars.push(currCar);
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
    };

    sellCar (model, desiredMileage){
        let currCar = this.availableCars.find(car => car.model === model);

        if (!this.availableCars.includes(currCar)) {
            throw new Error (`${model} was not found!`)
        }
        let diff = Math.abs(currCar.mileage - desiredMileage)
       
        if (currCar.mileage <= desiredMileage){
        } else if (diff < 40000) {
            currCar.price *= 0.95;
        } else {
            currCar.price *= 0.9;
        }

        this.totalIncome += currCar.price;
        this.soldCars.push(currCar);
        this.availableCars.splice(this.availableCars.indexOf(currCar), 1);

        return `${model} was sold for ${currCar.price.toFixed(2)}$`

    }

    currentCar () {
        let output = [`-Available cars:`];
        this.availableCars.forEach(car => {
            let line = `---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`;
            output.push(line)
        });

        if (output.length > 1){
            return output.join('\n');
        }else{
            return "There are no available cars";
        }
    }

    salesReport (criteria) {
           

            let output = [`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`,
            `-${this.soldCars.length} cars sold:`];

            if (criteria === 'horsepower') {
                let sorted = this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
                sorted.forEach(car => {
                    output.push(`---${car.model} - ${car.horsepower} HP - ${car.price.toFixed(2)}$`);
                });
            } else if (criteria === 'model'){
                let sorted = this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
                sorted.forEach(car => {
                    output.push(`---${car.model} - ${car.horsepower} HP - ${car.price.toFixed(2)}$`);
                });
            } else {
                throw   new Error (`Invalid criteria!`)
            }

            return output.join('\n')
            
    }



}
let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));



