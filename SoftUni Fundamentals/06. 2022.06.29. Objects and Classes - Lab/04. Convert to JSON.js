function convertToJSON (fName, lName, colorOfHair) {
    let myObject = {
        name: fName,
        lastName: lName,
        hairColor: colorOfHair
    }
    return JSON.stringify(myObject)

}
console.log(convertToJSON('George', 'Jones', 'Brown'))