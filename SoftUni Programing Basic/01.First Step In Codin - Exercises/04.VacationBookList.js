function vacationBookList(input) {
    const pageCount = Number(input[0]);
    const pagePerHour = Number(input[1]);
    const readingDaysCount = Number(input[2]);
    const hoursForReading = pageCount / pagePerHour
    console.log (hoursForReading / readingDaysCount)
    
}
vacationBookList(["432", "15", "4"])