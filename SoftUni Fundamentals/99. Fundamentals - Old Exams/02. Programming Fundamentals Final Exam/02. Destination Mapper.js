function destinationMapper (inputString) {
    let pattern  = /([=/])(?<dest>[A-Z]{1}[A-Za-z]{2,})\1/g;
    let valid = pattern.exec(inputString);
    let sum = 0;
    let myArray = [];

    while(valid !== null) {
        let dest = valid.groups['dest'];
        myArray.push(dest)
        sum += dest.length
        valid = pattern.exec(inputString);
    }
console.log(`Destinations: ${myArray.join(', ')}`);
console.log(`Travel Points: ${sum}`);
}
destinationMapper(("=Ha=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i="))