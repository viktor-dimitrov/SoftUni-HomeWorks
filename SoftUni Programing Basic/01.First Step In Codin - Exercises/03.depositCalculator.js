function calculator(input){
    const depositSum = Number (input[0]);
    const period = Number (input[1]);
    const percent = Number (input[2]);
    const interest = depositSum * (percent / 100);
    const interestPerMonth = interest / 12;
    const totalSum = depositSum + period * interestPerMonth;
    console.log (totalSum);


            
}
calculator(["2350", "6", "7"])