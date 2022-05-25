function squareFrame (input) {
    const num = Number(input[0]);
    let row = "";

    for (let i = 1; i <= num - 2; i++) {
        row += "- ";
    }
    console.log(`+ ${row}+`);
    for (let j = 1; j <= num - 2; j++ ) {
        console.log(`| ${row}|`);
    }
    console.log(`+ ${row}+`);
}
squareFrame([5])