function multiplicationTable (input) {
let num = Number (input[0]);
let result = 0;
for (let i = 1 ; i <= 10; i++) {
    result = i * num;
      
console.log(`${i} * ${num} = ${result}`)
}
}
multiplicationTable (["5"])