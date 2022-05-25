function mobileOperator (input) {
    const period = input[0];
    const type = input[1];
    const internet = input[2];
    const months = Number(input[3]);
    let tax = 0;

    if (period == "one") {
        switch (type) {
            case "Small": tax = 9.98; break;
            case "Middle": tax = 18.99; break;
            case "Large": tax = 25.98; break;
            case "ExtraLarge": tax = 35.99; break;
        }
    } else if (period == "two") {
            switch (type) {
                case "Small": tax = 8.58; break;
                case "Middle": tax = 17.09; break;
                case "Large": tax = 23.59; break;
                case "ExtraLarge": tax = 31.79; break 
            }
        }
        switch (internet) {
            case "yes": {
                if (tax <= 10) {
                    tax += 5.50;
                } else if (tax > 10 && tax <= 30) {
                    tax += 4.35;
                } else if (tax > 30) {
                    tax += 3.85;
                }
            }
        
    }
    let totalSum = tax * months
    if (period == "two") {
        totalSum *= 0.9625;
    }
    console.log(`${totalSum.toFixed(2)} lv.`)
}
mobileOperator (["two",
    "Large",
    "no",
    10])