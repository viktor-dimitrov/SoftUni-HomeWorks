function catWalking (input) {

    const minutes = Number (input[0]);
    const walkingsCount = Number (input[1]);
    const calories = Number (input[2]);
    
    const burnedCalories = (minutes * 5) * walkingsCount;
    const norm = calories / 2;

    if (burnedCalories >= norm) {
        console.log (`Yes, the walk for your cat is enough. Burned calories per day: ${burnedCalories}.`);
    } else {
        console.log (`No, the walk for your cat is not enough. Burned calories per day: ${burnedCalories}.`)
    }

}
catWalking ([30, 3, 600])