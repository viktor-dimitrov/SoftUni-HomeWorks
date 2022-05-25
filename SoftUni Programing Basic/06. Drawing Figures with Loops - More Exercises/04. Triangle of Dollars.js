function triangleOfDollars (input) {
    let stop = Number(input[0]);
    let row = "";

    for (let i = 1; i <= stop; i ++) {
         row += "$ ";
         console.log(row)
    }
}
triangleOfDollars([5])