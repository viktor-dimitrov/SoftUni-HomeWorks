function luckyNumbers (input) {
    let myNum = Number(input[0]);
    let luckyNums = "";

    for (let number = 1111; number < 10000; number ++) {
        let text = "" + number;
        let a = Number(text[0]);
        let b = Number(text[1]);
        let c = Number(text[2]);
        let d = Number(text[3]);
        if (a != 0 && b!=0 && c!=0 && d != 0) {
         if ((a+b) == (c+d) && (myNum) % (a+b) == 0 && myNum % (a+b) == 0){
            luckyNums += `${a}${b}${c}${d} `
         }
        }
    }
console.log(luckyNums)


}
luckyNumbers ([7])