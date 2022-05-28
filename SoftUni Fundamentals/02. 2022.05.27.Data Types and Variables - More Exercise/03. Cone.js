function cone (radius, height) {
    let volume = 1 / 3 * Math.PI * Math.pow(radius, 2) * height;
    let baseArea = Math.PI * Math.pow(radius, 2);
    let s = Math.sqrt( radius * radius + height * height);
    let roundArea = Math.PI * radius * s;
    let totalArea = baseArea + roundArea;
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${totalArea.toFixed(4)}`);
}
cone (3, 5)