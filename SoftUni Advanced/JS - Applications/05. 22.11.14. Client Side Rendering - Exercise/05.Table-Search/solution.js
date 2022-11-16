import { html, render } from './node_modules/lit-html/lit-html.js';

solve();

function solve() {
   updater(null)
   document.querySelector('#searchBtn').addEventListener('click', onClick);
}

async function getRequest() {
   const response = await fetch("http://localhost:3030/jsonstore/advanced/table");
   const data = await response.json();
   return (data);
}

function onClick() {
   const inputBox = document.getElementById("searchField");
   let value = inputBox.value.toLowerCase();
   if (!value) {
      value = null;
   }
   updater(value);
   inputBox.value = '';
}

async function updater(value) {
   const tbody = document.getElementsByTagName('tbody')[0];
   const data = await getRequest();
   const tableRows = Object.values(data).map(el => templateMaker(el, value));
   render(tableRows, tbody);
}

function templateMaker(obj, value) {
   const rowText = `${obj.firstName} ${obj.lastName}%%${obj.email}%%${obj.course}`.toLowerCase();
   const tr = html`
      <tr class=${rowText.includes(value) ? 'select' : '' }>
         <td>${obj.firstName} ${obj.lastName}</td>
         <td>${obj.email}</td>
         <td>${obj.course}</td>
      </tr>
   `;
   return tr;
}
