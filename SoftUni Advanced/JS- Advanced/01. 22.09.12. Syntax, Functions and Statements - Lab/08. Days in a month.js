function daysInAMonth(month, year) {
    let myDate = new Date(year, month, 0).getDate()
    console.log(myDate)
}
daysInAMonth(2,2021)