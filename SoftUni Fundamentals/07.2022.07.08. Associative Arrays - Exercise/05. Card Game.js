function cardGame(inputArray) {
    let myObject = {};
    inputArray.forEach(line => {
        let name = line.split(': ').shift();
        let cards = line.split(': ').pop().split(', ');

        if (!myObject.hasOwnProperty([name])) {
            myObject[name] = new Set();
            cards.forEach(card => {
            });
        }
        cards.forEach(card => {
            myObject[name].add(card);
        });

    });
    for (let el in myObject) {
        let sum = 0;
        let cardsArr = Array.from(myObject[el]);
        cardsArr.forEach(element => {
            let cardElements = element.split('');
            let type = cardElements.pop();
            let power = cardElements.join('');
            switch (type) {
                case 'S': type = 4; break;
                case 'H': type = 3; break;
                case 'D': type = 2; break;
                case 'C': type = 1; break;
            }
            switch (power) {
                case 'J': power = 11; break;
                case 'Q': power = 12; break;
                case 'K': power = 13; break;
                case 'A': power = 14; break;
                default: power = Number(power); break;
            }
            sum += type * power;
        });
        console.log(`${el}: ${sum}`);
    }
}
cardGame ([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ])