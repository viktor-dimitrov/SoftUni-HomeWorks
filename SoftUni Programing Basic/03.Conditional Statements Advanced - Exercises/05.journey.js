function journey (input) {
    const budget = Number (input[0]);
    const season = String (input[1]);
    let outlay = 0;
    let destination = "";
    let sleepIn = "";
    if (budget <= 100) {
        destination = "Bulgaria";
        switch (season) {
            case "summer": outlay = 0.3; sleepIn = "Camp"; break;
            case "winter": outlay = 0.7; sleepIn = "Hotel"; break;
        }
        
    } else if (budget > 100 && budget <= 1000) {
        destination = "Balkans"
        switch (season) {
            case "summer": outlay = 0.4; sleepIn = "Camp"; break;
            case "winter": outlay = 0.8; sleepIn = "Hotel"; break; 
        }
    } else {
        destination = "Europe";
        outlay = 0.9;
         sleepIn = "Hotel";
    }
    price = (budget * outlay).toFixed(2);
    console.log (`Somewhere in ${destination}`)
    console.log (`${sleepIn} - ${price}`)
}
journey(["50", "summer"])