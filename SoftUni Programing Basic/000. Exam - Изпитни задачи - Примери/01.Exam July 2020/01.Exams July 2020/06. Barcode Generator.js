function barCodeGenerator (input) {
    let start = "" + input[0];
    let stop = "" + input[1];
    let code ="";
    let startA = Number (start[0]);
    let startB = Number (start[1]);
    let startC = Number (start[2]);
    let startD = Number (start[3]);
    let stopA = Number (stop[0]);
    let stopB = Number (stop[1]);
    let stopC = Number (stop[2]);
    let stopD = Number (stop[3]);
    
    for (let a = startA;a <= stopA;a++) {
        for(let b = startB;b <= stopB;b++){
            for(let c = startC;c <= stopC; c++){
                for(let d = startD;d <= stopD;d++){
                    if (a % 2 != 0 && b % 2 !=0 && c % 2 != 0 && d % 2 != 0) {
                        code += `${a}${b}${c}${d} `;
                    }
                }
            }
        }
    }
console.log(code)
}
barCodeGenerator([2345,
    6789])