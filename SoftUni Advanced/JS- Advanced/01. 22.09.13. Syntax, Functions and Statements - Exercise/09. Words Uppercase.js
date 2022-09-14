function wordsUppercase(inputString) {
    let pattern = /\W+/gm;
    console.log(inputString.toUpperCase().split(pattern).join(' ').trim().split(' ').join(', '));
}

wordsUppercase('Hi, how are you?')