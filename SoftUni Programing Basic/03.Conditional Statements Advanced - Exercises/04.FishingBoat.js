function fishingBoat(input) {
    const budget = Number (input[0]);
    const season = String (input[1]);
    const fisherMenCount = Number (input[2]);
    const springPrice = 3000;
    const summerAndAutumnPrice = 4200;
    const winterPrice = 2600;
    let discount = 0;
   
    if (fisherMenCount <= 6) {
        discount = 0.1 ;
    } else if (fisherMenCount >= 7 && fisherMenCount <= 11) {
        discount = 0.15 ;
    } else if (fisherMenCount >= 12) {
        discount = 0.25 ;
    }
    let price = 0;

    switch (season) {
        case "Spring": price = springPrice - (springPrice * discount); break;
        case "Winter": price = winterPrice - (winterPrice * discount); break;
        default: price = summerAndAutumnPrice - (summerAndAutumnPrice * discount); break;
    }

    if (season != "Autumn" && fisherMenCount % 2 == 0) {
        price *= 0.95; 
    }

    const difference = Math.abs (budget - price);
    
    if (budget >= price) {
        console.log (`Yes! You have ${difference.toFixed(2)} leva left.`)
    } else {
        console.log (`Not enough money! You need ${difference.toFixed(2)} leva.`)
    }
}
fishingBoat (["2000", "Winter", "13"])
