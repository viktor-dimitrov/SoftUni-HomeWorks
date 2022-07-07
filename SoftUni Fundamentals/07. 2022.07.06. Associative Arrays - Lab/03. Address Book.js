function adressBook(inputArray){
    let myObject = {};

    for(let line of inputArray) {
        let [name, adress] = line.split(':')
        myObject[name]= adress;
    }
    let sortedArray = Object.keys(myObject).sort((a, b) => a.localeCompare(b))  ;
    
    for (let key of sortedArray) {
        console.log(`${key} -> ${myObject[key]}`);
    }
}
adressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])