function storeProvision(first, second) {
    class itemAndCount {
        constructor(item, count) {
            this.item = item;
            this.count = count;
        }
        say() {
            console.log(`${this.item} -> ${this.count}`)
        }
    }
    let objectsArray = [];
    let myArray = [];

    let index = 0;
    command1 = first[index]

    while (command1) {
        let product1 = first[index];
        index++;
        let counts1 = Number(first[index])
        index++;
        command1 = first[index];

        myArray.push(product1);
        myArray.push(counts1);
    }

    index = 0;
    command2 = second[index];

    while (command2) {
        let product2 = second[index];
        index++
        let count2 = Number(second[index]);
        index++;
        command2 = second[index];

        if (myArray.includes(product2)) {
            myArray[myArray.indexOf(product2) + 1] += count2;
        } else {
            myArray.push(product2);
            myArray.push(count2);
        }
    }

    index = 0;
    command = myArray[index];

    while (command) {
        let myProduct = myArray[index];
        index++;
        let myCount = myArray[index];
        index++;
        command = myArray[index];

        let currentProduct = new itemAndCount(myProduct, myCount)
        objectsArray.push(currentProduct);
    }

    for (let element of objectsArray) {
        element.say()
    }

}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])