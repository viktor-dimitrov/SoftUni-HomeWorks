function building(input) {
    let floors = Number (input[0]);
    let rooms = Number(input[1]);
    let res = "";
    for (let f = floors; f > 0; f--){
       for (let r = 0; r < rooms; r++ ){
            if (f === floors) {
               res += `L${f}${r} `;
            } else if (f != floors && f % 2 == 0) {
                res += `O${f}${r} `;
            } else {
                res += `A${f}${r} `
            } 
        }
        console.log(res)
        res = "";
    }
}
building(["6", "4"])