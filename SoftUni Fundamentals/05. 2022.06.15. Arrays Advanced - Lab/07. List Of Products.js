function listOfProducts (input) {
    let myArray = input.sort((a,b) => a.localeCompare(b));
    for (let i = 0; i < myArray.length; i++) {
        console.log(`${i + 1}.${(myArray[i])}`)
    }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples','Apples'])