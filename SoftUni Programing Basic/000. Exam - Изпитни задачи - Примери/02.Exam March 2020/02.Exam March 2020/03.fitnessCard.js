function fitnessCard (input) {
    const money = Number (input[0]);
    const sex = String (input[1]);
    const age = Number (input[2]);
    const sport = String (input[3]);
    let price = 0;
    switch (sport) {
        case "Gym":
            switch (sex) {
                case "m": price = 42; break;
                case "f": price = 35; break;
            }; break;
        case "Boxing":
            switch (sex) {
                case "m": price = 41; break;
                case "f": price = 37; break; 
            }; break;
        case "Yoga":
            switch (sex) {
                case "m": price = 45; break;
                case "f": price = 42; break;
            }; break;
        case "Zumba":
            switch (sex) {
                case "m": price = 34; break;
                case "f": price = 31; break;
            }; break;
        case "Dances":
            switch (sex) {
                case "m": price = 51;break;
                case "f": price = 53; break;
            }; break;
        case "Pilates":
            switch (sex) {
                case "m": price = 39; break;
                case "f": price = 37; break;
            } break;                
    }

    if (age <= 19) {
        price *= 0.8;
    }
    const difference = Math.abs(money - price);

    if (money >= price) {
        console.log (`You purchased a 1 month pass for ${sport}.`)
    } else {
        console.log (`You don't have enough money! You need $${difference.toFixed(2)} more.`)
    }
}
fitnessCard ([50, "f" ,23, "Dances"])