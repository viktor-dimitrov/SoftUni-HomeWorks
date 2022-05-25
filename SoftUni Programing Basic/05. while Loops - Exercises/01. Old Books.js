function oldBooks (input)  {
    let index = 0;
    let favoriteBook = input[index];
    index++;
    let book = input[index];
    index++
    let booksCount = 0;


    while (book !== "No More Books"   )
    {

        if (book === favoriteBook) {
            console.log (`You checked ${booksCount} books and found it.`);
            break;
        }

        booksCount++;
        book = input[index]
        index++;
    
    }
    if (book != favoriteBook) {
        console.log(`The book you search is not here!`);
        console.log (`You checked ${booksCount} books.`)
    }


}

oldBooks (["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])
