function matchTickets(input) {
    let budget = Number (input[0]);
    const category = input [1];
    const menCount = Number (input[2]);
    const vipTicket = 499.99;
    const normalTicket = 249.99;
    let price = 0;
    switch (category) {
        case "VIP": price = vipTicket * menCount; break;
        case "Normal": price = normalTicket * menCount; break;
    }
    
    if (menCount < 5) {
        budget *= 0.25;
    } else if (menCount >= 5 && menCount < 10) {
        budget *= 0.4;
    } else if (menCount >= 10 && menCount < 25) {
        budget *= 0.5;
    } else if (menCount >= 25 && menCount <50) {
        budget *= 0.6;
    } else {
        budget *= 0.75;
    }
    const differnece = Math.abs (budget - price);
    
    if (budget < price) {
        console.log (`Not enough money! You need ${differnece.toFixed(2)} leva.`)
    } else {
        console.log (`Yes! You have ${differnece.toFixed(2)} leva left.`)
    }
}
matchTickets ([999, "Normal", 1])

