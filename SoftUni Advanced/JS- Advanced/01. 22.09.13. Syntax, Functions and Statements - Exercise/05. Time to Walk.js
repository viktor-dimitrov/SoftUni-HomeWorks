function timeToWalk (steps, footprint, speed) {

    let meters = steps * footprint;
    let breakTime = (Math.floor(meters / 500) * 60);
    let metersInSec = speed / 3.6;
    let totalSec = (meters / metersInSec) + breakTime;
    let hours = 0;
    let minutes = Math.floor(totalSec / 60);

    if (minutes > 60) {
        hours = Math.floor(minutes / 60);
        minutes = Math.floor(minutes % 60);
    }

    let seconds = Math.ceil(totalSec % 60);
   
    if (hours < 10) {
        hours = `0${hours}`;
    }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    if (seconds < 10) {
        minutes = `0${seconds}`;
    }
   
    console.log(`${hours}:${minutes}:${seconds}`);
    
}
timeToWalk(4000, 0.60, 5)