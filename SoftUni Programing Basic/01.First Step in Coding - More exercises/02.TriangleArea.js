function triangleArea(input) {
const side = Number (input[0]);
const height = Number (input[1]);
const area = side * (height /2);
console.log (area.toFixed(2))
}
triangleArea (["20", "30"])