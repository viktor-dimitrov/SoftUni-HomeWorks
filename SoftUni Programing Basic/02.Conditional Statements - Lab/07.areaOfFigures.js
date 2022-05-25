function areaOfFigures(input){
    const form = (input[0]);
    if (form == "square"){
        let a = Number(input[1]);
        let squareFace = (a * a).toFixed(3);
        console.log (squareFace);
    } 
    if (form == "rectangle"){
        let a = Number(input[1]);
        let b = Number(input[2]);
        let rectangleFace = (a * b).toFixed(3);
        console.log(rectangleFace);
    }
    if (form == "circle"){
        let r = Number(input[1]);
        let circleFace = (Math.PI * r * r).toFixed(3);
        console.log(circleFace);
    }
    if (form == "triangle"){
        let a = Number(input[1]);
        let h = Number(input[2]);
        let triangleFace = (a * h / 2).toFixed(3);
        console.log(triangleFace);
    }
}
areaOfFigures(["triangle", "4.5", "20"])

