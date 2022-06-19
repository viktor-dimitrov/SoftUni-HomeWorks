function charactersInRange (firstChar, secondChar) {
    let start = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
    let stop = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt());
    let buffer = [];
    for (let i = start + 1; i < stop; i ++) {
        buffer.push(String.fromCharCode(i));
        
    }
    return (buffer.join(' '))
}
console.log(charactersInRange('#',
':'

))