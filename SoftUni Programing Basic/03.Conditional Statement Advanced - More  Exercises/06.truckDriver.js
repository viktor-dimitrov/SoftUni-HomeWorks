function truckDriver (input) {
    const season = String (input[0]);
    const kmPerMonth = Number (input[1]);
    let pricePerKm = 0;

    if (kmPerMonth <= 5000) {
        switch (season) {
            case "Spring":
            case "Autumn": pricePerKm = 0.75; break;
            case "Summer": pricePerKm = 0.9; break;
            case "Winter": pricePerKm = 1.05; break;    
        }
    } else if (kmPerMonth > 5000 && kmPerMonth <= 10000) {
        switch (season) {
            case "Spring":
            case "Autumn": pricePerKm = 0.95; break;
            case "Summer": pricePerKm = 1.1; break;
            case "Winter": pricePerKm = 1.25; break;    
        }
    } else {
        pricePerKm = 1.45;
    }
    const totalSum = (pricePerKm * kmPerMonth * 4) * 0.9 
console.log (totalSum.toFixed(2))

}
truckDriver (["Spring", "1600"])