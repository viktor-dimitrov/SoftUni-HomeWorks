function searchForANumber (numArray, command) {
    let neededElements = command[0];
    let delCount = command[1];
    let lookingFor = command[2];
    let newArray = numArray.slice(0, neededElements);
    let counter = 0;
    
    for (let i = 0; i < delCount;i++) {
        newArray.shift();
    }
    
    for (el of newArray) {
        if (el === lookingFor) {
            counter++;
        }
    }
     console.log(`Number ${lookingFor} occurs ${counter} times.`);

}
searchForANumber([5, 2, 3, 4, 1, 6,],
    [5, 2, 3])