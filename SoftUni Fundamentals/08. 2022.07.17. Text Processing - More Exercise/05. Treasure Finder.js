function treasureFinder(inputArr) {
    
    let keySeq = inputArr.shift().split(' ');

    for (let line of inputArr) {
        if (line === 'find') {
            break;
        }
        let newArr = [];
        for (let char of line) {
            newArr.push(char.charCodeAt());
        }
        let index = 0;
        let changedArr = [];
        for (let num of newArr) {
            changedArr.push(num - keySeq[index]);

            if (index === keySeq.length - 1) {
                index = 0;
            } else {
                index++;
            }
        }
        let decString = '';

        changedArr.forEach(element => {
            decString += String.fromCharCode(element);
        });
        
      
        let type = decString.substring(decString.indexOf('&') + 1, decString.lastIndexOf('&'));
        let coordinates = decString.substring(decString.lastIndexOf('<') + 1, decString.lastIndexOf('>'));
        console.log(`Found ${type} at ${coordinates}`);
    }
}
treasureFinder(['1 4 2 5 3 2 1',
`Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
`tsojPq23452rtgw46u356u7357usf$(lrne'$Ci7645645$@$#^$&^$*YfqpshksdvfT$>634O57YC`,
`'stj)>34W68Z@`,
'find'])