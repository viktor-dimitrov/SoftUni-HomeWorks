class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(inputArr) {

        let outputArr = [];

        inputArr.forEach(line => {
            let currProduct = {};
            let [type, quantity, price] = line.split(' ');
            currProduct.type = type;
            currProduct.quantity = Number(quantity);
            currProduct.price = Number(price);

            let findProduct = this.availableProducts.find(prod => prod.type == type)

            if (!findProduct) {
                this.availableProducts.push(currProduct);
                outputArr.push(type)
            } else {
                findProduct.quantity += Number(quantity);
                if (Number(price) > findProduct.price) {
                    findProduct.price = Number(price);
                }
            }
        });

        return `Successfully added ${outputArr.join(', ')}`;


    }

    buyingVegetables(selectedProducts) {

        let totalPrice = 0;
        let output = '';
        selectedProducts.forEach(element => {
            let [type, quantity] = element.split(' ');

            let currProduct = this.availableProducts.find(prod => prod.type === type)

            if (!currProduct) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
            if (currProduct.quantity < quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)

            }
            currProduct.quantity -= Number(quantity);
            totalPrice += currProduct.price * Number(quantity);
            output = `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`

        });

        return output
    }

    rottingVegetable (type, quantity) {

    

        let currProduct = this.availableProducts.find(prod => prod.type === type)

        if (!currProduct) {
            throw new Error(`${type} is not available in the store.`);
        }

        if (currProduct.quantity < quantity) {
            currProduct.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        } else {
            currProduct.quantity -= quantity;

            return  `Some quantity of the ${type} has been removed.`
          
        }
    }

    revision () {

        let output = ["Available vegetables:"];

        let sorted = this.availableProducts.sort((a, b) => a.price - b.price);

        sorted.forEach(element => {
            output.push(`${element.type}-${element.quantity}-$${element.price}`);
        });

        output.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`)

        return output.join('\n')
    }



}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());
