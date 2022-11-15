import {html , render} from './node_modules/lit-html/lit-html.js';



const form = document.getElementsByTagName('form')[0];
form.addEventListener('submit', onSubmit);
const root = document.getElementById('root');

function onSubmit(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    const {towns} = Object.fromEntries(formData);
    const townsArr = towns.split(', ');
    renderTowns(townsArr);
   
}
 function renderTowns(townsArr) {
    console.log(townsArr)
    const elements = townsArr.map(elementsCreator);
    console.log(elements);
    const ul = html`<ul>${elements}<ul>`

    render(ul, root);
 }

 function elementsCreator(town){
    const townEl = html`<li>${town}</li>`;
    return townEl
 }
