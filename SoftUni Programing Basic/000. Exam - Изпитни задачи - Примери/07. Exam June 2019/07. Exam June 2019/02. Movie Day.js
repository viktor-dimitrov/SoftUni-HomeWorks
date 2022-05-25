function movieDay (input) {

    const allTime = Number(input[0]);
    const scenCount = Number(input[1]);
    const timeForScen = Number(input[2]);

    let pending = allTime * 0.15;
    let movieTime = scenCount * timeForScen;
    let totalTime = pending + movieTime;

    let difference = Math.abs (allTime - totalTime);
    
    if (totalTime <= allTime) {
        console.log(`You managed to finish the movie on time! You have ${Math.round(difference)} minutes left!`);
    } else {
        console.log (`Time is up! To complete the movie you need ${Math.round(difference)} minutes.`);
    }
}
movieDay (["120",
"10",
"11"])