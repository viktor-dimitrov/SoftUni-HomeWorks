function everest (input) {
    let start = 5364;
    let finish = 8848;
    let daysCounter = 1;
    let index = 0
    let command = input[index];
    

    while (command != "END") {
        let lazy = input[index];
        index++;
        let meters = Number(input[index]);
        index++;
        if (lazy == "Yes"){
            daysCounter++;
        }
        if (daysCounter > 5) {
            console.log ("Failed!");
            console.log (`${start}`);
            break;
        }

        start += meters;
        if (start >= finish) {
            console.log (`Goal reached for ${daysCounter} days!`)
            break;
        }
        
        command = input[index]
    }
    if (command === "END" && start < finish) {
        console.log ("Failed!");
        console.log (`${start}`);
    }
}
everest(["Yes",
    535,
    "Yes",
    849,
    "Yes",
    499,
    "Yes",
    400,
    "Yes",
    500])