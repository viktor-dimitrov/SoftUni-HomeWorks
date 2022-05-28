function sortNumbers (a,b,c) {
    let first = 0;
    let second = 0;
    let third = 0;

    if ( a >= b && a >= c) {
        first = a;
        if (b > c) {
            second = b;
            third = c;
        } else {
            second = c;
            third = b;
        }
    } else if (b >= a && b >= c) {
        first = b;
        if (a > c) {
            second = a;
            third = c;
        } else {
            second = c;
            third = a;
        }
    } else if (c >= a && c >= b) {
        first = c;
        if ( a > b) {
            second = a;
            third = b;
        } else {
            second = b;
            third = a;
        }
    }
    console.log(first);
    console.log(second);
    console.log(third);
}
sortNumbers(-2,0,0)