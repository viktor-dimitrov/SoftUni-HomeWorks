function deserializeString(inputArray) {
    let newArr = [];
    for (let line of inputArray) {
        if (line === 'end') {
            break;
        }
        let fragLine = line.split(':');
        let char = fragLine.shift();
        let indexArr = fragLine.join('').split('/').map(Number);

        for (let i of indexArr) {
            newArr[i] = char;
        }
    }
    console.log(newArr.join(''));

}
deserializeString(['a:0/3/5/11',
'v:1/4',
'j:2',
'm:6/9/15',
's:7/13',
'd:8/14',
'c:10',
'l:12',
'end'])