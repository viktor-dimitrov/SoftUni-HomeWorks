function companyUsers(inputArray) {

    let myObject = {};

    inputArray.forEach(line => {
        let [name, emp] = line.split(' -> ');

        if (!myObject.hasOwnProperty(name)) {
            myObject[name] = new Set();
        }
        myObject[name].add(emp);
    });
    let sorted = Object.keys(myObject).sort((a, b) => a.localeCompare(b));

    for (let el of sorted) {
        let empArr = Array.from(myObject[el]);
        console.log(el)
        empArr.forEach(id => {
            console.log(`-- ${id}`);
        });
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ])