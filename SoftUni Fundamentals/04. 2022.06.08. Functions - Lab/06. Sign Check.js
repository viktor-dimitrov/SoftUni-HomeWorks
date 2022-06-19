function signCheck (first, second, third) {
    let arr = [first, second, third];
    let posCount = 0;

        for (let i = 0; i < 3; i++) {
            if(arr[i] > 0) {
                posCount++;
            }
        } 

        if (posCount === 3 || posCount === 1) {
            console.log('Positive');
        } else {
            console.log('Negative');
        }
}
signCheck(5,
    -12,
   -15
   )