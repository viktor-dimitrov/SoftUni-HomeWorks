function numberDivisibleBy9 (input) {
    const startNum = Number (input[0]);
    const stopNum = Number (input[1]);
    let sum = 0;
    for (let i = startNum; i <= stopNum; i++) {

        if (i % 9 == 0) {
            sum += i;
        }   
    }
    console.log (`The sum: ${sum}`)

    for (let i = startNum; i <= stopNum; i++) {
        if (i % 9 == 0) {
            console.log(i)
        }
    }
}
numberDivisibleBy9(["100", "200"])