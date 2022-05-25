function changeBureau (input) {
    const bitcoinCount = Number (input[0]);
    const uanCount = Number (input[1]);
    const commission =Number (input[2]);
    const bitcoinPrice = 1168;
    const euroPrice = 1.95;
    const dollarPrice =1.76;
    const uanPrice = dollarPrice * 0.15;
    const sum = (bitcoinCount * bitcoinPrice + uanCount * uanPrice) / euroPrice;
    const totalSum = sum - (sum * (commission / 100));
    console.log(totalSum.toFixed(2))

}
changeBureau ([1, 5, 5])