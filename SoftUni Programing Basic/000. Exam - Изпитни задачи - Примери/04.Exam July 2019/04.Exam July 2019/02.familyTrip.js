function familyTrip (input) {
    const budget = Number (input[0]);
    const nights = Number (input[1]);
    let pricePerNight = Number (input[2]);
    const outlayPercent = Number (input[3]);
    let discount = 1
    if (nights > 7) {
        discount = 0.95;
    }
    let totalPrice = (nights * pricePerNight) * discount;
    let totalSum = totalPrice + (budget * (outlayPercent / 100));
    const difference = Math.abs (budget - totalSum);
    if (budget >= totalSum) {
        console.log (`Ivanovi will be left with ${difference.toFixed(2)} leva after vacation.`)
    } else {
        console.log (`${difference.toFixed(2)} leva needed.`)
    } 
}
familyTrip([500, 7, 66, 15])
