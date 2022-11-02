async function getInfo() {

    const stopId = document.getElementById("stopId");
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId.value}`;
    const stopName = document.getElementById("stopName");
    const ulBusses = document.getElementById("buses");
    stopId.value = '';
    ulBusses.innerHTML = '';

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        stopName.textContent = data.name;
        
        Object.entries(data.buses).forEach(([busId, time]) => {
         
            let li = document.createElement('li');
            li.textContent = `Bus ${busId} arrives in ${time} minutes`;
            ulBusses.appendChild(li)
        })

    } catch (error) {
        stopName.textContent = 'Error';

    }
     

}