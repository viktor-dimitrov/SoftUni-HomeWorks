function passwordGenerator(input) {
    const numStop = Number (input[0]);
    const lettersCount = Number (input[1]);
    const letterStop = lettersCount + 97;
    let passwords = "";

    for (let i = 1; i <= numStop; i++) {
        for (let j = 1; j <= numStop; j++) {
            for (let a = 97; a < letterStop; a++) {
                for (let b = 97; b < letterStop; b++) {
                    for (let k = 1; k <= numStop; k++) {
                        if (k > i && k > j) {
                            passwords += (`${i}${j}${String.fromCharCode(a)}${String.fromCharCode(b)}${k} `);
                        }
                    }
                }
            }
        }
    }
    console.log(passwords)
}
passwordGenerator([3, 1])