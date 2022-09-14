function messageTranslator(inputArr) {
    let count = Number(inputArr.shift());
    let pattern = /!(?<command>[A-Z][a-z]{2,})!:\[(?<string>[A-Za-z]{8,})\]/gm;
    let valid;

    for (let line of inputArr) {
        let match = line.match(pattern);
        if (!match) {
            console.log(`The message is invalid`);
        }
        let translateLine = [];
        while ((valid = pattern.exec(line)) != null) {
            let command = valid.groups.command;
            let myString = valid.groups.string;

            for (let char of myString) {
                translateLine.push(char.charCodeAt());
            }

            console.log(`${command}: ${translateLine.join(' ')}`)

        }
    }
}
messageTranslator(["2",
"!Send!:[IvanisHere]",
"*Time@:[Itis5amAlready"])