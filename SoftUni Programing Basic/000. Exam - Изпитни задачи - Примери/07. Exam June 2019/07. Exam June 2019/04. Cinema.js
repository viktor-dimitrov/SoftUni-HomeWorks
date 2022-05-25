function cinema (input) {
    let seatsCount = Number(input[0]);
    let ticketPrice = 5;
    let income = 0;
    let index = 1;
    let command = input[index];

    while(command != "Movie time!") {
        
        let ticketsCount = Number(input[index]);
        if (ticketsCount > seatsCount) {
            console.log("The cinema is full.")
            break;
        }
        index++;
        command = input[index];
        let sum = ticketsCount * ticketPrice;
        if (ticketsCount % 3 == 0) {
            sum -= 5;
        }  
        income += sum;
        seatsCount -= ticketsCount;
    }
    if (command == "Movie time!") {
        console.log (`There are ${seatsCount} seats left in the cinema.`)
    }
    console.log (`Cinema income - ${income} lv.`)
    
}
cinema(["50",
"15",
"10",
"10",
"15",
"5"])