function cinemaTickets (input) {
    let totalTickets = 0;
    let studentsTickets = 0;
    let standartTickets = 0;
    let kidsTicket = 0;
    let index = 0;
    let command = input[index];
    
    while (command != "Finish") {
        let movieName = command;
        index++;
        let allPlaces = Number(input[index]);
        let placesCounter = 0 
        index++;
        let ticketType = input[index];
        while (ticketType != "Finish") {
            if (ticketType == "End") {
                break;
            }
            switch (ticketType) {
                case "student": studentsTickets++; break;
                case "standard": standartTickets++; break;
                case "kid": kidsTicket++; break;
            }
            totalTickets++;
            placesCounter++;
            if (allPlaces <= placesCounter) {
                break;
            }
            index++;
            ticketType = input[index];
        }
        console.log (`${movieName} - ${(placesCounter / allPlaces * 100).toFixed(2)}% full.`);
        placesCounter = 0;
        index++;
        command = input[index];
    }
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(studentsTickets / totalTickets * 100).toFixed(2)}% student tickets.`);
    console.log (`${(standartTickets / totalTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidsTicket / totalTickets * 100).toFixed(2)}% kids tickets.`);
}
cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])