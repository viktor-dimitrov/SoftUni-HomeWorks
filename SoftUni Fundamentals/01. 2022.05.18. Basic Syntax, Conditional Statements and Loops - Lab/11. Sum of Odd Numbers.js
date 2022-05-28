function sumOfOddNumbers (count) {
    let sum = 0;
    let counter = 0;
    let num = 1; 

    while (counter < count) {
        if (num % 2 != 0) {
            console.log(num);
            counter++;
            sum +=num;
            
        }
        num++;
    }
    console.log(`Sum: ${sum}`)

}
sumOfOddNumbers(3)