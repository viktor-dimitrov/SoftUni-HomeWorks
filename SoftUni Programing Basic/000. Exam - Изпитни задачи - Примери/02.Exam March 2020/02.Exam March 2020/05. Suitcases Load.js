function suitcasesLoad (input) {

    let totalVolume = Number(input[0])
    let volume = totalVolume;
    let packCounter = 0;
    let index = 1;
    let command = input[index];

    while (volume >= 0) {
        if (command == "End") {
            break;
        }
        let pack = Number(command);
        if (index % 3 == 0){
            pack *= 1.1;
        }
        volume -= pack;
        if (volume <= 0) {
            break;
        }
        packCounter++;
        index++;
        command = input[index];
    }

    if (volume < 0) {
        console.log (`No more space!`)
    } else {
        console.log (`Congratulations! All suitcases are loaded!`)
    }
    console.log (`Statistic: ${packCounter} suitcases loaded.`)
}
suitcasesLoad ([700.5,
    180,
    340.6,
    126,
    220])