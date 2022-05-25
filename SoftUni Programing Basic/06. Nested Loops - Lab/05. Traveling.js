function traveling (input) {
    let index = 0;
    let command = input[index];
    index++;
    let destination = "";
    let money = 0;
    while (command != "End") {
        destination = command
        command = input[index];
        index++;
        money = Number(command);
        while (money > 0) {
            command = input[index];
            index++;
            let sum = Number(command);
            money -= sum;
            if (money <= 0) {
                console.log(`Going to ${destination}!`)
                break;
            }
        }   
    } 
}
traveling (["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])

