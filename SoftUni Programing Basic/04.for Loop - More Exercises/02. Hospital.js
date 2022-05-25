function hospital (input) {
    index = 0;
    const daysCount = Number (input[index]);
    index ++;
    let treatedCount = 0;
    let untreatedCount = 0;
    let doctorsCount = 7;

    for (let i = 1; i <= daysCount ; i++) {
        
         let clientCount = Number (input[index]);
         index++;

         if (i % 3 === 0 && untreatedCount > treatedCount) {
             doctorsCount ++;
         } 

         if (clientCount <= doctorsCount) {
             treatedCount += clientCount;
         } else {
             treatedCount += doctorsCount;
             untreatedCount += clientCount - doctorsCount;

         }         
    }
    console.log(`Treated patients: ${treatedCount}.`)
    console.log (`Untreated patients: ${untreatedCount}.`)
}

hospital (["4", "7", "27", "9", "1"])

