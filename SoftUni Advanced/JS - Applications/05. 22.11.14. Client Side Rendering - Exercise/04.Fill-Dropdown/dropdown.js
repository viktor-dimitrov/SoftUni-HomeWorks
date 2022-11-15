import {html, render} from './node_modules/lit-html/lit-html.js';

const url = 'http://localhost:3030/jsonstore/advanced/dropdown';
const menu = document.getElementById('menu');
const form = document.getElementsByTagName('form')[0];
const inputBox = form.children[1]
const btn = form.children[2];
form.addEventListener('submit', onSubmit);

addItem()

function onSubmit(e){
    e.preventDefault();
    const entrie = inputBox.value;
    addOption(entrie);
    inputBox.value = '';
    addItem();
}

async function addOption(text){
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({text: text})
    })
    }


async function getReq() {
    const response = await fetch(url)
    const data = await response.json();
    const values = Object.values(data);
    const options = values.map(optionCreator);

    render(options, menu)
}

function optionCreator(obj){
    const option = html`<option value = ${obj._id}>${obj.text}</option>`
    return option
}

function addItem() {
getReq()

}

