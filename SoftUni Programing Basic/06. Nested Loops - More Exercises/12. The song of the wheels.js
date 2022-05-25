function thesongOfTheWheels(input) {
    const controlNum = Number(input[0]);
    let counter = 0;
    let password = "";
    let allPasword = "";
 
    for (let a = 1; a <= 9; a++) {
        for (let b = 1; b <= 9 ; b++) {
            for (let c = 1; c <= 9; c++) {
                for (let d = 1; d <= 9; d++) {
                    if (a < b && c > d && a * b + c * d == controlNum) {
                        allPasword += (`${a}${b}${c}${d} `);
                        counter++;
                        if (counter == 4) {
                            password += `${a}${b}${c}${d}`;
                        }
                    } 
                }
            }
        }
    }
    console.log(`${allPasword}`);
    if (counter < 4) {
        console.log(`No!`);
    } else {
        console.log (`Password: ${password}`);
    }
}
thesongOfTheWheels(["11"])