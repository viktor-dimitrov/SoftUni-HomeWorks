const bookSelection = require("../bookSelection");

const {expect} = require('chai');
const {assert} = require ('chai')

describe ('Testing bookSelection functionality' , () => {
    it ("Test with age < 12 and ganre 'Thriller'" , () => {
        let genre = "Thriller";
        let age = 8;
        let result = bookSelection.isGenreSuitable(genre, age)
        expect(result).to.be.equal(`Books with ${genre} genre are not suitable for kids at ${age} age`);
    });

    it ("Test with age < 12 and ganre 'Horror'" , () => {
        let genre = "Horror";
        let age = 12;
        let result = bookSelection.isGenreSuitable(genre, age)
        expect(result).to.be.equal(`Books with ${genre} genre are not suitable for kids at ${age} age`);
    });

    it ("Test with age > 12 and ganre 'Horror'" , () => {
        let genre = "Horror";
        let age = 16;
        let result = bookSelection.isGenreSuitable(genre, age)
        expect(result).to.be.equal(`Those books are suitable`);
    });
    it ("Test with age > 12 and ganre 'Thriller'" , () => {
        let genre = "Thriller";
        let age = 16;
        let result = bookSelection.isGenreSuitable(genre, age)
        expect(result).to.be.equal(`Those books are suitable`);
    });

    it ("Test with age < 12 and ganre 'Anime'" , () => {
        let genre = "Anime";
        let age = 16;
        let result = bookSelection.isGenreSuitable(genre, age)
        expect(result).to.be.equal(`Those books are suitable`);
    });

    //____________________________________________________________________

    it ("Testing .isItAffordable(price, budget) - price is String", ()=> {
         assert.throw(()=>bookSelection.isItAffordable("price",5),"Invalid input")
    })
    it ("Testing .isItAffordable(price, budget) - budget is String", ()=> {
        assert.throw(()=>bookSelection.isItAffordable(5,"5"),"Invalid input")
   
    })
      it ("Testing .isItAffordable(price, budget) - budget and price are Strings", ()=> {
        assert.throw(()=>bookSelection.isItAffordable("5","5"),"Invalid input")
   
    })
   it ("Testing .isItAffordable(price, budget) - price > budget", ()=> {
    assert(()=>bookSelection.isItAffordable(6,5),"You don't have enough money");
    })

    it ("Testing .isItAffordable(price, budget) - price < budget", ()=> {

        let price = 5;
        let buget = 6;
        let result = buget - price
        let test =  bookSelection.isItAffordable(price,buget)
        expect(test).to.be.equal(`Book bought. You have ${result}$ left`);
})

it ("Testing .isItAffordable(price, budget) - price = budget", ()=> {

    let price = 6;
    let buget = 6;
    let result = buget - price
    let test =  bookSelection.isItAffordable(price,buget)
    expect(test).to.be.equal(`Book bought. You have ${result}$ left`);
})

//____________________________________________________________________________________

it ("Testing suitableTitles(array, wantedGenre) with array not array", ()=> {
    assert.throw(()=>bookSelection.suitableTitles("array", "wantedGenre"),"Invalid input")
}) 

it ("Testing suitableTitles(array, wantedGenre) with wantedGenre not string", ()=> {
    assert.throw(()=>bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], 1),"Invalid input")
}) 
it ("Testing suitableTitles(array, wantedGenre) with array and string", ()=> {
   
    let inputArr = [{title: "The Da Vinci Code", genre: "Thriller"}]
    let wantedGenre = "Thriller";
    let result = bookSelection.suitableTitles(inputArr,wantedGenre);
    let expection = ["The Da Vinci Code"];
    expect(result).to.deep.equal(expection);
})

 })