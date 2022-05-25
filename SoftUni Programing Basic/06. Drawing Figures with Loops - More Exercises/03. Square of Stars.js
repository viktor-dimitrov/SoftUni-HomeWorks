function squareOfStars (input) {
    let starsCount = Number(input[0]);
    let starsLine = "";

    for (let i = 1; i <= starsCount; i ++) {
        starsLine += `* `;
    }
    for (let j =1; j <= starsCount; j++) {
        console.log (starsLine)
    }
}
squareOfStars ([3])