function cinemaTicket (input) {
    const day = input[0];
     let price = 0;

    if (day === "Saturday" || day === "Sunday") {
        price = 16;
    } else if (day === "Wednesday" || day === "Thursday") {
        price = 14;
    } else {
        price = 12
    }
console.log (price)

}
cinemaTicket(["Monday"])
// Monday	Tuesday	Wednesday	Thursday	Friday	Saturday	Sunday
// 12		   12 	      14      	14       12        16	       16
