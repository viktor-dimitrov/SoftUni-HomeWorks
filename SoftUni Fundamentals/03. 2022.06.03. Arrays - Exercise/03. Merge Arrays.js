function mergeArrays (arr1, arr2) {

    let newArr = [];

    for (let i = 0; i < arr1.length; i ++) {
       
        for (let j = 0; j < arr1.length; j++) {
            
            
            if (i % 2 === 0) {
                let num1 = Number(arr1[i]);
                let num2 = Number(arr2[i]);
                newArr.push(num1 + num2);
                break;
            } else {
                newArr.push(`${arr1[i]}${arr2[i]}`);
                break;
            }
        }
    }
    console.log(newArr.join(' - '))
}
mergeArrays(['5', '015', '23', '56', '35','0','0'],
['17', '022', '87', '36', '11','0',])