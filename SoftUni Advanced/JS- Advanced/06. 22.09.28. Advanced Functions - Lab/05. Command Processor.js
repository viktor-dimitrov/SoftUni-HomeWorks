function solution() {

    let str = '';

    let processor = {
        append: (a) => {return str += a},
        removeStart: (n) => {return str = str.substring(n)},
        removeEnd: (n) => {return str = str.slice(0, str.length - n)},
        print: () => {return console.log(str)}
    }
    
return processor

}

let firstZeroTest = solution();

firstZeroTest.append('hello');

firstZeroTest.append('again');
firstZeroTest.removeStart(3);

firstZeroTest.removeEnd(4);
firstZeroTest.print();
