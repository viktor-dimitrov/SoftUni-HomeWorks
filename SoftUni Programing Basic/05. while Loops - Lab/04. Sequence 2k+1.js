function sequence (input) {
    const endNum = Number (input[0]);
    let num = 1;
    while (num <= endNum) {
        console.log (num)
        num = num * 2 + 1;
    }
}
sequence(["17"])