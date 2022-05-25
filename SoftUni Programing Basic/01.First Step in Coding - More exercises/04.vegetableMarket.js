function vegetableMarket(input){
const vegetablesPrice = Number(input[0]);
const fruitsPrice = Number(input[1]);
const vegetablesWeight = Number(input[2]);
const fruitsWeight = Number(input[3]);
const courseOfEuro = 1.94;
const gain = ((vegetablesPrice * vegetablesWeight) + (fruitsPrice * fruitsWeight)) / courseOfEuro;
console.log (gain.toFixed(2))

}
vegetableMarket(["0.194", "19.4", "10", "10"])