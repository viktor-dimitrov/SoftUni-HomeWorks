function firm(input) {
    const neededHours = Number (input[0]);
    const days = Number (input[1]);
    const extraWorkers = Number (input[2]);
    const workHours = (days * 8) * 0.9;
    const extraWorkHours = (extraWorkers * 2) * days;
    const totalHours = Number (Math.floor(workHours + extraWorkHours));
    const difference = Math.abs (totalHours - neededHours)
    if (totalHours < neededHours) {
        console.log (`Not enough time!${difference} hours needed.`)
    } else {
        console.log (`Yes!${difference} hours left.`)
    }

}



firm ([100, 7, 0])