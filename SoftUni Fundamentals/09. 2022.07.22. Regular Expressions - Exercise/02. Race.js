function race(inputArray) {
    let racersList = inputArray.shift().split(', ');
    let lettersPattern = /(?<letter>[A-Z]|[a-z])/g;
    let digitsPattern = /(?<digit>\d)/g;
    let objectList = {};

    racersList.forEach(racer => {
        if (!objectList.hasOwnProperty(racer)) {
            objectList[racer] = 0;
        }
    });

    let index = 0;
    let command = inputArray[index];
    while (command !== 'end of race') {
        let sum = 0;
        let name = command.match(lettersPattern).join('');
        let digitsArr = command.match(digitsPattern).map(Number);

        digitsArr.forEach(element => {
            sum += element;
        });

        if (objectList.hasOwnProperty(name)) {
            objectList[name] += sum;
        }

        index++;
        command = inputArray[index];
    }

    let sorted = Object.entries(objectList).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${sorted[0][0]}`);
    console.log(`2nd place: ${sorted[1][0]}`);
    console.log(`3rd place: ${sorted[2][0]}`);

}
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race'])