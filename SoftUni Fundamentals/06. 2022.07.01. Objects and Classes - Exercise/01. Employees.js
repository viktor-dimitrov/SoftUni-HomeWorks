function employees (inputArray) {
    let myObject = {};

    for(let employ of inputArray) {
        myObject.name = employ;
        myObject.num = employ.length;
        console.log (`Name: ${myObject['name']} -- Personal Number: ${myObject['num']}`)
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])