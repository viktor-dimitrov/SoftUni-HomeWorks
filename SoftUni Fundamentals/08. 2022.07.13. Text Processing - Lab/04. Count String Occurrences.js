function countStringOccurrences(text, word) {
    let counter = 0;
    text.split(' ').forEach(element => {
        if (element === word) {
            counter ++;
        }
        console.log(counter)
    });
    



}
countStringOccurrences('This is a word and it also is a sentence',
'is')