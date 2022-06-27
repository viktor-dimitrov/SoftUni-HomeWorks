function memoryGame(input) {
    let numArray = input.shift().split(' ');
    let index = 0;
    let command = input[index];
    let movesCounter = 0;

    while (command != 'end') {
        movesCounter++;
        let comArray = command.split(' ').map(Number);
        let first = comArray[0];
        let second = comArray[1];


        if ((first || second) < 0 || (first || second) >= numArray.length || first === second) {
            console.log(`Invalid input! Adding additional elements to the board`);
            numArray.splice((numArray.length / 2), 0, (`-${movesCounter}a`), (`-${movesCounter}a`));

        } else if (numArray[first] === numArray[second]) {
            console.log(`Congrats! You have found matching elements - ${numArray[first]}!`);
            numArray.splice(first, 1);
            let splicer = second - 1;
            if (splicer < 0) {
                splicer = 0;
            }
            numArray.splice(splicer, 1);
        } else {
            console.log(`Try again!`);
        }

        if (numArray.length < 1) {
            console.log(`You have won in ${movesCounter} turns!`);
            break;
        }

        index++;
        command = input[index];
    }

    if (numArray.length > 0) {
        console.log(`Sorry you lose :(`)
    }

    console.log(numArray.join(' '));

}
memoryGame(  [
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"
    ])