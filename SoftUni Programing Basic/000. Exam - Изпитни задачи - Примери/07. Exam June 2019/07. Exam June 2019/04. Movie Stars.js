function movieStars (input) {
    let budget = Number(input[0]);

    let index = 1;
    let command = input[index];

    while (command != "ACTION") {
        let sum = 0;
        let actorName = input[index];
        index++;
        if (actorName.length > 15) {
            sum = budget * 0.2;
        } else {
            sum = Number(input[index]);
            index++;
        }

        budget -= sum;
        command = input[index];

        if (budget <= 0) {
            break;
        }
    }

    if (budget >= 0) {
        console.log(`We are left with ${budget.toFixed(2)} leva.`);
    } else {
        console.log(`We need ${Math.abs(budget).toFixed(2)} leva for our actors.`);
    }

}
movieStars(["600000",
"Michael Aniston",
400000,
"Pamela Anderson",
200010,
"ACTION"])