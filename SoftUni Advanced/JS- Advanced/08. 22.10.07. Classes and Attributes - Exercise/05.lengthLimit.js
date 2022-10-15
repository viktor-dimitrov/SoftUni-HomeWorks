class Stringer {

    constructor(str, num) {
        this.innerString = str
        this.innerLength = Number(num)

    }

    increase(length) {
        this.innerLength += length;
    }
    decrease(length) {
        this.innerLength -= length
        if (this.innerLength < 0) {
            this.innerLength = 0
        }

    }
    toString() {
        let outputStr = this.innerString
        if (outputStr.length > this.innerLength) {
            outputStr = `${outputStr.slice(0, this.innerLength)}...`;
        } else if (this.innerLength == 0) {
            outputStr = '...';

        }
        return outputStr
    }


}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test

