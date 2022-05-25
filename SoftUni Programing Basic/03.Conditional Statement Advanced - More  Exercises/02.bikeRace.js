function bikeRace (input) {
    const juniorBikers = Number (input[0]);
    const seniorBikers = Number (input[1]);
    const trace = input[2];
    const bikersCount = juniorBikers + seniorBikers;
    let juniorsTax = 0;
    let seniorsTax = 0;
    switch (trace) {
        case "trail": juniorsTax = 5.5; seniorsTax = 7; break;
        case "cross-country": juniorsTax = 8; seniorsTax = 9.5; break;
        case "downhill": juniorsTax = 12.25; seniorsTax = 13.75; break;
        case "road": juniorsTax = 20; seniorsTax = 21.50; break;
    }
    let allTaxes = ((juniorBikers * juniorsTax) + (seniorBikers * seniorsTax));
    
    if (bikersCount >= 50 && trace === "cross-country") {
        allTaxes *= 0.75;
    }
    const totalSum = allTaxes * 0.95;
console.log (totalSum.toFixed(2));
}
bikeRace([21, 26, "cross-country"])