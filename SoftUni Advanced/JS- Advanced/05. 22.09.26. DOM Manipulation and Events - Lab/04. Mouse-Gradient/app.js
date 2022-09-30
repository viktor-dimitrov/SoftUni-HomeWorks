function attachGradientEvents() {
    let box = document.getElementById("gradient");
    let result = document.getElementById("result");

    box.addEventListener('mousemove', myFunc);

    function myFunc(event){

        let position = event.offsetX;
        let width = event.target.clientWidth
        
        let res = Math.floor(position / width * 100)
        result.textContent = `${res.toFixed(0)}%`
    }
}