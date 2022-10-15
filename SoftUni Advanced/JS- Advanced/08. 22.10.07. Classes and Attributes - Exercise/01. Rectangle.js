
class Rectangle {
    constructor(a, b, color) {
        this.width = a;
        this.height = b;
        this.color = color
    }
   

     calcArea = () => {
return Number(this.width) * Number(this.height)
     }
}






let rect = new Rectangle(4, 5, 'Red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());