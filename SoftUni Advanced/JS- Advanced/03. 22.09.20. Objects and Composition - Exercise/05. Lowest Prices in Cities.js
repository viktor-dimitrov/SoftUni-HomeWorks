function lowestPricesInCities (inputArr) {
    let myArray = inputArr.map(el => el.split(' | '));
    let myObject = {};
   
    myArray.forEach(element => {
        let [town, product, price] = element;
        if (!myObject.hasOwnProperty(product)) {
            myObject[product] = {'town': town, 'price': Number(price)};
        } 
        if (myObject.hasOwnProperty(product) && myObject[product]['price'] > price) {
            myObject[product] = {'town': town, 'price': price};
        }
    });
    
    for (let prod in myObject) {
       console.log(`${prod} -> ${myObject[prod]['price']} (${myObject[prod]['town']})`);
    }
}
lowestPricesInCities(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000'])