function sumOFNumbers (input) {
    const text = String (input[0]);
    let sum = 0;

    for(let i = 0; i <= text.length; i++) {
        let counter = Number (text.charAt(i))
         sum += counter;
    }
    console.log (`The sum of the digits is:${sum}`)
}
sumOFNumbers (["54321"])