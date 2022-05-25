function trapezoidArea(input) {
    const b1 = Number(input[0]);
    const b2 = Number(input[1]);
    const h = Number(input[2]);
    const area = (b1 + b2) * h / 2;
    console.log ((area).toFixed(2));

}
trapezoidArea (["8", "234", "89"])