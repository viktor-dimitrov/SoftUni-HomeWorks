function blackFlag (input) {
    let days = Number(input[0]);
    let dailyPlunder = Number(input[1]);
    let expectedPlunder = Number(input[2]);
    let sum = 0;
   
    for(let day = 1; day <= days;day++) {
        sum += dailyPlunder;

        if (day % 3 === 0) {
            sum += (dailyPlunder / 2);
        }
        if (day % 5 === 0) {
            sum -= sum * 30 / 100;
        }
    }
    if (sum >= expectedPlunder) {
        console.log(`Ahoy! ${sum.toFixed(2)} plunder gained.`);
    } else {
        let percentage = (sum / expectedPlunder * 100).toFixed(2);
        console.log(`Collected only ${percentage}% of the plunder.`);
    }

}
blackFlag(((["5",
"40",
"100"])))