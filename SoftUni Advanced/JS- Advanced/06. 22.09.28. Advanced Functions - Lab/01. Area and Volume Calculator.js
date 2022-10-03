function solve(areaFunc, volFunc , jsonArr) {

    let inputArr = JSON.parse(jsonArr);

    let output = inputArr.map(obj => {
        return {area: areaFunc.call(obj), volume: volFunc.call(obj)}
    });
    return output;
}





function area() {
    return Math.abs(this.x * this.y);
    };
    
 function vol() {
     return Math.abs(this.x * this.y * this.z);
        };
        
        solve(area, vol, `[
            {"x":"1","y":"2","z":"10"},
            {"x":"7","y":"7","z":"10"},
            {"x":"5","y":"2","z":"10"}
            ]`)

           