function pyramid (input) {
    let finalNum = Number ([input[0]]);
    let print = "";
    let line = 1;
    let stop = false;
    for (let i = 1; i <= finalNum; i++) {
        for (let u = 1; u <= i; u++) {
            if (line > finalNum) {
                stop = true;
                break;
            } 
            print += `${line} `
            line++
        }
        console.log (print)
        print = "";
        if (stop) {
            break;
        }  
    }
}
pyramid (["7"])