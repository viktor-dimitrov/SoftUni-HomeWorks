function sleepyTomCat(input) {
    const gamingTimeForYear = Number (30000);
    const workDayGaming = Number (63);
    const restDayGaming = Number (127);
    const yearDays = Number(365);
    const restDays = Number (input[0]);
    const workingDays = yearDays - restDays;
    const restDayTime = restDays * 127;
    const workDayTime = workingDays * 63;
    const gamingTime = restDayTime + workDayTime;
    const difference = Math.abs (gamingTimeForYear - gamingTime )
    const hours = Math.floor (difference / 60)
    const minutes = Math.floor (difference % 60);
if (gamingTime < gamingTimeForYear) {
    console.log (`Tom sleeps well`);
    console.log (`${hours} hours and ${minutes} minutes less for play`);
} else {
    console.log (`Tom will run away`);
    console.log (`${hours} hours and ${minutes} minutes more for play`);
}
}
sleepyTomCat([20])