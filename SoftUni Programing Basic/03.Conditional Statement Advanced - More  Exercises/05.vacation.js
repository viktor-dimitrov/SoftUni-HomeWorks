function vacation (input) {
    const budget = Number (input[0]);
    const season = String (input[1]);
    let place = "";
    let price = 0;
    let destination = "";

    if (budget <= 1000) {
        place = "Camp"
    } else if (budget >1000 && budget <= 3000) {
        place = "Hut"
    } else {
        place = "Hotel"
    }

    switch (place) {
        case "Camp":
            switch (season) {
                case "Summer": price = budget * 0.65; break;
                case "Winter": price = budget * 0.45; break;
            }; break;
        case "Hut":
            switch (season) {
                case "Summer": price = budget * 0.8; break;
                case "Winter": price = budget * 0.6; break;
            }; break;
        case "Hotel":
            switch (season) {
                case "Summer":
                case "Winter": price = budget * 0.9; break;
            }; break;    
    }
    
    if (season === "Summer") {
        destination = "Alaska";
    } else {
        destination = "Morocco";
    }
    console.log (`${destination} - ${place} - ${price.toFixed(2)}`)  
}
vacation ([800, "Summer"])
