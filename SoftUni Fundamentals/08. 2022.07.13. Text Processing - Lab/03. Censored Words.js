function censoredWords (sentence, word){

    while (sentence.indexOf(word) >= 0){
        sentence = sentence.replace(word, '*'.repeat(word.length))
    }
    return sentence
}

censoredWords('A small sentence with small some words', 'small')
