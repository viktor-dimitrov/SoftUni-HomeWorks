
   solution();


async function solution() {

   const main = document.getElementById("main");
   const mainChildren = await getData();
   main.replaceChildren(...mainChildren);
}

async function getData() {
    const response = await fetch("http://localhost:3030/jsonstore/advanced/articles/list");
    const data = await response.json();
    const elements = data.map(elementsCreator);
    return elements;
}
async function getInfo(id) {
    const response = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${id}`);
    const data = await response.json();
    const text = data.content;
    return text;
}

async function showMore(e) {
    const btn = e.target;
    const main = e.target.parentElement.parentElement;
    const extraDiv = main.children[1];
    const p = extraDiv.children[0];
    const text = await getInfo(e.target.id);
    p.textContent = text;
    if (btn.textContent == 'More') {
        extraDiv.style.display = 'block'
        btn.textContent = 'Less';
    } else {
        extraDiv.style.display = 'none'
        btn.textContent = 'More';
    }

}

 function elementsCreator(obj) {
    const div = document.createElement("div");
    div.setAttribute('class','accordion');
    const headDiv = document.createElement('div');
    headDiv.setAttribute('class', 'head');
    const span = document.createElement('span');
    span.textContent = `${obj.title}`;
    const button = document.createElement('button');
    button.setAttribute('class', 'button');
    button.setAttribute('id', `${obj._id}`);
    button.addEventListener('click', showMore);
    button.textContent = 'More';
    const extraDiv = document.createElement('div');
    extraDiv.setAttribute('class', 'extra');
    const p = document.createElement('p');
    
    extraDiv.appendChild(p);
    headDiv.appendChild(span);
    headDiv.appendChild(button);
    div.appendChild(headDiv);
    div.appendChild(extraDiv)


return div

}