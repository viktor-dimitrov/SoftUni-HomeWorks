function sumPrimeNonPrime (input) {
    let index = 0;
    let command = input[index];
    let allPrime = 0;
    let allNonprime = 0;
    while (command !== "stop" ) {
        let isPrime = true;
        let num = Number(command);
        if (num < 0 ) {
            console.log (`Number is negative.`);
            index++;
            command = input[index];
            
            continue;
        }
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime){
            allPrime += num;
        } else {
            allNonprime +=num
        }
        index++;
        command = input[index];
    } 
    console.log(`Sum of all prime numbers is: ${allPrime}`)
    console.log(`Sum of all non prime numbers is: ${allNonprime}`)
}
sumPrimeNonPrime(["30",
"83",
"33",
"-1",
"20",
"stop"])