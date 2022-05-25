function skiTrip (input) {
    const daysCount = Number (input[0]) - 1;
    const objectType = String (input[1]);
    const rate = String (input[2]);
    const oneRoomPrice = 18;
    const apartmentPrice = 25;
    const presidentApartmentPrice = 35;
    let price = 0; 
  
    if (daysCount < 10) {
        switch (objectType) {
            case "room for one person": price = oneRoomPrice; break;
            case "apartment": price = apartmentPrice * 0.7; break;
            case "president apartment": price = presidentApartmentPrice * 0.9; break;
        }
    } else if (daysCount >= 10 && daysCount <= 15) {
        switch (objectType) {
            case "room for one person": price = oneRoomPrice; break;
            case "apartment": price = apartmentPrice * 0.65; break;
            case "president apartment": price = presidentApartmentPrice * 0.85; break;
        }
    } else if (daysCount > 15) {
        switch (objectType) {
            case "room for one person": price = oneRoomPrice; break;
            case "apartment": price = apartmentPrice * 0.5; break;
            case "president apartment": price = presidentApartmentPrice * 0.8; break;
        }
    }
    let totalPrice = price * daysCount;
    switch (rate) {
        case "positive": totalPrice *= 1.25; break;
        case "negative": totalPrice *= 0.9; break;
    }
console.log (totalPrice.toFixed(2));
}
skiTrip(["14", "apartment", "positive"])
