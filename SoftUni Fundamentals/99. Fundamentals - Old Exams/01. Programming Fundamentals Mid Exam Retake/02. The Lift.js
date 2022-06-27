function theLift (input) {
    let people = Number(input[0]);
    let wagonsArr = input[1].split(' ').map(Number);
      
    for (let i = 0;i < wagonsArr.length; i++){
        let currWagon = wagonsArr[i];
        for(let j = currWagon;j < 4; j++) {
            people--;
            currWagon++;
            if (people < 1) {
                break;
            }
        }
        wagonsArr.splice(i,1,currWagon);
        if (people < 1) {
            break;
        }
    }

    if (people > 0 && wagonsArr[wagonsArr.length - 1] === 4) {
        console.log(`There isn't enough space! ${people} people in a queue!`);
        
    } else if (people === 0 && wagonsArr[wagonsArr.length - 1] < 4) {
        console.log(`The lift has empty spots!`);
    }
    console.log(wagonsArr.join(' '));
}
theLift ([
    "16",
    "0 0 0 0"
   ]
   )