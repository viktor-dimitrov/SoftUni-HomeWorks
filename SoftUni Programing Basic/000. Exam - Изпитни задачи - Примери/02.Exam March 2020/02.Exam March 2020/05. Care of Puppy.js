function careOfPuppy (input) {
    const foodKg = Number(input[0]);
    let foodGm = foodKg * 1000;
    let index = 1;
    let command = input[index];
    while (command != "Adopted") {
        let food = Number(command);
        foodGm -= food;
        index++
        command = input[index]
    }
 if (foodGm >= 0) {
     console.log (`Food is enough! Leftovers: ${foodGm} grams.`)
 } else {
     console.log (`Food is not enough. You need ${Math.abs(foodGm)} grams more.`)
 }
}
careOfPuppy([4,
    130,
    345,
    400,
    180,
    230,
    120,
    "Adopted"])