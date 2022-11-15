
import { html, render } from './node_modules/lit-html/lit-html.js';
import { towns } from './towns.js';

const root = document.getElementById("towns");
const result = document.getElementById("result");

let ul = templateMaker(towns, null);

const inputBox = document.getElementById("searchText");
const btn = document.getElementsByTagName('button')[0];
btn.addEventListener('click', onClick);

function onClick(e) {
   e.preventDefault();
   let value = (inputBox.value);
   if (value === '') {
      value = '&^%^&^$';
      result.textContent = '';
   }
   update(value);
   search();
   inputBox.value = '';
   const count = document.querySelectorAll('.active').length;
   result.textContent = `${count} matches found`;  
}

function update(value) {
   ul = templateMaker(towns, value);
}

function templateMaker(towns, value) {
   const ul = html`
   <ul>
      ${towns.map(town => html`<li class="${town.includes(value) ? 'active' : ''}">${town}</li>`)}
   </ul>
   `
   return ul
}
function search() {
   render(ul, root)

}

search()
