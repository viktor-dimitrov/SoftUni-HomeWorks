function pipesInPool(input) {
const fullVolume = Number (input[0]);
const firstPipe = Number (input[1]);
const secondPipe = Number (input[2]);
const hours = Number (input[3]);
const firstPipeVolume = firstPipe * hours;
const secondPipeVolume = secondPipe * hours;
const pipesVolume = (firstPipeVolume + secondPipeVolume);
const pipesVolumePercent = (pipesVolume / fullVolume * 100).toFixed(2);
const firstPipePercent =  (firstPipeVolume / pipesVolume * 100).toFixed(2);
const secondPipePercent = (secondPipeVolume / pipesVolume * 100).toFixed(2);
if (pipesVolume > fullVolume) {
    console.log (`For ${hours} hours the pool overflows with ${pipesVolume - fullVolume} liters.`)
} else {
    console.log (`The pool is ${pipesVolumePercent}% full. Pipe 1: ${firstPipePercent}%. Pipe 2: ${secondPipePercent}%.`)
}
}

pipesInPool([1000, 100, 120, 3]);

