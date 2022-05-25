function club (input) {
    let targetProfit = Number (input[0]);
    let index = 1;
    let command = input[index];
    let realProfit = 0;
    
    while (command != `Party!`) {
        if (realProfit >= targetProfit) {
            break;
        }
        let cocktail = input[index];
        index++;
        let price = cocktail.length;
        let count = Number(input[index]);
        index++;
        let order = price * count;

        if (order % 2 != 0) {
            order *= 0.75;
        }

        realProfit += order;
        command = input[index];
    }
    let difference = Math.abs(targetProfit - realProfit);
    
    if (realProfit < targetProfit) {
        console.log(`We need ${difference.toFixed(2)} leva more.`);
    } else {
        console.log(`Target acquired.`);
    }
    console.log(`Club income - ${realProfit.toFixed(2)} leva.`);

}
club ([500,
    "Bellini",
    6,
    "Bamboo",
    7,
    "Party!"])