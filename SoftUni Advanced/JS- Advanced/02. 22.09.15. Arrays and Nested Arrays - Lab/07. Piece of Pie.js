function pieceOfPie(inputArray, start, end) {
    let output = inputArray.slice(inputArray.indexOf(start), inputArray.indexOf(end) + 1);
    return output;
}
console.log(pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'))