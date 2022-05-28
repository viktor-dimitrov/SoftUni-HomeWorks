function triangleOfNumbers (num) {

    let line = ''
    for(let i = 1; i <= num; i++) {
        line = '';
        for (j = 1; j <= i;j++) {
            
            tempNum = i;
            line += `${tempNum} `
        }
        console.log(line)
    }
}
triangleOfNumbers (3)