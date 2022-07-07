function maxNumber(arr) {
    let newArr = [];
    let length = arr.length;
         
        for(let i = 0;i < length; i ++) {
            let isBigger = true;
            let num1 = arr[i];
            for(let j = i + 1; j < length; j ++ ) {
                let num2 = arr[j];
                if (num1 <= num2){
                    isBigger = false;
                    break;
                }
            }
            if (isBigger) {
                newArr.push(num1)
            }

        }
    
     console.log(newArr.join(' '))

}
maxNumber([27, 19, 42, 2, 13, 45,50, 48])