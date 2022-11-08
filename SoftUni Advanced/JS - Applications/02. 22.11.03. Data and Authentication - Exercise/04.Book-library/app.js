

const url = "http://localhost:3030/jsonstore/collections/books";
const tbody = document.getElementsByTagName('tbody')[0];
tbody.innerHTML = '';
const loadBtn = document.getElementById("loadBooks");
loadBtn.addEventListener('click', getReq);
const form = document.getElementsByTagName('form')[0];
form.addEventListener('submit', submitFunc);

async function getReq() {
    const response = await fetch(url);
    const data = await response.json();
    const objects = Object.entries(data);

    const elements = objects.map(creator);
    tbody.innerHTML = ''
    elements.forEach(element => {
        tbody.appendChild(element);
    });
}
function creator(obj){
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    td1.textContent = obj[1].title;
    const td2 = document.createElement('td');
    td2.textContent = obj[1].author;
    const td3 = document.createElement('td');
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', editFunc);
    const delBtn = document.createElement('button');
    delBtn.setAttribute('id', obj[0]);
    delBtn.textContent = 'Delete';
    delBtn.addEventListener('click', delFunc);
    td3.appendChild(editBtn);
    td3.appendChild(delBtn);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    return tr;
}

function editFunc (e){
    const row = e.target.parentElement.parentElement.children;
    const id = e.target.parentElement.children[1].id;
    const [authorBox, titleBox] = document.querySelectorAll('input');
    titleBox.value = row[1].textContent;
    authorBox.value = row[0].textContent;
    form.children[0].textContent = 'Edit FORM';
    form.children[5].textContent = 'Save';
    form.children[5].addEventListener('click', saveFunc);
    form.children[5].setAttribute('id', id)
}

function saveFunc(ev){
    ev.preventDefault();
    const id = ev.target.id;
    const formData = new FormData(form);
    const inputs = Object.fromEntries(formData);
    const [authorBox, titleBox] = document.querySelectorAll('input'); 
    if (!authorBox.value || !titleBox.value) {
    //    alert('Error: Empty filed!');
        return
    }      
    const body = {
        author: inputs.author,
        title: inputs.title
    };

    if(ev.target.textContent == 'Save') {
        putReq(id, body);
        getReq();
        authorBox.value = '';
        titleBox.value = '';
        form.children[0].textContent = 'FORM';
        form.children[5].textContent = 'Submit';
        ev.target.removeEventListener('click', saveFunc);

    }
}

async function putReq(id, body){
    const response = await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: {
           "Content-type": "application/json"
        },
        body: JSON.stringify(body)
    })
    const data = await response.json();

}

function delFunc(e) {
    const tr = e.target.parentElement.parentElement;
    const id = e.target.id;
   delReq(id);
   tr.remove();
   getReq();
}
async function delReq(id) {
    const response = await fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(null)
    }) 
}


function submitFunc(e) {
    e.preventDefault();
    if (e.submitter.tagName == 'BUTTON' && form.children[5].textContent == 'Submit') {
        const formData = new FormData(e.target);
        const inputs = Object.fromEntries(formData);
        const [authorBox, titleBox] = document.querySelectorAll('input');
        if (!authorBox.value || !titleBox.value) {
         //   alert('Error: Empty filed!')
            return
        }
        const body = {
            author: inputs.author,
            title: inputs.title
        }
        postReq(body);
        authorBox.value = '';
        titleBox.value = '';
        getReq();
    } 
}

async function postReq(body) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(body)
    })
    const data = await response.json();
}