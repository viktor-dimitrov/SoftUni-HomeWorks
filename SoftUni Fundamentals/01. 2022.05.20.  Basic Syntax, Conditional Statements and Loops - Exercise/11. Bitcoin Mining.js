function bitcoinMining (input) {
    let bitcoinPrice = 11949.16;
    let goldPrice = 67.51;
    let firstBitcoinDay = 0;
    let bitcoinsCounter = 0;
    let allGold = 0;
    let index = 0;
    let dailyGold = input[index];
    let days = input.length;
    let daysCounter = 0;
   

    while (daysCounter < days) {

        daysCounter++;
       
        if (daysCounter != 0 && daysCounter % 3 == 0) {
            allGold += dailyGold * 0.7 * goldPrice;
        } else {
            allGold += dailyGold * goldPrice;
        }

        if (allGold >= bitcoinPrice) {
            
            while (allGold >= bitcoinPrice) {
                console.log()
                allGold -= bitcoinPrice;
                bitcoinsCounter ++;
            
            }

        }
        
        if (bitcoinsCounter > 0 && firstBitcoinDay == 0) {
            firstBitcoinDay = daysCounter;
        }
        index++;
        dailyGold = input[index];
        
    }
     console.log (`Bought bitcoins: ${bitcoinsCounter}`)
     if (bitcoinsCounter > 0) {

        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`)
     }
     
     console.log(`Left money: ${allGold.toFixed(2)} lv.`)

}
bitcoinMining ([3124.15,
    504.212,
    2511.124])