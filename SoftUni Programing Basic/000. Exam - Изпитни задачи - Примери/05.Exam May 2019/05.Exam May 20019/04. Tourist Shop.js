function touristShop (input) {
    let budget = Number(input[0]);
    let index = 1;
    let command = input[index];
    let layout = 0;
    let itemCounter = 0;
    let neededMoney = 0;

    while (command != "Stop") {
        if (index >= input.length) {
            break;
        }
        let item = input[index];
        index++;
        let price = Number (input[index]);
       
        itemCounter++;
        if (itemCounter % 3 == 0) {
            price *= 0.5;
        }
        if (price > budget){
            neededMoney += price - budget;
            break;
        }
        layout += price;
        budget -= price;
        
        index++;
        command = input[index];
    }
    if (command == "Stop") {
        console.log(`You bought ${itemCounter} products for ${layout.toFixed(2)} leva.`)
    } else {
        console.log (`You don't have enough money!`);
        console.log (`You need ${neededMoney.toFixed(2)} leva!`);
    }
}
touristShop (["10",
"Backpack",
"2",
"Shoes",
"3",
"Sunglasses",
"10",
"Stop"])