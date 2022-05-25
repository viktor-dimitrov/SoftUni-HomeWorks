function deerOfSanta (input) {
    const days = Number(input[0]);
    const allFood = Number(input[1]);
    const foodPerDayA = Number(input[2]);
    const foodPerDayB = Number(input[3]);
    const foodPerDayC = Number(input[4]);
    const eatenFood = (foodPerDayA + foodPerDayB + foodPerDayC) * days;
    const difference = Math.abs(allFood - eatenFood);
    if (allFood >= eatenFood) {
        console.log(`${Math.floor(difference)} kilos of food left.`)
    } else {
        console.log(`${Math.ceil(difference)} more kilos of food are needed.`)
    }
}
deerOfSanta(["5",
"10",
"2.1",
"0.8",
"11"])