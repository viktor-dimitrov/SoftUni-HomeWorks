function dictionary(inputArr) {
    let longLine = inputArr.shift().split(' | ');
    let wordsLine = inputArr.shift().split(' | ');
    let command = inputArr.shift();
    let myDictionary = {};

    for (let line of longLine) {
        let [word, description] = line.split(': ');
        if (!myDictionary.hasOwnProperty(word)) {
            myDictionary[word] = [];
        }
        myDictionary[word].push(description);
    }

    switch (command) {
        case 'Test':
            for (let [myWord, definition] of Object.entries(myDictionary)) {
                if (wordsLine.includes(myWord)) {
                    console.log(`${myWord}:`)
                    for (let el of definition) {
                        console.log(`-${el}`);
                    }
                }
               
            }
            break;

        case 'Hand Over':
            console.log(Object.keys(myDictionary).join(' '));
            break;
    }

}
dictionary((["tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance",
"bit | cod | tackle",
"Test"])
)