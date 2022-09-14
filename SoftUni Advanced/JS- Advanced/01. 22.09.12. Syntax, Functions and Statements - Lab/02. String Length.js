function stringLength(first, second, third) {
    let a = Number(first.length);
    let b = Number(second.length);
    let c = Number (third.length);
    let result = a + b + c;
    console.log(result);
    console.log(Math.floor(result / 3));
}
stringLength('chocolate', 'ice cream', 'cake')