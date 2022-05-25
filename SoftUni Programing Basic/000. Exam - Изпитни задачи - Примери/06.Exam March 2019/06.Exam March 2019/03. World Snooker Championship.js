function worldSnookerChampionship (input) {
    const level = input[0];
    const ticketType = input[1];
    const ticketCount = Number(input[2]);
    const getPhoto = input[3];
    let priceForTicket = 0;

    if (level == "Quarter final") {
        switch(ticketType) {
            case "Standard": priceForTicket = 55.5; break;
            case "Premium": priceForTicket = 105.2; break;
            case "VIP": priceForTicket = 118.9; break;
        }
    } else if (level == "Semi final") {
        switch(ticketType) {
            case "Standard": priceForTicket = 75.88; break;
            case "Premium": priceForTicket = 125.22; break;
            case "VIP": priceForTicket = 300.4; break;
        } 
    } else if (level == "Final") {
        switch(ticketType) {
            case "Standard": priceForTicket = 110.1; break;
            case "Premium": priceForTicket = 160.66; break;
            case "VIP": priceForTicket = 400; break;
        }
    }   
    
    let price = ticketCount * priceForTicket;
    
    if (price > 4000) {
        price *= 0.75;
    } else if (price > 2500) {
        price *= 0.9;
    }
    
    if (getPhoto == "Y" && price < 4000) {
        price += ticketCount * 40;
    }
    console.log(price.toFixed(2))
}
worldSnookerChampionship (["Quarter final",
"Standard",
"11",
"N"])