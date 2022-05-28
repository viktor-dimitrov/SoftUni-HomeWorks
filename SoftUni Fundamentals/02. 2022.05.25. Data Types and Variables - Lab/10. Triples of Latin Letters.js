function triplesOfLatinLetters (n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) { 
            for (let k = 0; k < n; k ++) {
                
                let first = String.fromCharCode(i + 97);
                let second = String.fromCharCode(j + 97);
                let third = String.fromCharCode(k + 97);

                console.log(`${first}${second}${third}`);
                
            }
        }
    }
}
triplesOfLatinLetters (3)