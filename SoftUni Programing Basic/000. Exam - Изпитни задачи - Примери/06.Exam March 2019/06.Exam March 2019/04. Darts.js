function darts (input) {
    const playerName = input[0];
    let succShots = 0;
    let unsuccShots = 0;
    let leg = 301;
    let index = 1;
    let command = input[index];

    while (command != "Retire") {
        let sector = input[index];
        index++;
        let points = Number(input[index]);
        index++;
        switch(sector) {
            case "Single": leg -= points; break;
            case "Double": leg -= points * 2; break;
            case "Triple": leg -= points * 3; break;
        }

        if (leg >= 0) { 
            succShots++;
        } else {
            unsuccShots++;
            switch(sector) {
                case "Single": leg += points; break;
                case "Double": leg += points * 2; break;
                case "Triple": leg += points * 3; break;
            }
            
        }

        if (leg == 0) {
            console.log(`${playerName} won the leg with ${succShots} shots.`);
            break;
        }
        command = input[index];
    }

    if (command == "Retire" || leg > 0) {
        console.log(`${playerName} retired after ${unsuccShots} unsuccessful shots.`);
    } 
}
darts(["Rob Cross",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Double",
"20",
"Triple",
"20",
"Double",
"5",
"Triple",
"10",
"Double",
"6",
"Retire"])