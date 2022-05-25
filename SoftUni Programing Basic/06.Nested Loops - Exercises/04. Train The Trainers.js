function trainTheTrainers (input) {
    let index = 0;
    let juryCount = Number(input[index]);
    index++;
    let totalRate = 0;
    let rateCounter = 0;
    let command = input[index];
    while (command != "Finish") {
        let topic = command;
        let tempRate = 0;
        index++;
        command = input[index];
        for(let i = 1; i <= juryCount; i++) {
            let rate = Number(command);
            index++;
            command = input[index];
            totalRate += rate;
            tempRate += rate;
            rateCounter++;
        }
        console.log(`${topic} - ${(tempRate / juryCount).toFixed(2)}.`)
    }
    console.log(`Student's final assessment is ${(totalRate / rateCounter).toFixed(2)}. `)
}
trainTheTrainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])