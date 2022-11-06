const url = "http://localhost:3030/jsonstore/phonebook";
const delUrl = "http://localhost:3030/jsonstore/phonebook/";
const phonebook = document.getElementById("phonebook");

function attachEvents() {
    const loadButton = document.getElementById("btnLoad");
    loadButton.addEventListener('click', getReq);
    const createBtn = document.getElementById("btnCreate");
    createBtn.addEventListener('click', createFunc);
}



function loadFunc(obj) {
    const li = document.createElement('li');
    li.setAttribute('id', `${obj._id}`)
    li.textContent = `${obj.person}: ${obj.phone}`;
    const delBtn = document.createElement('button');
    delBtn.addEventListener('click', delFunc);
    delBtn.textContent = 'Delete';
    li.appendChild(delBtn);
    return li;
}
async function getReq() {
    const response = await fetch(url);
    const data = await response.json();
    const values = Object.values(data).map(loadFunc);
    phonebook.replaceChildren(...values);
}

function createFunc(){
    const nameBox = document.getElementById("person");
    const numBox = document.getElementById("phone");
    const contact = {
        "person": nameBox.value,
        "phone": numBox.value
      }
      postReq(contact);
      nameBox.value = '';
      numBox.value = '';
      getReq();
}
async function postReq(body){
    const response = await fetch(url, {
        method: "POST",
        headrs: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(body)
    });
    const data = await response.json();
}

function delFunc(e) {
    const parent = e.target.parentElement;
    const id = parent.id;
    delReq(id);
    getReq();
}
async function delReq(id) {
    const response = await fetch(`${delUrl}${id}`,{
        method:"DELETE",
        headers: {
            "Content-type": "application/json"
        },
       body: JSON.stringify(null)
    });
    const data = await response.json();
    return data
}






attachEvents();