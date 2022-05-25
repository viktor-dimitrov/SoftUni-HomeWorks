function cinemaTickets(input) {
    let totalTickets = 0;
    let totalStudents = 0;
    let totalStandards = 0;
    let totalKids = 0;
    let index = 0;
    let command = input[index];
    let isFinish = false;
    while (command != "Finish") {
        let movieName = input[index];
        index++;
        let freeSpace = Number(input[index]);
        index++;
        let takenSpace = 0;
        let ticketType = input[index];
        while (ticketType != "Finish") {
            if (ticketType == "End"){
                break;
            }
            switch (ticketType) {
                case "student": totalStudents++; takenSpace++; totalTickets++; break;
                case "standard": totalStandards++; takenSpace++; totalTickets++; break;
                case "kid": totalKids++; takenSpace++; totalTickets++;break;
            }
            if (takenSpace >= freeSpace) {
                break;
            }
            index++
            ticketType = input[index];
        }
        console.log(`${movieName} - ${(takenSpace / freeSpace * 100).toFixed(2)}% full.`)
        index++;
        command = input[index];
    }
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(totalStudents / totalTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(totalStandards / totalTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(totalKids / totalTickets * 100).toFixed(2)}% kids tickets.`);
}
cinemaTickets (["The Matrix",
    20,
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
    17,
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    3,
    "standard",
    "standard",
    "standard",
    "Finish"])