function worldSwimmingRecord(input){
const worldRecord = Number (input[0]);
const distance = Number (input[1]);
const timePerMeter = Number (input[2]);
const swimmingTime = distance * timePerMeter;
const addTime = Math.floor (distance / 15) * 12.5;
const totalTime = (swimmingTime + addTime).toFixed(2);
const difference = Math.abs (worldRecord - totalTime).toFixed(2)
if (totalTime < worldRecord) {
    console.log (`Yes, he succeeded! The new world record is ${totalTime} seconds.`)
} else {
    console.log (`No, he failed! He was ${difference} seconds slower.`)
}

}
worldSwimmingRecord(["55555.67", "3017", "5.03"])
