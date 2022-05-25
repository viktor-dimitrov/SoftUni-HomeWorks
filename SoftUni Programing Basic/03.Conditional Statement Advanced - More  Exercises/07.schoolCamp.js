function schoolCamp(input) {
    const season = String (input[0]);
    const groupType = String (input[1]);
    const studentsCount = Number (input[2]);
    const nights = Number (input[3]);
    let sport = "";
    let price = 0;

    switch (season) {
        case "Winter":
            switch (groupType) {
                case "girls": price = 9.6; sport = "Gymnastics"; break; 
                case "boys": price = 9.6; sport = "Judo"; break;
                case "mixed": price = 10; sport = "Ski"; break;
            }; break;
        case "Spring":
            switch (groupType) {
                case "girls": price = 7.2; sport = "Athletics"; break;
                case "boys": price = 7.2; sport = "Tennis"; break;
                case "mixed": price = 9.5; sport = "Cycling"; break;
            }; break; 
        case "Summer":
            switch (groupType) {
                case "girls": price = 15; sport = "Volleyball"; break;
                case "boys": price = 15; sport = "Football"; break;
                case "mixed": price = 20; sport = "Swimming"; break;
            }; break;   
    }
    let discount = 0;

    if (studentsCount >=50) {
        discount = 0.5;
    } else if (studentsCount >= 20 && studentsCount < 50) {
        discount = 0.85;
    } else if (studentsCount >= 10 && studentsCount < 20) {
        discount = 0.95;
    } else {
        discount = 1;
    }
    const totalPrice = discount * (studentsCount * price) * nights;
    console.log(`${sport} ${totalPrice.toFixed(2)} lv.`)
}
schoolCamp(["Spring", "mixed", 17, 14]);
