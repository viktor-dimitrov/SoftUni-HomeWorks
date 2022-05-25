function fruitMarket (input1,input2,input3,input4,input5) {
    const strawberryPrice = Number(input1);
    const bananasKg = Number(input2);
    const orangeKg = Number(input3);
    const raspberryKg = Number(input4);
    const strawberryKg = Number(input5);
    const rasberryPrice = strawberryPrice / 2;
    const orangePrice = rasberryPrice - (rasberryPrice * 0.4);
    const bananasPrice = rasberryPrice - (rasberryPrice * 0.8);
    const totalSum = (strawberryKg * strawberryPrice) + (bananasKg * bananasPrice) + (orangeKg * orangePrice) + (raspberryKg * rasberryPrice);
    console.log(totalSum.toFixed(2))    
}
fruitMarket ("48",
    "10",
    "3.3",
    "6.5",
    "1.7")