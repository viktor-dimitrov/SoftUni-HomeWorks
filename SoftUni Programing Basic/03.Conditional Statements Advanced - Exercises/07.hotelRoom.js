function hotelRoom (input) {
    const month = input[0];
    const period = Number (input[1]);
    let studioPrice = 0;
    let apartmentPrice = 0;

    switch (month) {
        case "May": 
        case "October": studioPrice = 50 * period; apartmentPrice = 65 * period;

        if (period >7 && period <= 14) {
            studioPrice *= 0.95;
        } else if (period > 14) {
            studioPrice *= 0.7;
            apartmentPrice *= 0.9;
        } ; break;

        case "June":
        case "September":studioPrice = 75.20 * period; apartmentPrice = 68.70 * period;

        if (period > 14) {
            studioPrice *= 0.8;
            apartmentPrice *= 0.9
        } ; break;

        case "July":
        case "August":studioPrice = 76 * period; apartmentPrice = 77 * period;

        if (period > 14) {
            apartmentPrice *= 0.9;
        } ; break;
    }
console.log (`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
console.log (`Studio: ${studioPrice.toFixed(2)} lv.`)

}
hotelRoom (["May", "15"])