function partyTime(inputArray) {

    let myArray = inputArray.join(' ').split(' ')
    let myList = myArray.slice(0, inputArray.indexOf("PARTY"));
    let myGuests = myArray.slice(inputArray.indexOf("PARTY") + 1)
    let vipList =[];
    let regList =[];

    myGuests.forEach(element => {
        if (myList.includes(element)) {
            myList.splice(myList.indexOf(element), 1)
        }
    });
   

    myList.forEach(element => {
        
            if(!isNaN(element[0]) ) {
                vipList.push(element)
            } else {
                regList.push(element)
            }
        
    });

    console.log(vipList.length + regList.length);
    console.log(vipList.join('\n'))
    console.log(regList.join('\n'))

}

partyTime(['7IK9Yo0h',
'1as',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
"1as",
"2srgserg",
'PARTY',
'1as',
'Ce8vwPmE',
'SVQXQCbc'
])
