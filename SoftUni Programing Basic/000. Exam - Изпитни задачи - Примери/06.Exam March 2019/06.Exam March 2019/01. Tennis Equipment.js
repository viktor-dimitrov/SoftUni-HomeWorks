function tennisEquipment (input) {
    const racketPrice = Number(input[0]);
    const racketCount = Number(input[1]);
    const shoesPrice = racketPrice / 6;
    const shoesCount = Number(input[2]);
    const otherPrice = (racketCount * racketPrice + shoesCount * shoesPrice) * 0.2;
    const totalSum = otherPrice + racketCount * racketPrice + shoesCount * shoesPrice;
    const djokovicPart = totalSum / 8;
    const sponsorsPart = totalSum - djokovicPart;
    console.log(`Price to be paid by Djokovic ${Math.floor(djokovicPart)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(sponsorsPart)}`);
}
tennisEquipment([850,
    4,
    2])