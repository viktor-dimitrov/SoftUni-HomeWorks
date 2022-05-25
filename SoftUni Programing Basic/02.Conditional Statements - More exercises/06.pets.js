function pets(input) {
    const days = Number (input[0]);
    const food = Number (input[1]);
    const dogFoodPerDay = Number (input[2]) * 1000;
    const catFoodPerDay = Number (input[3]) * 1000;
    const turtleFoodPerDay = Number (input[4]);
    const neededFood = (dogFoodPerDay * days + catFoodPerDay * days + turtleFoodPerDay * days) / 1000
    const difference = Math.abs (food - neededFood);
if (food >= neededFood) {
    console.log (`${Math.floor(difference)} kilos of food left.`)
} else {
    console.log (`${Math.ceil(difference)} more kilos of food are needed.`)
}
}


pets([2, 10, 1, 1, 1200])
pets([5, 10, 2.1, 0.8, 321])

