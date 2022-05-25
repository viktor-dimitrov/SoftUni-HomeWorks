function housePainting(input) {

const x = Number(input[0]);
const y = Number(input[1]);
const h = Number(input[2]);
const door = 1.2 * 2;
const windows = (1.5 * 1.5) * 2;
const backAndFrontWalls = ((x * x) * 2) - door;
const sideWalls = ((x * y) * 2) - windows;
const backAndFrontRoof = ((x * h) / 2) * 2;
const sideRoof = (x * y) * 2;
const greenPaint = ((backAndFrontWalls + sideWalls) / 3.4).toFixed(2);;
const redPaint = ((backAndFrontRoof + sideRoof) / 4.3).toFixed(2);
console.log (greenPaint)
console.log (redPaint)
}

housePainting(["10.25", "15.45", "8.88"])

