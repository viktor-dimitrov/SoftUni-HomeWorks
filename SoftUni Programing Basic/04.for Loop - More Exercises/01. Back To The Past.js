function backToThePast (input) {
    const money = Number (input[0]);
    const deadYear = Number (input[1]);
    let yearsOld = 18;
    let outlay = 0;

    for (let i = 1800; i <= deadYear; i++) {
        
        if (i % 2 == 0) {
            outlay += 12000;
        } else {
            outlay += 12000 + (yearsOld * 50);
        }
        yearsOld += 1;
    }
    const difference = Math.abs (money - outlay);
    
    if (money >= outlay) {
        console.log (`Yes! He will live a carefree life and will have ${difference.toFixed(2)} dollars left.`)
    } else {
        console.log (`He will need ${difference.toFixed(2)} dollars to survive.`)
    }
}
backToThePast (["50000" , "1802"])