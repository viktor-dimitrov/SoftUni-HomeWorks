function mountainRun (input) {
    const recordInSeconds = Number (input[0]);
    const distanceInMeters = Number (input[1]);
    const secondsPerMeter = Number (input[2]);

    const time = distanceInMeters * secondsPerMeter;
    const totalTime = time + Math.floor(distanceInMeters / 50) * 30;
    const difference = Math.abs (recordInSeconds - totalTime);

    if (totalTime < recordInSeconds) {
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`)
    } else {
        console.log (`No! He was ${difference.toFixed(2)} seconds slower.`)
    }

}
mountainRun ([10164, 1400, 25])