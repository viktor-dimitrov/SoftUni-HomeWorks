function sameNumbers (num) {
let myStr = String(num);
let sum = 0;
let first = myStr[0];
let same = true;

for(let digit of myStr) {
    sum += Number(digit);
    if (digit != first) {
        same = false;
    }
}
console.log(same);
console.log(sum);
}
sameNumbers (2222222)