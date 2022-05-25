function addBags (input) {
    const bagOver20KgPrice = Number (input[0]);
    const bagKg = Number (input[1]);
    const daysToTravel = Number (input[2]);
    const bagsCount = Number (input[3]);
    let price = 0;

    if (bagKg < 10) {
        price = (bagOver20KgPrice * 0.2);
    } else if (bagKg >= 10 && bagKg <=20) {
        price = (bagOver20KgPrice * 0.5);
    } else {
        price = bagOver20KgPrice;
    }

    if (daysToTravel > 30) {
        price *= 1.1; 
    } else if (daysToTravel >= 7 && daysToTravel <=30) {
        price *= 1.15;
    } else if (daysToTravel < 7) {
        price *= 1.4;
    }
    const totalPrice = price * bagsCount;
   console.log (`The total price of bags is: ${totalPrice.toFixed(2)} lv.`) 
}
addBags ([30, 18, 15, 2])