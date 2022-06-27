function expirienceGaining(input) {
    let neededExp = input.shift();
    let battlesCount = input.shift();
    let sum = 0;
    let counter = 0;
    
    for (let el of input) {
        let exp = el;
        counter++;

        if (counter % 15 === 0) {
            exp *= 1.05;
        } else if (counter % 3 === 0) {
            exp *= 1.15;
        } else if (counter % 5 === 0) {
            exp *= 0.9;
        }

        sum += exp;

        if (sum >= neededExp) {
            break;
        }
    }

    let diff = Math.abs(neededExp - sum)
    if (sum >= neededExp) {
        console.log(`Player successfully collected his needed experience for ${counter} battles.`);
    } else {
        console.log(`Player was not able to collect the needed experience, ${diff.toFixed(2)} more needed.`);
    }
}
expirienceGaining([500,
    5,
    50,
    100,
    200,
    100,
    20])