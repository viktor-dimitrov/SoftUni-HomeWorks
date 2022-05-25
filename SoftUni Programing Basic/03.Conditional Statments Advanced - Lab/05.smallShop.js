function smallShop (input) {
    const product = String (input[0]);
    const town = String (input[1]);
    const quantity = Number (input[2]);
    let price = Number (0);

    if (town === "Sofia") {
        switch (product) {
            case "coffee": price = 0.5; break;
            case "water": price = 0.8; break;
            case "beer": price = 1.2; break;
            case "sweets": price = 1.45; break;
            case "peanuts": price = 1.6; break;
        }
    } else if (town === "Plovdiv") {
        switch (product) {
            case "coffee": price = 0.4; break;
            case "water": price = 0.7; break;
            case "beer": price = 1.15; break;
            case "sweets": price = 1.3; break;
            case "peanuts": price = 1.5; break;
    }
    } else if (town === "Varna") {
        switch (product) {
            case "coffee": price = 0.45; break;
            case "water": price = 0.7; break;
            case "beer": price = 1.1; break;
            case "sweets": price = 1.35; break;
            case "peanuts": price = 1.55; break;
    }
    }
console.log (price * quantity)
}
smallShop(["coffee", "Varna", "6"])


// град / продукт	coffee	water	beer	sweets	peanuts
// Sofia	        0.50	0.80	1.20   	1.45    1.60
// Plovdiv      	0.40	0.70	1.15	1.30	1.50
// Varna	        0.45	0.70	1.10	1.35	1.55
