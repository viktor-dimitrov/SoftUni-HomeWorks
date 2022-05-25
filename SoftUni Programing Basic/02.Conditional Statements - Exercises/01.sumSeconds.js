function sumSecond(input){
    const firstTime = Number(input[0]);
    const secondTime = Number(input[1]);
    const thirdTime = Number(input[2]);
    let minutes = Math.floor((firstTime + secondTime + thirdTime) / 60)
    let seconds =((firstTime + secondTime + thirdTime) % 60).toFixed(0);
    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`)
    } else {
    console.log(`${minutes}:${seconds}`)
}
}
sumSecond(["12","14", "10"])