function leapYear (year) {

    let leapYear = true

    if ((year % 4 == 0 || year % 400 == 0 ) && year != 1900) {
        leapYear = true
    } else if (year == 2000) {
        leapYear = true
    } else if (year == 1900) {
        leapYear = false;
    }  else if (year % 100 != 0) {
        leapYear = false
    } 

    if (leapYear == true) {
        console.log (`yes`)
    } else {
        console.log(`no`)
    }
}
leapYear(1900)