function specialNumbers(input) {
    let n = Number (input[0]);
    let numbers = ""
    for (let i = 1111;i <= 9999; i++){
        let text = "" + i;
        let a = Number(text[0]);
        let b  = Number(text[1]);
        let c = Number(text[2]);
        let d = Number(text[3]);
        if (n % a == 0 && n % b == 0 && n % c == 0 && n % d == 0) {
            numbers += `${i} `
        }
    }
    console.log(numbers)
}
specialNumbers(["16"])