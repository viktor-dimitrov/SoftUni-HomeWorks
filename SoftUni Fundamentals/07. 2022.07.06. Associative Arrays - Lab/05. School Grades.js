function schoolGrade(inputArray) {
    let myObject = {}

    for (let line of inputArray) {
        let lineArray = line.split(' ');
        let name = lineArray.shift();
        let grade = lineArray.map(Number);

        if (!myObject.hasOwnProperty([name])) {
            myObject[name] = grade;
        } else {
            grade.forEach(element => {
                myObject[name].push(element)
            });
        }
    }

    for (let key in myObject) {
        let sum = 0;
        for (let el of myObject[key]) {
            sum += el;
        }
        let average = sum / myObject[key].length;
        myObject[key] = average;
    }
    let sortedNames = Object.keys(myObject).sort((a,b) => a.localeCompare(b));

    for (let student of sortedNames) {
        console.log(`${student}: ${(myObject[student]).toFixed(2)}`);
    }
}
schoolGrade(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6'])