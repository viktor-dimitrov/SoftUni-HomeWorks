function listOfNames (inputArr) {
    let sorted = inputArr.sort((a, b) => a.localeCompare(b));
    let index = 1;
    sorted.forEach(element => {
        console.log(`${index}.${element}`);
        index++;
    });
}
listOfNames(["John", "Bob", "Christina", "Ema"])