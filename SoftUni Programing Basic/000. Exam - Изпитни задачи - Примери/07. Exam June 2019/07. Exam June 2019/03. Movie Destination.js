function movieDestination (input) {
    let budget = Number(input[0]);
    let destination = input[1];
    let seasson = input[2];
    let daysCount = Number(input[3]);
    let pricePerDay = 0;

    if (seasson == "Winter") {
        switch(destination) {
            case"Dubai": pricePerDay = 45000; break;
            case"Sofia": pricePerDay = 17000; break;
            case"London": pricePerDay = 24000; break;
        }
    } else {
        switch(destination) {
            case"Dubai": pricePerDay = 40000; break;
            case"Sofia": pricePerDay = 12500; break;
            case"London": pricePerDay = 20250; break;
        }
    }

    let sum = pricePerDay * daysCount;
    
    if (destination == "Dubai") {
        sum *= 0.7;
    } else if (destination == "Sofia") {
        sum *= 1.25; 
    }

    let difference = Math.abs(budget - sum);

    if (sum <= budget) {
        console.log(`The budget for the movie is enough! We have ${difference.toFixed(2)} leva left!`);
    } else {
        console.log(`The director needs ${difference.toFixed(2)} leva more!`);
    }

}
movieDestination (["200000",
"London",
"Summer",
"7"])