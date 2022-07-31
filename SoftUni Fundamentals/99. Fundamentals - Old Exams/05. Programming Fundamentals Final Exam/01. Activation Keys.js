function activationKeys(inputArr) {
    let rawKey = inputArr.shift().split('');

    let line = inputArr.shift();
    while (line != 'Generate') {
        let tokens = line.split('>>>');
        let command = tokens.shift();

        switch (command) {
            case 'Slice':
                let startIndex = Number(tokens.shift());
                let endIndex = Number(tokens.shift());
                let diff = endIndex - startIndex;
                rawKey.splice(startIndex, diff);
                console.log(rawKey.join(''))
                break;

            case 'Flip':
                let size = tokens.shift();
                let start = Number(tokens.shift());
                let end = Number(tokens.shift());
                for (let i = start; i < end; i++) {
                    if (size === 'Upper') {
                        rawKey[i] = rawKey[i].toUpperCase();
                    } else {
                        rawKey[i] = rawKey[i].toLowerCase();
                    }
                }
                console.log(rawKey.join(''))
                break;

            case 'Contains':
                let subString = tokens.shift();
                if (rawKey.join('').includes(subString)) {
                    console.log(`${rawKey.join('')} contains ${subString}`)
                } else {
                    console.log('Substring not found!')
                }
                

        }
        
        line = inputArr.shift();
    }

    console.log(`Your activation key is: ${rawKey.join('')}`)
}
activationKeys((["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>uni",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"]))