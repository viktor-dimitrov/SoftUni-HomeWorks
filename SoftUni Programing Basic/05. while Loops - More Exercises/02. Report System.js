function reportSystem (input) {
    const totalSum = Number(input[0]);
    let sum = totalSum
    let csSum = 0;
    let csCount = 0;
    let ccSum = 0;
    let ccCount = 0
    let index = 1;
    let command = input[index];
    while (sum > 0) {
        if (command == "End") {
        console.log (`Failed to collect required money for charity.`); 
        break;
        }
    
    if (index % 2 == 0) {
        let ccPay = Number(command)
        if (ccPay > 10) {
        ccCount++;
        ccSum += ccPay;
        sum -= ccPay;
        console.log ("Product sold!")
        index++;
        command = input[index];
        } else {
            console.log ("Error in transaction!");
            index++;
            command = input[index];
        }
    } else {

    let csPay = Number(command);
    if (csPay <= 100) {
        csCount++;
        csSum += csPay;
        sum -= csPay;
        console.log ("Product sold!")
        index++;
        command = input[index];
    } else {
        console.log ("Error in transaction!")
        index++;
        command = input [index];
    }
}
}
if (sum <= 0) {
    console.log (`Average CS: ${(csSum / csCount).toFixed(2)}`);
    console.log (`Average CC: ${(ccSum / ccCount).toFixed(2)}`)
}
}
reportSystem([600,
    86,
    150,
    98,
    227,
    "End"
    
    ])