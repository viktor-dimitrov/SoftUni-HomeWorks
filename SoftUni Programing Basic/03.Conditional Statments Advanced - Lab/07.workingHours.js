function workingHours(input) {
    const time = Number (input[0]);
    const day = String (input[1]);
    
    if (time < 10 || time > 18 || day === "Sunday") {
        console.log ("closed")
    } else {
        console.log ("open")
    }
}
workingHours([19, "Monday"])