function attachEvents() {
    const inputBox = document.getElementById("location");
    const button = document.getElementById("submit");
    button.addEventListener('click', getWeather);

    const forecastDiv = document.getElementById("forecast");  //style="display:none"
    const currentDiv = document.getElementById("current");
    const upcomingDiv = document.getElementById("upcoming");

    async function getWeather() {
try {
    const response = await fetch('http://localhost:3030/jsonstore/forecaster/locations');
        const list = await response.json();

        const find = list.find(obj => obj.name === inputBox.value);
        const { code, name } = find;
        const currentData = await currentFunc(code);
        const upcomingData = await upcomingFunc(code);
  
        currentDiv.innerHTML = '<div class="label">Current conditions</div>';
        upcomingDiv.innerHTML = '<div class="label">Three-day forecast</div>';
        forecastDiv.style.display = "block";

        const [currDiv, currSpan] = currentMaker(currentData);
        currentDiv.appendChild(currDiv);
        currentDiv.appendChild(currSpan);

        const upcDiv = upcomingMaker(upcomingData);
        upcomingDiv.appendChild(upcDiv);
    } catch {
        errorFunc();
    }

    }

    const enumSymbols = {
        'Sunny': "&#x2600", // ☀
        'Partly sunny': "&#x26C5", // ⛅
        'Overcast': "&#x2601", // ☁
        'Rain': "&#x2614", // ☂
        'Degrees': "&#176"   // °
    }

    function currentMaker(data) {

        let div = document.createElement('div');
        div.classList.add("forecasts");
        let symbolSpan = document.createElement('span');
        symbolSpan.setAttribute('class', "condition symbol");
        symbolSpan.innerHTML = `${enumSymbols[data.forecast.condition]}`;
        div.appendChild(symbolSpan);

        let span = document.createElement('span');
        span.classList.add("condition");

        let span1 = document.createElement('span');
        span1.classList.add("forecast-data");
        span1.textContent = `${data.name}`;

        let span2 = document.createElement('span');
        span2.classList.add("forecast-data");
        span2.innerHTML = `${data.forecast.low}${enumSymbols.Degrees}/${data.forecast.high}${enumSymbols.Degrees}`;

        let span3 = document.createElement('span');
        span3.classList.add("forecast-data");
        span3.textContent = `${data.forecast.condition}`;

        span.appendChild(span1);
        span.appendChild(span2);
        span.appendChild(span3);

        return [div, span]
    }

    function upcomingMaker(data) {
        let div = document.createElement('div');
        div.classList.add("forecast-info");

        data.forecast.forEach(element => {

            let span = document.createElement('span');
            span.classList.add("upcoming");

            let span1 = document.createElement('span');
            span1.classList.add("symbol");
            span1.innerHTML = `${enumSymbols[element.condition]}`

            let span2 = document.createElement('span');
            span2.classList.add("forecast-data");
            span2.innerHTML = `${element.low}${enumSymbols.Degrees}/${element.high}${enumSymbols.Degrees}`;

            let span3 = document.createElement('span');
            span3.classList.add("forecast-data");
            span3.textContent = `${element.condition}`;

            span.appendChild(span1);
            span.appendChild(span2);
            span.appendChild(span3);
            div.appendChild(span);

        });

        return div

    }

    async function currentFunc(code) {
        // try {
            const response = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${code}`);
            const data = await response.json();
            return data;
        // } catch {
        //     errorFunc();
        // }
       
    }

    async function upcomingFunc(code) {
        // try {
            const response = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`);
            const data = await response.json();
            return data;
        // } catch(e) {
        //     errorFunc();
        // }
        
    }

    function errorFunc() {
        forecastDiv.style.display = "block";
        currentDiv.innerHTML = '<div class="label">Error</div>';
        upcomingDiv.innerHTML = '';
    }

}

attachEvents();