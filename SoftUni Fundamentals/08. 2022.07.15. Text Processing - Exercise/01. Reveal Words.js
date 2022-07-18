function revealWords(inputWords, sentence) {
    let newText = sentence;

    inputWords.split(', ').forEach(element => {
        let search = '';
        for(let i of element) {
            search += '*';
        }
         newText = newText.replace(search, element); 
    });
    return newText;
}
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages')