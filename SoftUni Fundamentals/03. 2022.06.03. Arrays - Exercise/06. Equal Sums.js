function equalSums (input) {
    let length = input.length;
    let output = 'no';
    
    for(let i = 0; i < length; i++) {

        let leftSum = 0;
        let rightSum = 0;
        
        for (let l = 0 ; l < i; l ++) {
            leftSum += input[l];
        }

        for (let r = i + 1; r < length; r ++) {
            rightSum += input[r];
        }
        
        if ( leftSum === rightSum) {

            output = i ;
        }
    }
console.log(output)
}
equalSums ([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])