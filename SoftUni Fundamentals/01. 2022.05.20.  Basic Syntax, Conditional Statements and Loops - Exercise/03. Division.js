function division (num) {

    let division = 0;

    if (num % 2 == 0 && 2 > division) {
        division = 2;
    }

    if (num % 3 == 0 && 3 > division) {
        division = 3;
    }
    if (num % 6 == 0 && 6 > division) {
        division = 6;
    }
    if (num % 7 == 0 && 7 > division) {
        division = 7;
    }
    if (num % 10 == 0 && 10 > division) {
        division = 10;
    }
    
    if (division > 0 ){
        console.log(`The number is divisible by ${division}`)
    } else {
        console.log(`Not divisible`)
    }
}
division (1643)
