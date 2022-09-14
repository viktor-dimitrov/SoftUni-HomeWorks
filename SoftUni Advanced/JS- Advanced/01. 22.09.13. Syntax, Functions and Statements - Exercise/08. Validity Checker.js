function validityCheckers (x1, y1, x2, y2) {
    let distance1 = Math.sqrt(Math.pow((0 - x1), 2) + Math.pow((0 - y1), 2));
    let distance2 = Math.sqrt(Math.pow((x2 - 0), 2) + Math.pow((y2 - 0), 2) );
    let distance3 = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

    let status1 = "valid";
    if (!Number.isInteger(distance1)) {
        status1 = "invalid";
    }
    let status2 = "valid";
    if (!Number.isInteger(distance2)) {
        status2 = "invalid";
    }
    let status3 = "valid";
    if (!Number.isInteger(distance3)) {
        status3 = "invalid";
    }
    

    console.log(`{${x1}, ${y1}} to {0, 0} is ${status1}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${status2}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${status3}`);
    

    


    




}
validityCheckers (2, 1, 1, 1)