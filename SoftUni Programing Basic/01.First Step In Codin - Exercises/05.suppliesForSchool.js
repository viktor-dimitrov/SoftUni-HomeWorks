function suppliesForSchool(input) {
const pensPrice = 5.8;
const markerPrice = 7.2;
const detergentPerLiter = 1.2;
const pensCount = Number(input[0]);
const markerCount = Number(input[1]);
const detergentLiters = Number(input[2]);
const percentDiscount = Number(input[3]);
const priceForAll = (pensPrice * pensCount) + (markerPrice * markerCount) + (detergentPerLiter * detergentLiters);
const totalPrice = priceForAll - priceForAll * (percentDiscount / 100);
console.log (totalPrice)

}


suppliesForSchool(["4", "2", "5", "13"])