function fishTank(input) {

    const lenght = Number(input[0]);
    const width = Number(input[1]);
    const hight = Number(input[2]);
    const percentOfOther = Number(input[3]);
    const volume = (lenght * width * hight) / 1000;
    const clearVolume = volume - (volume * percentOfOther / 100);
    console.log (clearVolume)
    
}

fishTank(["105", "77", "89", "18.5"])