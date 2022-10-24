class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook (bookName, bookAuthor) {

        let book = {
            bookName,
            bookAuthor,
            payed: false
        }
        if (this.books.length === this.capacity) {
            throw new Error ("Not enough space in the collection.");
        }

        this.books.push(book);
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }

    payBook( bookName ) {
        
        let currBook = this.books.find(book => book.bookName === bookName);

        if (!currBook) {
            throw new Error (`${bookName} is not in the collection.`)
        }
        if (currBook.payed === true) {
            throw new Error (`${bookName} has already been paid.`);
        }
        currBook.payed = true;
        return `${bookName} has been successfully paid.`;

    }
   
    removeBook(bookName) {
        let currBook = this.books.find(book => book.bookName === bookName);

        if (!currBook) {
            throw new Error ("The book, you're looking for, is not found.")
        }
        if (currBook.payed === false) {
            throw new Error (`${bookName} need to be paid before removing from the collection.`);
        }
        this.books.splice(this.books.indexOf(currBook), 1);
        return `${bookName} remove from the collection.`
    }

    getStatistics(bookAuthor) {
     
        let emptySlots = this.books.filter(book=> book.payed === false).length
        let sorted = this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));

        if(!bookAuthor) {
           let output = [`The book collection has ${ emptySlots } empty spots left.`];
           sorted.forEach(book => {
            output.push(`${book.bookName} == ${book.bookAuthor} - ${book.payed ? 'Has Paid' : 'Not Paid'}.`);
           });
           return output.join('\n');

        } else {

            let currBook = this.books.find(book => book.bookAuthor === bookAuthor );
            if (!currBook) {
                throw new Error(`${bookAuthor} is not in the collection.`);
            }
            return `${currBook.bookName} == ${bookAuthor} - ${currBook.payed ? 'Has Paid' : 'Not Paid'}.`
          
        }
    }
// This method can be called with one parameter or without any.
//  If no parameter is provided, the method should return the full information of the library 
// ⦁	At the first line:
// "The book collection has { emptySlots } empty spots left."
// ⦁	On the lines, display information about each book, sorted alphabetically ascending, by their bookName:
// "{bookName} == {bookAuthor} - {Has Paid / Not Paid}."
// If the method is called with a parameter for bookAuthor:
// ⦁	Return only the information about the book from the given bookAuthor:
// "{bookName} == {bookAuthor} - {Has Paid / Not Paid}."
// ⦁	If there is no such author’s book found, throw an Error:
// "{bookAuthor} is not in the collection."


}

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics('iguel de Cervantes'));


