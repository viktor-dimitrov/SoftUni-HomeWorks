function trainingLab(input){
const lenght = Number(input[0]);
const width = Number(input[1] - 1);
const placesCountL = parseInt ((lenght * 100) / 120);
const placesCountW = parseInt ((width * 100) / 70);
const totalPlaces = parseInt (placesCountL * placesCountW) - 3;
console.log(totalPlaces);
}
trainingLab(["8.4", "5.2"])