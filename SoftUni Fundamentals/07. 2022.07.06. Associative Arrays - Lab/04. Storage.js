function storage(inputArray) { 
    let market = {};

    for (let line of inputArray) {
        let [product, quantity] = line.split(' ');
        
        if (!market.hasOwnProperty(product)) {
            market[product] = Number(quantity);
        } else {
            let currentQuantity = Number(market[product]) + Number(quantity);
            market[product] = currentQuantity; 
        }
    }
    
    for(let key in market) {
        console.log(`${key} -> ${market[key]}`)
    }
}
storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40'])