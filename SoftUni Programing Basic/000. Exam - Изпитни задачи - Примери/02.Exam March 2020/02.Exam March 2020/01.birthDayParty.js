function birthdayParty (input) {
    const rent = Number (input);
    const cakePrice = rent * 0.2;
    const drinksPrice = cakePrice - cakePrice * 0.45;
    const animatorPrice = rent / 3
    const totalPrice = rent + cakePrice + drinksPrice + animatorPrice;
console.log(totalPrice)
}
birthdayParty("2250")