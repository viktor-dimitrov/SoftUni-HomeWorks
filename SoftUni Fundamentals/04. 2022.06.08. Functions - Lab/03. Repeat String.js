function repeatString (myStr,count) {
    let newString = '';
    for(let i = 0; i < count ; i ++) {
        newString +=myStr;
    }
    return newString;
    
}
console.log(repeatString('abc', 3))