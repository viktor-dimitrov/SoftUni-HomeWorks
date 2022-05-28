function rounding(num,precision) {
    if (precision > 15) {
        precision = 15;
    }

let myNum = num.toFixed(precision);
let roundedNum = Number(myNum)


console.log(roundedNum)

}
rounding(10.5,3)