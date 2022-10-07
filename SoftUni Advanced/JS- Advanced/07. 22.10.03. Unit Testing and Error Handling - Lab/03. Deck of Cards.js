function deckOfCards (arr) {

    let cardsFace = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let cardsSuit = ['S', 'H', 'D', 'C'];
    let output = [];
    let ok = true;

    arr.forEach(card => {
        let splitCard = card.split('');
        let suit = splitCard.pop();
        let face = splitCard.join('');
        
        
        if (!cardsFace.includes(face)) {
            ok = false;
            return console.log(`Invalid card: ${card}`);
        } else if (!cardsSuit.includes(suit)) {
            ok = false;
            return console.log(`Invalid card: ${card}`);
        } else {
            switch (suit) {
                case 'S': suit = '\u2660'
                    break;
                case 'H': suit = '\u2665'
                    break;
                case 'D': suit = '\u2666'
                    break;
                case 'C': suit = '\u2663'
                    break;
            }
            output.push(`${face}${suit}`);
        }
    });
    if (ok) {
        console.log(output.join(' '));
    }
    

}
deckOfCards(['5S', '3D', 'QD', '1C'])