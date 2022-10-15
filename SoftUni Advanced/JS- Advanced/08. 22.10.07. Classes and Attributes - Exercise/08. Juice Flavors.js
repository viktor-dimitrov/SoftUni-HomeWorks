function juiceFlavors(inputArr) {

    let obj = {};
    let myMap = new Map();

    for (let line of inputArr) {
        let [fruit, quant] = line.split(' => ');

        if (!obj.hasOwnProperty(fruit)) {
            obj[fruit] = 0;
        }

        obj[fruit] += Number(quant);

        let counter = 0;
        while (obj[fruit] >= 1000) {
            counter++;
            obj[fruit] -= 1000;
        }

        if (counter > 0) {
            if (!myMap.has(fruit)) {
                myMap.set(fruit, counter);
            } else {
                myMap.set(fruit, myMap.get(fruit) + counter);
            }
        }
    }

    Array.from(myMap.entries()).forEach(el => {
        console.log(`${el[0]} => ${el[1]}`);
    });

}

juiceFlavors(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789'])