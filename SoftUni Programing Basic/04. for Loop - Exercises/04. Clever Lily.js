function cleverLily (input) {
    
    const age = Number (input[0]);
   
    const woshMachPrice = Number (input[1]);
    const toyPrice = Number (input[2]);
    let money = 0;
    let toys = 0;
    let tempMoney = 10;
    let evenYearsCounter = 0

    for (let i = 1; i <= age; i++) {
        
        if (i % 2 === 0) {
            money += tempMoney;
            tempMoney +=10;
            money -= 1
        } else {
            toys += 1
        }
    }
    const totalSum = money + (toys * toyPrice);
    const difference = Math.abs (totalSum - woshMachPrice);

    if (totalSum >= woshMachPrice) {
        console.log (`Yes! ${difference.toFixed(2)}`)
    } else {
        console.log (`No! ${difference.toFixed(2)}`)
    }
}
cleverLily (["10", "170.00", "6"])