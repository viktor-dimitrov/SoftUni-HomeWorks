function oddOccurrences(inputString) {
    let myArr = inputString.split(' ');
    let myMap = new Map();

    myArr.forEach(text => {
        let modText = text.toLowerCase();

        if (!myMap.has(modText)) {
            myMap.set(modText, 1);
        } else {
            myMap.set(modText, (myMap.get(modText) + 1));
        }
    });

    let outputArr = [];

    for (let el of myMap) {
        if (el[1] % 2 !== 0) {
            outputArr.push(el[0]);
        }
    }
    console.log(outputArr.join(' '));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')