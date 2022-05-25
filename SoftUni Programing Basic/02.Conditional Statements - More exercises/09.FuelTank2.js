function fuelTank2(input) {
const fuel = String (input[0]);
const fuelVolume = Number (input[1]);
const promo = String (input[2]);
let gasolinePrice = 2.22;
let dieselPrice = 2.33;
let gasPrice = 0.93;
let fuelPrice = 0;

if (promo === "Yes") {
    gasolinePrice = gasolinePrice - 0.18;
    dieselPrice = dieselPrice - 0.12;
    gasPrice = gasPrice - 0.08;
}
if (fuel === "Gasoline"){
    fuelPrice = gasolinePrice * fuelVolume;
} else if (fuel === "Gas"){
    fuelPrice = (gasPrice * fuelVolume);
} else if (fuel === "Diesel"){
    fuelPrice = dieselPrice * fuelVolume;
}
if (fuelVolume >=20 && fuelVolume <=25) {
    fuelPrice *= 0.92;
} else if (fuelVolume > 25) {
    fuelPrice *= 0.9;
}


console.log(`${fuelPrice.toFixed(2)} lv.`)
}
fuelTank2(["Gasoline", 25, "No"])