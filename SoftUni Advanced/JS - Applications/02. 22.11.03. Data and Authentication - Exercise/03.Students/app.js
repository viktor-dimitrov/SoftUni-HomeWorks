
const url = "http://localhost:3030/jsonstore/collections/students";
const tbody = document.getElementsByTagName('tbody')[0];
const form = document.getElementById('form');
const button = document.getElementById("submit");
form.addEventListener('submit', addFunc);

getReq();

function addFunc(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const objData = Object.fromEntries(formData);
    const inputs = form.querySelectorAll('input');

    if (!inputs[0].value || !inputs[1].value || !inputs[2].value || !inputs[3].value) {
        alert ('Error: Empty field')
        return
    }

    postReq(objData);

    inputs.forEach(input => {
        input.value = '';
    });

    tbody.innerHTML = '';

    getReq();
}
async function postReq(body) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(body)
    })
}

function trMaker(obj) {
    const tr = document.createElement('tr');
    tr.setAttribute('id', obj._id);
    const firstName = document.createElement('th');
    firstName.textContent = obj.firstName;
    const lastName = document.createElement('th');
    lastName.textContent = obj.lastName;
    const facNum = document.createElement('th');
    facNum.textContent = obj.facultyNumber;
    const grade = document.createElement('th');
    grade.textContent = obj.grade;
    tr.appendChild(firstName);
    tr.appendChild(lastName);
    tr.appendChild(facNum);
    tr.appendChild(grade);

    return tr
}

async function getReq(){
    const response = await fetch(url);
    const data = await response.json();
    const values = Object.values(data);
    const elements = values.map(trMaker);

    elements.forEach(element => {
        tbody.appendChild(element);
    });

}
