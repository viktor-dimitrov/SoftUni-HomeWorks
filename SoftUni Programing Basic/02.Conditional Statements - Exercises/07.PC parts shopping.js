function shopping(input) {
const graphicCardPrice = Number (250)
const budget = Number (input[0]);
const graphicCardCount = Number (input[1]);
const processorCount = Number (input[2]);
const memoryCount = Number (input[3]);
const totalGraphicCardsPrice = graphicCardPrice * graphicCardCount;
const totalProcessorsPrice = (0.35 * totalGraphicCardsPrice) * processorCount;
const totalMemoryPrice = (0.1 * totalGraphicCardsPrice) * memoryCount;
let totalSum = totalGraphicCardsPrice + totalProcessorsPrice + totalMemoryPrice;
if (graphicCardCount > processorCount) {
    totalSum *= 0.85;
}
const difference = Math.abs(budget - totalSum).toFixed(2);
if (budget >= totalSum) {
    console.log (`You have ${difference} leva left!`)
} else {
    console.log (`Not enough money! You need ${difference} leva more!`)
}
}





shopping(["900", "2", "1", "3"]);

