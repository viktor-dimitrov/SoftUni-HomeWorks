function counterStrike(input) {
    let myArray = input.map(Number);
    let energy = myArray.shift();
    let counter = 0;
    let gameOver = false;

    let index = 0;
    let command = myArray[index];

    while (command) {

        if (command == "End of battle") {
            break;
        }

        if (energy < command) {
            gameOver = true;

            console.log(`Not enough energy! Game ends with ${counter} won battles and ${energy} energy`);
            break;
        }



        energy -= command;
        counter++

        if (counter % 3 == 0) {
            energy += counter;

        }

        index++;
        command = myArray[index];

    }


    if (!gameOver) {
        console.log(`Won battles: ${counter}. Energy left: ${energy}`);
    }
}
counterStrike (["100",
"10",
"10",
"10",
"1",
"2",
"3",
"73",
"10"])