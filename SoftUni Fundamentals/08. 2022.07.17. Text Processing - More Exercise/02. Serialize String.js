function serializeString(inputArray) {
    let textArr = inputArray[0].split('');
    let buffer = {};

    for (let l of textArr) {
        if (!buffer.hasOwnProperty(l)) {
            buffer[l] = new Set();
        }
        for (let i = 0; i < textArr.length; i++) {
            let char = textArr[i];
            if (char === l) {
                buffer[l].add(i);
            }
        }
    }
    Object.entries(buffer).forEach(element => {
        let indexes = Array.from(element[1]);
        console.log(`${element[0]}:${indexes.join('/')}`);
    });
}
serializeString (["avjavamsdmcalsdm"])