function divisionWithoutRemainder (input) {
    let numbersCount = Number(input[0]);
    let twoDivCounter = 0;
    let threeDivCounter = 0;
    let fourDivCounter = 0;
    let index = 1;

    for (let i = 1; i <= numbersCount; i++) {
        let num = Number(input[index]);
        index++;
        if (num % 2 == 0) {
            twoDivCounter++;
        }
         if (num % 3 == 0) {
            threeDivCounter++;
        }
        if (num % 4 == 0) {
            fourDivCounter++;
        }
    }
    console.log(`${(twoDivCounter / numbersCount * 100).toFixed(2)}%`);
    console.log(`${(threeDivCounter / numbersCount * 100).toFixed(2)}%`);
    console.log(`${(fourDivCounter / numbersCount * 100).toFixed(2)}%`);
}
divisionWithoutRemainder(["10",
"680",
"2",
"600",
"200",
"800",
"799",
"199",
"46",
"128",
"65"])