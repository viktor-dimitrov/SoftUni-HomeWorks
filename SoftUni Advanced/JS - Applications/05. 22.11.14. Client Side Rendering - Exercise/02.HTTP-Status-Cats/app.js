import {html, render} from './node_modules/lit-html/lit-html.js';
import {cats} from './catSeeder.js';

const root = document.getElementById("allCats");

 
const catCards = cats.map(catsCreator);
const ul = html`<ul>${catCards}</ul>`;
render(ul, root);

function catsCreator(cat){
    const card = html`
    <li>
     <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
         <div class="info">
            <button class="showBtn" @click = ${displayFunc}>Show status code</button>
            <div class="status" style="display: none" id=${cat.id}>
                <h4>Status Code: ${cat.statusCode}</h4>
                <p>${cat.statusMessage}</p>
            </div>
        </div>
    </li>
    `
    return card
}

function displayFunc(e){
    const btn = (e.target.parentElement).children[0];
    const div = (e.target.parentElement).children[1];

    if (btn.textContent === 'Show status code'){
        div.style.display = 'block';
        btn.textContent = 'Hide status code';
    } else {
        div.style.display = 'none';
        btn.textContent = 'Show status code'
    }
  
      
     
   
 
    

}


