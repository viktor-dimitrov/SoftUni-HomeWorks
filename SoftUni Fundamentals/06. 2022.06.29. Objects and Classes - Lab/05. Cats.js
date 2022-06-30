function cats(input) {
    
    class NameAndAge {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        say() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }
    let catsArrayOfObjects = [];

    for(let cat of input) {
        let catsArr = cat.split(' ');
        let catName = catsArr[0];
        let catAge = catsArr[1];
        let currentCat = new NameAndAge (catName, catAge);
        catsArrayOfObjects.push(currentCat);
        
    }
    
    for (let myCat of catsArrayOfObjects) {
        myCat.say()
    }
    
}
cats(['Mellow 2', 'Tom 5'])