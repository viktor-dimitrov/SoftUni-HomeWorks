function deckOfCards(input) {
    let myCards = input.shift().split(', ');
    
    let commandsCount = Number(input.shift());

    for (let line of input) {
        let comArray = line.split(', ');
        let command = comArray.shift();

        switch (command) {
            case 'Add':
                let addCard = comArray[0];
                if (myCards.includes(addCard)) {
                    console.log(`Card is already in the deck`);
                    
                } else {
                    myCards.push(addCard);
                    console.log(`Card successfully added`);
                }
                break;

            case 'Remove':
                let remCard = comArray[0];
                if (myCards.includes(remCard)) {
                    myCards.splice(myCards.indexOf(remCard), 1);
                    console.log(`Card successfully removed`);
                } else {
                    console.log(`Card not found`);
                }
                break;


            case 'Remove At':
                let remIndex = Number(comArray[0]);
                if (remIndex < 0 || remIndex > (myCards.length - 1)) {
                    console.log(`Index out of range`);
                } else {
                    myCards.splice(remIndex, 1);
                    console.log(`Card successfully removed`);
                }
                break;

            case 'Insert':
                let insIndex = Number(comArray[0]);
                let insCard = comArray[1];

                if (insIndex < 0 || insIndex > (myCards.length - 1)) {
                    console.log(`Index out of range`);
                    

                } else if (myCards.includes(insCard)) {
                    console.log(`Card is already added`);

                } else {
                    myCards.splice(insIndex, 0, insCard);
                    console.log(`Card successfully added`);
                }
                break;
        }
    }

    console.log(myCards.join(', '))

}
deckOfCards(["a, b, c",
"2",
"Insert, 1, j",
"Insert, 20, p"
])