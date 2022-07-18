function passwordGenerator(inputArr) {
    let text = (inputArr[0] + inputArr[1]).toLowerCase().split('');
    let secret = inputArr[2];
    let index = 0;
    
    for (let i = 0; i < text.length; i++) {
        
        if ( text[i] === 'a' || text[i] === 'e' || text[i] === 'o' || text[i] === 'u' || text[i] === 'i') {
            if (index >= secret.length) {
                index = 0;
            } 
            text[i] = secret[index].toUpperCase();
            index++;
        }
    }
    let password = text.reverse().join('')
    console.log(`Your generated password is ${password}`)



}
passwordGenerator ([
    'ilovepizza', 'ihatevegetables',
    'orange'
    ])