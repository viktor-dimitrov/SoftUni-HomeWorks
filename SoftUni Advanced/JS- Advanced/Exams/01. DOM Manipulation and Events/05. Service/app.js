window.addEventListener('load', solve);

function solve() {
    

 let typeProduct = document.getElementById("type-product");
 let desicription = document.getElementById("description");
 let clientName = document.getElementById("client-name");
 let clientPfone = document.getElementById("client-phone");
 let sendButton = document.getElementById("right").querySelector('button');
 sendButton.addEventListener('click', sendFunc);

 let receivedOrders = document.getElementById("received-orders");
 let completedOrders = document.getElementById("completed-orders");

 let clearButton = document.getElementsByClassName("clear-btn")[0];
 clearButton.addEventListener('click', clearFunc);

 function sendFunc(e) {
    e.preventDefault();

    if (!typeProduct.value || !desicription.value || !clientName.value || !clientPfone.value) {
        return
    }

    let div = document.createElement('div');
    div.setAttribute('class', 'container');
    let h2 = document.createElement('h2');
    h2.textContent = `Product type for repair: ${typeProduct.value}`;
    div.appendChild(h2);
    let h3 = document.createElement('h3');
    h3.textContent = `Client information: ${clientName.value}, ${clientPfone.value}`;
    div.appendChild(h3);
    let h4 = document.createElement('h4');
    h4.textContent = `Description of the problem: ${desicription.value}`;
    div.appendChild(h4);

    let startButton = document.createElement('button');
    startButton.addEventListener('click', startFunc);
    startButton.setAttribute('class', 'start-btn');
    // startButton.setAttribute('disabled', false)
    startButton.textContent = "Start repair";
    div.appendChild(startButton);
    
    let finishButton = document.createElement('button');
    finishButton.addEventListener('click', finishFunc);
    finishButton.setAttribute('class', 'finish-btn');
    finishButton.setAttribute('disabled', true);
    finishButton.textContent = `Finish repair`;
    div.appendChild(finishButton);

    receivedOrders.appendChild(div);

    typeProduct.value = "";
    desicription.value = "";
    clientName.value = "";
    clientPfone.value = "";
 }

 function startFunc (e) {
    e.preventDefault();
    e.target.setAttribute('disabled', true);
    let finishButton = document.querySelector('.finish-btn');
    finishButton.disabled = false;


 }

 function finishFunc(e) {
    e.preventDefault();
    let sector = e.target.parentElement;
    let data = Array.from(sector.children);

    let div = document.createElement('div');
    div.setAttribute('class', 'container')

    div.appendChild(data[0]);
    div.appendChild(data[1]);
    div.appendChild(data[2]);
    completedOrders.appendChild(div);

    sector.remove();
 }

 function clearFunc(e) {
    e.preventDefault();

 
    let divs = completedOrders.querySelectorAll('.container');
    Array.from(divs).forEach(el => {
        el.remove()
    })
 }
}