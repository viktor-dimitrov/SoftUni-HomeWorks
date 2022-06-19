function computerStore (input) {

    let tempPrice = 0;
    let inputL = input.length;

    for (let i = 0; i < inputL - 1; i++) {
        let price = input[i];
        if (price < 0) {
            console.log(`Invalid price!`)
        } else {
        tempPrice += Number(price);
        }
    }
    
    let taxes = tempPrice * 0.2;
    let totalPrice = tempPrice + taxes;
    
    if (input[inputL - 1] == 'special') {
        totalPrice *= 0.9;
    }

    if (totalPrice === 0) {
        console.log(`Invalid order!`)
    } else {
        console.log(`Congratulations you've just bought a new computer!\nPrice without taxes: ${tempPrice.toFixed(2)}$\nTaxes: ${taxes.toFixed(2)}$\n-----------\nTotal price: ${totalPrice.toFixed(2)}$`);
    }
}
computerStore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
    ])
    
