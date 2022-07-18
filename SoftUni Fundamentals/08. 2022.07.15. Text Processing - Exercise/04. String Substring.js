function stringSubstring(search, text) {
    let myArray = text.toLowerCase().split(' ');
    let isFound = false;
    for (let word of myArray) {
        if(word === search.toLowerCase()) {
            console.log(search);
            isFound = true;
            break;
        } 
    }
    if (!isFound) {
        console.log(`${search.toLowerCase()} not found!`);
    }
}
stringSubstring('javascript',
'JavaScrip is the best programming language')