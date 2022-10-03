function createFormatter(sep, symb, symbFirst, formaterFunc) {
    let myObject = {
        separator: sep,
        symbol: symb,
        symbolFirst: symbFirst,
        func: formaterFunc
    };

    let myFunc = function (oneParam) {
        return myObject.func(myObject.separator, myObject.symbol, myObject.symbolFirst, oneParam);
    }
    return myFunc;
}







function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

let dollarFormatter = createFormatter(',', '$', true, currencyFormatter);


console.log(dollarFormatter(5345));   // $ 5345,00
console.log(dollarFormatter(3.1429)); // $ 3,14
console.log(dollarFormatter(2.709));  // $ 2,71
