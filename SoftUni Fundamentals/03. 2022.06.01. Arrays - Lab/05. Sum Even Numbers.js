function sumEvenNumbers (input) {
    let stop = input.length - 1
    
    let sum = 0;
    for (let i = 0; i <= stop; i++) {
        let num = Number(input[i]);

        if (num % 2 == 0) {
            sum += num;
        }
    }

    console.log(sum)
}
sumEvenNumbers(['1','2','3','4','5','6'])