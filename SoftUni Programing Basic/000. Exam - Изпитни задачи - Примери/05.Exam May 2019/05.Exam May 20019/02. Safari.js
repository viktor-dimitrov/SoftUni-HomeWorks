function safari (input) {
    const budget = Number(input[0]);
    const litersGas = Number(input[1]);
    const day = input[2];
    const gasPrice = 2.1;
    const guidPrice = 100;
    let sum = guidPrice + (litersGas * gasPrice);

    if (day == "Sunday") {
        sum *= 0.8;
    } else if (day == "Saturday") {
        sum *= 0.9;
    }
    let difference = Math.abs(budget - sum).toFixed(2);
    if (budget >= sum) {
        console.log (`Safari time! Money left: ${difference} lv. `)
    } else {
        console.log(`Not enough money! Money needed: ${difference} lv.`)
    }
    
}
safari ([1000,
    10,
    "Sunday"])