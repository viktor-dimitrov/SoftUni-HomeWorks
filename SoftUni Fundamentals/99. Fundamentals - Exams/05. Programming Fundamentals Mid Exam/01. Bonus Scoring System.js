function bonusScoring (input) {
    let myArray = input.slice().map(Number);
    let students = myArray.shift();
    let lectures = myArray.shift();
    let bonus = myArray.shift();
    let maxAtt = Math.max(...myArray);
    let maxPoints = maxAtt / lectures * (5 + bonus);

    console.log(`Max Bonus: ${Math.ceil(maxPoints)}.`)
    console.log(`The student has attended ${Math.ceil(maxAtt)} lectures.`)
    
}
bonusScoring([
    '0',  '1', '1', '1','2'
  ])