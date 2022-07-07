function wordOccurrences(inputArray) {

    let myMap = new Map ();
    
    for (let el of inputArray) {
        let word = el;

        if (!myMap.has(word)) {
            myMap.set(word, 1)
        } else {
            let oldCount = myMap.get(word) + 1
            myMap.set(word, oldCount); 
        }
    }
    
    let sorted = Array.from(myMap.entries()).sort((a, b) => b[1] - a[1]);
    
    for(let line of sorted) {
        console.log (`${line[0]} -> ${line[1]} times`)
    }
   



}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])