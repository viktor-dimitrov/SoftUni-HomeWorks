function lastKNumbersSequence(seqLength, group) {
    let myArray = [1,1];

    for (let num of myArray) {
        let tempArray = myArray.slice(-group);
        let sum = 0;
            
        for(let i = 0; i < tempArray.length; i ++) {
            sum += tempArray[i]; 
        }
            myArray.push(sum);
                
            if (myArray.length >= seqLength) {
                    break;
            }
    }
    return myArray.join(' ');
}
console.log(lastKNumbersSequence(6, 3))