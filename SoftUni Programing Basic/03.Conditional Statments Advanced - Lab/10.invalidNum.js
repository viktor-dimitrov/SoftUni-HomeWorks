function invalidNum (input) {
    const num = Number (input[0]);

    if (num < 100 && num !== 0 || num > 200) {
        console.log (`invalid`);
    } 
}
invalidNum(["200"])
