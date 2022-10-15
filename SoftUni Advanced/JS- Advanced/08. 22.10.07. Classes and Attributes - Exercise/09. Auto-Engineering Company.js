function autoEngineeringCompany(inputArr) {

    let myMap = new Map();

    for (let line of inputArr) {
        let [brand, model, quant] = line.split(' | ');

        if (!myMap.has(brand)) {
            myMap.set(brand, {})
        }
        if (!myMap.get(brand).hasOwnProperty(model)) {
            myMap.get(brand)[model] = 0;
        }
        myMap.get(brand)[model] += Number(quant);
    }

    for (let carBrand of Array.from(myMap.keys())) {
        console.log(carBrand);
        Object.entries(myMap.get(carBrand)).forEach(el => {
            console.log(`###${el[0]} -> ${el[1]}`);
        })
    }

}
autoEngineeringCompany(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10'])