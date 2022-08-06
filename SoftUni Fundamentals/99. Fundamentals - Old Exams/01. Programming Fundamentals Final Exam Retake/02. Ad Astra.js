function addAstra(inputArray) {
    let text = inputArray[0];
    let totalCal = 0;
    let info = [];

 let pattern = /(?<sep>[|#])(?<item>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<cal>\d+)\1/gm;
 let valid;

 while((valid = pattern.exec(text)) !== null) {
    
    let item = valid.groups.item;
    let date = valid.groups.date;
    let cal = Number(valid.groups.cal);

    let infoLine = `Item: ${item}, Best before: ${date}, Nutrition: ${cal}`;
    info.push(infoLine);
    totalCal += cal;
 }
    let days = Math.floor(totalCal / 2000);
    console.log(`You have food to last you for: ${days} days!`);

    for (let token of info) {
        console.log(token)
    }
    
    
}
addAstra([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ]

)