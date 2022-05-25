function fishLand(input){
const mackerelPrice = Number(input[0]);
const spratPrice = Number(input[1]);
const bonitoWeight = Number(input[2]);
const scadWeight = Number(input[3]);
const musselsWeight = Number(input[4]);

const bonitoPrice = (mackerelPrice + (mackerelPrice * 0.6)) * bonitoWeight;
const scadPrice = (spratPrice + (spratPrice * 0.8)) * scadWeight;
const musselsPrice = 7.5 * musselsWeight;

const totalSum = (bonitoPrice + scadPrice + musselsPrice).toFixed(2);
console.log (totalSum);
  
}
fishLand(["6.90", "4.20", "1.5", "2.5", "1"])