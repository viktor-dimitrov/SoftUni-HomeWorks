function oscarsWeekInCinema (input) {
    const movieName = String (input[0])
    const hallType = String (input[1])
    const ticketsCount = Number (input[2]);
    let ticketPrice = 0;

    switch (movieName) {
        case "A Star Is Born":
            switch (hallType) {
                case "normal": ticketPrice = 7.5; break;
                case "luxury": ticketPrice = 10.5; break;
                case "ultra luxury": ticketPrice = 13.50; break;
            }; break;
        case "Bohemian Rhapsody":
            switch (hallType) {
                case "normal": ticketPrice = 7.35; break;
                case "luxury": ticketPrice = 9.45; break;
                case "ultra luxury": ticketPrice = 12.75; break;
            }; break;
        case "Green Book":
            switch (hallType) {
                case "normal": ticketPrice = 8.15; break;
                case "luxury": ticketPrice = 10.25; break;
                case "ultra luxury": ticketPrice = 13.25; break; 
            }; break;
        case "The Favourite":
            switch (hallType) {
                case "normal": ticketPrice = 8.75; break;
                case "luxury": ticketPrice = 11.55; break;
                case "ultra luxury": ticketPrice = 13.95; break;
            }; break;
    }
    const totalSum = ticketPrice * ticketsCount;
    console.log (`${movieName} -> ${totalSum.toFixed(2)} lv.`)
}
oscarsWeekInCinema (["A Star Is Born", "normal", 1])