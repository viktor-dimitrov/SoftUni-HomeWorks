function piccolo(inputArray) {
    let mySet = new Set();

    inputArray.forEach(element => {
        let elArray = element.split(', ');
        let action = elArray.shift();
        let regNum = elArray.join('');

        switch (action) {
            case 'IN': mySet.add(regNum);
                break;
            case 'OUT': mySet.delete(regNum);
                break;
        }
    });
    let sorted = Array.from(mySet.keys()).sort((a, b) => a.localeCompare(b));
    console.log(sorted.join('\n'));

}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'])