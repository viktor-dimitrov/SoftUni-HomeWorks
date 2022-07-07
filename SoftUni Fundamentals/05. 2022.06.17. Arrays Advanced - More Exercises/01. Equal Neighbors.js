function equalNeighbors (matrix) {
    let myArray = (matrix.join(',')).split(',');
    let arrayLength = myArray.length;
    let counter = 0;

    for(let i = 0; i < arrayLength; i ++) {
        let current = myArray[i];
        for (let el of myArray) {
            if (el === current) {
                counter++;
                console.log(current)
            }
        }
    }

  
    console.log(myArray)



}
equalNeighbors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']])