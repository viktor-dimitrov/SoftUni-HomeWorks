class Garden {

    constructor (spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];

    }

    addPlant (plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw new Error("Not enough space in the garden.");
        }

        let currPlant = {
            plantName: plantName,
            spaceRequired: spaceRequired,
            ripe: false,
            quantity: 0
        }
        this.plants.push(currPlant);
        this.spaceAvailable -= spaceRequired;

        return `The ${plantName} has been successfully planted in the garden.`
    };

    ripenPlant(plantName, quantity){
        let currPlant = this.plants.find(p => p.plantName === plantName);
        if (!this.plants.includes(currPlant)) {
            throw new Error(`There is no ${plantName} in the garden.`);
        } else {
         if (currPlant.ripe === true) {
            throw new Error (`The ${plantName} is already ripe."`)
         }
         if (quantity <= 0) {
              throw new Error (`The quantity cannot be zero or negative.`)
         }
         
        }

        currPlant.ripe = true;
        currPlant.quantity += quantity;

        if (quantity === 1) {
            return `${quantity} ${plantName} has successfully ripened.`;
        } else {
            return `${quantity} ${plantName}s have successfully ripened.`;
        }
    }

    harvestPlant(plantName) {
        let currPlant = this.plants.find(p => p.plantName === plantName)

        if(!this.plants.includes(currPlant)) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        if (currPlant.ripe === false) {
            throw new Error (`The ${plantName} cannot be harvested before it is ripe.`)
        }

        let product = {
            plantName: plantName,
            quantity: currPlant.quantity
        }
        this.storage.push(product)
        this.spaceAvailable += currPlant.spaceRequired;
        this.plants.splice(this.plants.indexOf(currPlant), 1);
        return `The ${plantName} has been successfully harvested.`
    }

    generateReport() {

        let outputArr = [`The garden has ${ this.spaceAvailable } free space left.`];
        let plantsArr =[];
        this.plants.forEach(plant => {
           plantsArr.push(plant.plantName)
            
        });
        let plantsString = `Plants in the garden: ${plantsArr.sort((a, b) => a.localeCompare(b)).join(', ')}`;
        outputArr.push(plantsString);

        let productsArr = [];

        if (this.storage.length < 1) {
            outputArr.push(`Plants in storage: The storage is empty.`)
        } else {
            this.storage.forEach(product =>{
                productsArr.push(`${product.plantName} (${product.quantity})`)
            });
            let prodString = `Plants in storage: ${productsArr.join(', ')}`
            outputArr.push(prodString)
        }


        return outputArr.join('\n')

    }




}


const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
// console.log(myGarden.plants)
// console.log(myGarden.storage)
console.log(myGarden.generateReport());



// console.log(myGarden)
