function schoolRegister (inputArray) {
   
    let myObj = {};
    
    for(let line of inputArray) {
        let lineArray = line.split(',')
        let name = lineArray[0].split(':')[1];
        let nextGrade = Number(lineArray[1].split(':')[1]) + 1;
        let grade = Number(lineArray[2].split(':')[1]);

        if (!myObj.hasOwnProperty([nextGrade])) {
            if (grade >= 3) {
        myObj[nextGrade] = [name, grade];
            }
        } else {
            if (grade >= 3) {
            myObj[nextGrade].push(name);
            myObj[nextGrade].push(grade);
            }
        }
    }

    for (let key in myObj) {

        let sum = 0;
        let students = [];

        let index = 0;
        let command = myObj[key][index];
        while (command) {
            students.push(command)
            index++;
            command = myObj[key][index];
            sum += Number(command);
            index++;
            command = myObj[key][index];
        }
        let average = (sum / (myObj[key].length / 2)).toFixed(2)
        myObj[key] = [average, students.join(',')]
        console.log(`${key} Grade\nList of students:${myObj[key][1]}\nAverage annual score from last year: ${myObj[key][0]}\n`)
    }
    
}

    schoolRegister([
        "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
            "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
            "Student name: George, Grade: 8, Graduated with an average score: 2.83",
            "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
            "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
            "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
            "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
            "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
            "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
            "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
            "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
            "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
        ])