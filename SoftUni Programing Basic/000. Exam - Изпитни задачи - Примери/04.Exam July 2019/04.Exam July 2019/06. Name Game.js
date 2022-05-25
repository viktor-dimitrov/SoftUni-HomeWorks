function nameGame (input) {
    let index = 0;
    let command = input[index];
    let totalPoints = 0;
    let winner = "";

    while (command != "Stop") {
        let name = input[index];
        index++;
        let points = 0;
        for (let i = 0; i < name.length; i ++) {
            let num = Number(input[index]);
            index++;
            let letterNum = name.charCodeAt(i);
            
            if (num == letterNum) {
                points += 10;
            } else {
                points += 2;
            }
            
        }
        if (points >= totalPoints) {
            totalPoints = points;
            winner = name;
        }
        command = input[index];
    }
    console.log(`The winner is ${winner} with ${totalPoints} points!`);
}
nameGame (["Pesho",
"124",
"34",
"111",
"97",
"99",
"Gosho",
"98",
"124",
"88",
"76",
"18",
"Stop"])
