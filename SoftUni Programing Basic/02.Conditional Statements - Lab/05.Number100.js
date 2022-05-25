function numbers(input){
    const Num = (input[0]);
    if (Num < 100){
        console.log("Less than 100");
    }
    if (Num >= 100)
    if (Num <= 200){
        console.log("Between 100 and 200");
    }
    if (Num > 200){
        console.log("Greater than 200")
    }

}
numbers(["200"])

// •	под 100 отпечатайте: "Less than 100"
// •	между 100 и 200 отпечатайте: "Between 100 and 200"
// •	над 200 отпечатайте: "Greater than 200"
