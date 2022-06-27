function heartDay (input) {
    let houses = input.shift().split('@').map(Number);
    let housesL = houses.length;

    let comArr = input.slice();
    
    let index = 0;
    let command = comArr[index];
    
    let position = 0;

    while (command) {
        if (command == 'Love!') {
            break;
        }
        let currentCommand = command.split(' ');
        let jump = Number(currentCommand[1]);

        position += jump;
        if (position >= housesL) {
            position = 0;
        }
       
        if (houses[position ] > 0) {
            houses[position ] -= 2;
            if (houses[position ] == 0) {
                console.log(`Place ${position} has Valentine's day.`)
            }
        } else if (houses[position ] == 0) {
            console.log(`Place ${position} already had Valentine's day.`)
        }
        
        index++;
        command = comArr[index];
    }
    let counter = 0;

    for(let el of houses) {
        if (el > 0) {
            counter++;

        }
    }
    console.log(`Cupid's last position was ${position}.`)
    
    if (counter > 0) {
        console.log(`Cupid has failed ${counter} places.`)
    } else {
        console.log(`Mission was successful.`)
    }
}
heartDay(["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"])