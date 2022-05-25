function EqualSumsEvenOddPosition (input) {
let startNum = input[0];
let endNum = input[1];
let even = 0;
let odd = 0;
let print = "";
for (let i = startNum;i <= endNum; i++) {
    let num = "" + i;
    for (let j = 0;j < num.length; j++) {
        let a = Number(num.charAt(j))
        if (j % 2 == 0) {
          even += a;
        } else {
            odd += a;
        }
    }
    if (even == odd) {
        print += `${num} `; 
    }
    even = 0;
    odd = 0;  
}
console.log(print)
}
EqualSumsEvenOddPosition (["100000",
"100050"])