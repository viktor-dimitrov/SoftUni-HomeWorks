function toyShop(input) {
const puzzlePrice = Number (2.6)
const talkingDollPrice = Number (3);
const teddyBearPrice = Number (4.1);
const minionPrice = Number (8.2);
const truckPrice = Number (2);
const vacationPrice = Number(input[0]);
const puzzles = Number(input[1])
const talkingDolls = Number(input[2]);
const teddyBears = Number(input[3]);
const minions = Number(input[4]);
const trucks = Number(input[5]);
let allToys = (puzzles + talkingDolls + teddyBears + minions + trucks)
let sum = (puzzlePrice * puzzles + talkingDollPrice * talkingDolls +
     teddyBearPrice * teddyBears + minionPrice * minions + truckPrice * trucks);
     if (allToys >= 50){
          sum = sum - (sum * 0.25);
     }
const interest = sum * 0.9;
const difference = Math.abs(interest - vacationPrice).toFixed(2);
     if (interest >= vacationPrice) {
          console.log (`Yes! ${difference} lv left.`)
     } else {
          console.log (`Not enough money! ${difference} lv needed.`)
     }
}


toyShop(["40.8", "20", "25", "30", "50", "10"]);
