function printAndSum (start,stop) {
    let numbers = '';
    let sum = 0;

    for (let i = start; i <= stop; i++) {
         sum += i;
         let num = i;
         numbers += `${num} `; 
    }
    console.log (numbers);
    console.log (`Sum: ${sum}`);

}
printAndSum(5,10)