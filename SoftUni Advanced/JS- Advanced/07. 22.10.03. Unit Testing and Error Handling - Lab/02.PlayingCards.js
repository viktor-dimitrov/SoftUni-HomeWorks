function playingCards(face, suit) {

    let cardsFace = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let cardsSuit = ['S', 'H', 'D', 'C'];

    if (!cardsFace.includes(face)) {
        throw new Error('Face is not valid!!!');
    } else if (!cardsSuit.includes(suit)) {
        throw new Error('Suit is not valid !!!');
    }


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


    return {
        face: face,
        suit: suit,
        toString() {

            return this.face + this.suit
        }

    };


}
console.log(playingCards('10', 'D').toString())