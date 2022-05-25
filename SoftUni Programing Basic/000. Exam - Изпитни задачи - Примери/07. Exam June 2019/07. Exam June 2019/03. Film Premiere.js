function filmPremiere (input) {
    const movieName = input[0];
    const filmPack = input[1];
    const ticketsCount = Number(input[2]);
    let price = 0;

    if (movieName == "John Wick") {
        switch(filmPack) {
            case"Drink": price = 12; break;
            case"Popcorn": price = 15; break;
            case"Menu": price = 19; break;
        }
    } else if (movieName == "Star Wars") {
        switch(filmPack) {
            case"Drink": price = 18; break;
            case"Popcorn": price = 25; break;
            case"Menu": price = 30; break;
        }
    } else if (movieName == "Jumanji") {
        switch(filmPack) {
            case"Drink": price = 9; break;
            case"Popcorn": price = 11; break;
            case"Menu": price = 14; break;
        }
    }

    let bill = price * ticketsCount;
    
    if (movieName == "Star Wars" && ticketsCount >= 4) {
        bill *= 0.7;
    } else if (movieName == "Jumanji" && ticketsCount == 2) {
        bill *= 0.85;
    }
    
    console.log(`Your bill is ${bill.toFixed(2)} leva.`)
}
filmPremiere (["Jumanji",
"Menu",
"2"])