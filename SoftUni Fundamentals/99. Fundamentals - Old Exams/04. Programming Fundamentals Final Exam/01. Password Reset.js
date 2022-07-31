function passwordReset(inputArr) {
    let pass = inputArr.shift().split('');
    let index = 0;
    let line = inputArr[index];

    while (line !== 'Done') {
        let tokens = line.split(' ');
        let command = tokens.shift();

        switch (command) {
            case 'TakeOdd':
                let temp = [];
                for (let i = 1; i <= pass.length; i += 2) {
                    temp.push(pass[i]);
                }
                pass = temp;
                break;

            case 'Cut':
                pass.splice(tokens[0], tokens[1]);
                break;

            case 'Substitute':
                let rePass = pass.join('');
                let oldSym = tokens[0];
                let newSym = tokens[1];

                if (!rePass.includes(oldSym)) {
                    console.log(`Nothing to replace!`)
                    index++;
                    line = inputArr[index];
                    continue;
                } else {
                    while (rePass.includes(oldSym)) {
                        rePass = rePass.replace(oldSym, newSym);
                    }
                    pass = rePass.split('');
                }
                break;
        }
        console.log(pass.join(''));

        index++;
        line = inputArr[index];
    }
    console.log(`Your password is: ${pass.join('')}`)
}
passwordReset (["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"])