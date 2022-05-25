function flowerShop(input) {
    const magnolias = Number (input[0]);
    const hyacinthes = Number (input[1]);
    const roses = Number (input[2]);
    const cactuses = Number (input[3]);
    const presentPrice = Number (input[4]);
    const MagnoliaPrice = 3.25;
    const hyacinthPrice = 4;
    const rosePrice = 3.5;
    const cactusPrice = 8;
    const totalSum = (MagnoliaPrice * magnolias + hyacinthPrice * hyacinthes + rosePrice * roses + cactusPrice * cactuses) * 0.95
    const difference = Math.abs(totalSum - presentPrice);
if (totalSum <presentPrice) {
    console.log (`She will have to borrow ${Math.ceil(difference)} leva.`)
} else {
    console.log (`She is left with ${Math.floor(difference)} leva.`)
}
}
flowerShop ([2, 3, 5, 1, 50])
flowerShop ([15, 7, 5, 10,100])
15
7
5
10
100

