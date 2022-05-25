function circle(input){
    const r = Number(input[0]);
    const area = (Math.PI * r * r).toFixed(2);
    const parameter = (2 * Math.PI * r).toFixed(2);
    console.log (`${area}\n${parameter}`);

}
circle(["3"])
