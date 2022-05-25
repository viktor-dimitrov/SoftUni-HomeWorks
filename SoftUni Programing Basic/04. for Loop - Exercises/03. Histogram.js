function histogram (input) {
  
    let numCount = Number (input[0]);
  
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    
    for (let i = 1; i <= numCount; i++) {
       
        let num = Number (input[i])

        if ( num < 200) {
            p1 += 1;
        } else if (num >= 200 && num <= 399) {
            p2 += 1;
        } else if (num >= 400 && num <= 599) {
            p3 +=1;
        } else if (num >= 600 && num <= 799) {
            p4 += 1;
        } else {
            p5 +=1;
        }
    }
    let result1 = (p1 / numCount * 100);
    let result2 = (p2 / numCount * 100);
    let result3 = (p3 / numCount * 100);
    let result4 = (p4 / numCount * 100);
    let result5 = (p5 / numCount * 100);

    console.log(`${result1.toFixed(2)}%`);
    console.log(`${result2.toFixed(2)}%`);
    console.log(`${result3.toFixed(2)}%`);
    console.log(`${result4.toFixed(2)}%`);
    console.log(`${result5.toFixed(2)}%`);

}
histogram (["3", "1", "2", "999"])
