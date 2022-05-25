function energyBooster (input) {
    const fruit = String (input[0]);
    const size = String (input[1]);
    const packCount = Number (input[2]);
    let price = 0;
    let gelsCount = 0;
    switch (fruit) {
        case "Watermelon":
            switch (size) {
                case "small": price = 56; break;
                case "big": price = 28.70; break
            }; break;
        case "Mango":
            switch (size) {
                case "small": price = 36.66; break;
                case "big": price = 19.60; break;
            }; break;
        case "Pineapple":
            switch (size) {
                case "small": price = 42.10; break;
                case "big": price = 24.80; break;
            }; break;
        case "Raspberry":
            switch (size) {
                case "small": price = 20; break;
                case "big": price = 15.20; break;
            }; break;           
    }

    switch (size) {
        case "small": gelsCount = 2; break;
        case "big": gelsCount = 5; break;
    }
    let sum = (gelsCount * packCount) * price; 
    
    if (sum >=400 && sum <= 1000) {
        sum *= 0.85;
    } else if (sum > 1000) {
        sum *= 0.5;
    }
    console.log (`${sum.toFixed(2)} lv.`)

}
energyBooster(["Pineapple", "small", 1 ])