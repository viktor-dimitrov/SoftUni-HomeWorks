function transportPrice (input){
const km = Number (input[0]);
const dayOrNight = String (input[1]);
let price = 0
if (km < 20) {
    if (dayOrNight === "day") {
    price = 0.7 + (km * 0.79);
} else {
    price = 0.7 + (km * 0.9);
}
} else if (km >= 100) {
    price = km * 0.06;
} else {
    price = km * 0.09;
}
console.log (price.toFixed(2));
}
transportPrice (["5", "day"])
transportPrice (["7", "night"])
transportPrice (["25", "day"])
transportPrice (["180", "night"])