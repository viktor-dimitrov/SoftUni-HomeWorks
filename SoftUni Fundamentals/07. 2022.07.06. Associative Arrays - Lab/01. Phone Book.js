function phoneBook(inputArray) {
    let myObject = {};

    for (let line of inputArray) {
        let [name, number] = line.split(' ');
        myObject[name] = number; 
    }
    
    for (let key in myObject) {
        console.log(`${key} -> ${myObject[key]}`)
    }
}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])