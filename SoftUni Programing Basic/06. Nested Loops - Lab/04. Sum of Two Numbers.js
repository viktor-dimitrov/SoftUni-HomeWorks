function sumOfTwoNumbers (input) {
    let start = Number(input[0]);
    let end = Number (input[1]);
    let n = Number (input[2]);
    let counter = 0;
    let isFind = false;
    let solve = "";

    for (let a = start; a <= end; a++) {
        for (let b = start; b <= end; b++) {
            counter++;
            if (a + b == n) {
                solve += (`${a} + ${b} = ${n}`);
                isFind = true;
                break;
            } 
        }
        if (isFind == true) {
            break;
        } 
    }
    if (isFind == true) {
        console.log (`Combination N:${counter} (${solve})`);
    } else {
        console.log (`${counter} combinations - neither equals ${n}`);
    }
}
sumOfTwoNumbers(["1",
"10",
"5"])