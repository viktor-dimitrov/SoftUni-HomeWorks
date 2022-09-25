function addAndRemoveElements (inputArr) {
    let myArr = [];

    for (let i = 0; i < inputArr.length; i++) {
        let command = inputArr[i];
        command === 'add' ? myArr.push(i + 1) : myArr.pop();
    }
    myArr.length > 0 ? console.log(myArr.join('\n')) : console.log('Empty');
}
addAndRemoveElements(['add', 
'add', 
'remove', 
'add', 
'add'])