function shootForTheWin (input) {
    let numArray = input.shift().split(' ').map(Number);
    let index = 0;
    let command = input[index];
    let counter = 0;
    let numArrayL = numArray.length;

    while (command) {
        if (command == "End") {
            break;
        }
        let shot = Number(command);
        if (shot < 0 || shot > numArrayL - 1) {
            index++;
            command = (input[index]);
            continue;
        }

        let shotedNum = numArray[shot];
        numArray.splice(shot, 1, -1);
        counter++;

        for (let i = 0; i < numArrayL; i++) {

            if (numArray[i] > shotedNum && numArray[i] != -1) {
                numArray.splice(i, 1, Number(numArray[i]) - shotedNum );

            } else if (numArray[i] <= shotedNum && numArray[i] != -1) {
                numArray.splice(i,1, Number(numArray[i]) + shotedNum);
            }
        }
        index++;
        command = input[index];
    }
    console.log(`Shot targets: ${counter} -> ${numArray.join(' ')}`);
    
}
shootForTheWin(["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"])