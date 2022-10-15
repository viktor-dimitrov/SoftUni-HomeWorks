class Hex {
    constructor(num) {
        this.value = Number(num)

    };
    valueOf() {
        return this.value
    };

    toString() {
        return `0x${this.value.toString(16).toUpperCase()}`
    };

    plus(input) {
        return new Hex(this.value + input)
    };

    minus(input) {
        return new Hex(this.value - input)
    };

    parse(input) {
        return parseInt(input, 16)
    };

}

let FF = new Hex(255);
console.log(FF.toString());
(FF.valueOf() + 1 === 256)
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));