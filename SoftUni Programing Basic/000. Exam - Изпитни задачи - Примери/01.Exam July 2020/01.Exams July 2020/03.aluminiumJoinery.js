function aluminiumJoinery (input) {

    const joineryCount = Number (input[0]);
    const joineryType = String (input[1]);
    const delivery = String (input[2]);

    let price = 0;

    switch (joineryType) {
        case "90X130": price = 110;
        if (joineryCount > 30 && joineryCount <= 60) {
            price *= 0.95;
        } else if (joineryCount > 60) {
            price *= 0.92;
        }; break;
        case "100X150": price = 140;
        if (joineryCount > 40 && joineryCount <= 80) {
            price *= 0.94;
        } else if (joineryCount > 80) {
            price *= 0.9;
        }; break;
        case "130X180": price = 190;
        if (joineryCount > 20 && joineryCount <=50) {
            price *= 0.93;
        } else if (joineryCount > 50) {
            price *= 0.88;
        }; break;
        case "200X300": price = 250;
        if (joineryCount > 25 && joineryCount<= 50) {
            price *= 0.91;
        } else if (joineryCount > 50) {
            price *= 0.86;

        }
    }    
    let totalPrice = price * joineryCount
    switch (delivery) {
        case "With delivery": totalPrice += 60; break;
    }

    if (joineryCount > 99) {
        totalPrice *= 0.96;
    }

    if (joineryCount < 10) {
        console.log (`Invalid order`)
    } else {
        console.log (`${totalPrice.toFixed(2)} BGN`)
    }
    
}
aluminiumJoinery ([40, "90X130", "Without delivery"])
   