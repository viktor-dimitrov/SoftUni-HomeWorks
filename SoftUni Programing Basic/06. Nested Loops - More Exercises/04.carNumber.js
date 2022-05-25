function carNumber (input) {
    let firstNum = Number(input[0]);
    let endNum = Number(input[1]);
    let carNumbers = "";

    for (let a = firstNum; a <= endNum; a++) {
        let numA = Number(a);
        for (let b = firstNum; b <= endNum; b++) {
            let numB = Number(b);
            for (let c = firstNum; c <= endNum; c++) {
                let numC = Number(c);
                for (let d = firstNum; d <= endNum; d ++) {
                    let numD = Number(d);
                    let middleNums = numB + numC;
                    if (numA % 2 == 0 && numD % 2 != 0 && numA > numD && middleNums % 2 == 0) {
                        carNumbers += `${numA}${numB}${numC}${numD} `;
                    } else if (numA % 2 != 0 && numD % 2 == 0 && numA > numD && middleNums % 2 == 0) {
                        carNumbers += `${numA}${numB}${numC}${numD} `;
                    }
                }
            }
        }
    }
console.log(carNumbers)

}
carNumber(["3", "5"])