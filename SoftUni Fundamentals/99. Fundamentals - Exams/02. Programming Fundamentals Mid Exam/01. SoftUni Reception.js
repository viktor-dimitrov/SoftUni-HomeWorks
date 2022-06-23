function softUniReception (inputArr) {
    let input = inputArr.slice().map(Number);
    let ansPerHour = input[0] + input[1] + input[2];
    let askCount = input[3];
    let hours = 0;

    while (askCount > 0) {
        askCount -= ansPerHour;
        hours ++;

        if (hours % 4 === 0) {
            hours++;
        }
    }
    return `Time needed: ${hours}h.`;
}
console.log(softUniReception(['3','2','5','40']))