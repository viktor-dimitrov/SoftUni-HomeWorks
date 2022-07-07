function maxSequenceOfEqualElements (input) {
    let length = input.length;
    
    let maxSequence = [];
    for (let i = 0;i < length; i ++) {
        let tempSequence = [];
        let num1 = input[i];

        for(let j = i; j < length; j ++ ) {
            let num2 = input[j];
          
            if (num2 === num1) {
                tempSequence.push(num1);
                
            } else {
                if (tempSequence.length > maxSequence.length) {
                    maxSequence = tempSequence;
                }
                break;
            }
            
        } 

    }
    console.log(maxSequence.join(' '));

}
maxSequenceOfEqualElements ([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])