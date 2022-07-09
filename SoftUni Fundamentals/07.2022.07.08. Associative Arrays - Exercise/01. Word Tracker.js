function wordTracker(inputArray) {
    let myObject = {};
    let myWords = inputArray.shift().split(' ');

    myWords.forEach(element => {
        myObject[element] = 0;
    });

    for (let word of inputArray) {
        for (let key in myObject) {
            if (word === key) {
                myObject[key]++;
            }
        }
    }

    sortedArray = Object.entries(myObject).sort((a, b) => b[1] - a[1]);

    sortedArray.forEach(arr => {
        console.log(`${arr[0]} - ${arr[1]}`);
    });


}
wordTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ])

console.log("______________________________________________________________________________")

    wordTracker( [
        'is the', 
        'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])