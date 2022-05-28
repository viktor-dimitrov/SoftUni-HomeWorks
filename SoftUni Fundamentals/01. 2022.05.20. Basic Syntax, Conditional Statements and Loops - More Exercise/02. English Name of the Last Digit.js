function englishNameOfTHeLastDigit (input) {

    let num = (input[0]);
    let position = input[0].length - 1;
    let lastDigit = num.charAt(position);

    switch (lastDigit) {
        case '1': console.log('one') ; break;
        case '2': console.log('two') ; break;
        case '3': console.log('three') ; break;
        case '4': console.log('four') ; break;
        case '5': console.log('five') ; break;
        case '6': console.log('six') ; break;
        case '7': console.log('seven') ; break;
        case '8': console.log('eight') ; break;
        case '9': console.log('nine') ; break;
        case '0': console.log('zero') ; break;

    }

}
englishNameOfTHeLastDigit (['512317'])