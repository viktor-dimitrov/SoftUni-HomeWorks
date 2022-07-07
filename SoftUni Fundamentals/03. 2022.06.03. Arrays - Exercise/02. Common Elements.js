function commonElements (arr1, arr2) {
   
    for (let i = 0; i < arr1.length; i ++) {
        let element = arr1[i];
        if (arr2.includes(element)) {
            console.log(element);
        }
    }
}
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l'])