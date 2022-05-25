function foodForPets (input) {
    index = 0;
    let days = Number (input[index]);
    index++;
    let allFood = Number (input[index]);
    index++;
    let eatenBiscuits = 0;
    let eatenFood = 0;
    let dog = 0;
    let cat = 0;

    for (let i = 1; i <= days; i++) {
        let dogFood = Number (input[index])
        index++;
        let catFood = Number (input[index]);
        index++;
        dog += dogFood;
        cat += catFood;
        eatenFood += dogFood + catFood;

        if (i % 3 === 0) {
            eatenBiscuits += (dogFood + catFood) * 0.1;

        }
    }
    let percentOfEatenFood = (eatenFood / allFood * 100).toFixed(2);
    let percentOfDog = (dog / eatenFood * 100).toFixed(2);
    let percentOfCat = (cat / eatenFood * 100).toFixed(2);
    console.log (`Total eaten biscuits: ${Math.trunc(eatenBiscuits)}gr.`);
    console.log (`${percentOfEatenFood}% of the food has been eaten.`);
    console.log (`${percentOfDog}% eaten from the dog.`);
    console.log (`${percentOfCat}% eaten from the cat.`)
}
foodForPets ([3,
    1000,
    300,
    20,
    100,
    30,
    110,
    40])