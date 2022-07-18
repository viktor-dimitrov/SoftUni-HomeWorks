function hardWord(inputArr) {
    let letterArr = inputArr.shift().split(' ');
    for (let word of inputArr[0]) {
        let search = "_".repeat(word.length);
        if (letterArr.includes(search)) {
            letterArr.splice(letterArr.indexOf(search), 1, word);
        } else if (letterArr.includes(`${search}.`)) {
            letterArr.splice(letterArr.indexOf(`${search}.`), 1, `${word}.`);
        } else if (letterArr.includes(`${search},`)) {
            letterArr.splice(letterArr.indexOf(`${search},`), 1, `${word},`);
        }
    }
    console.log(letterArr.join(' '));
}
hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)