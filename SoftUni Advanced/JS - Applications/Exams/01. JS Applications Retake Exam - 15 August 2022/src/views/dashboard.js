import {html} from "../../node_modules/lit-html/lit-html.js";
import { getAllShoes } from "../api/data.js";


export async function dashboardPage(ctx) {
    ctx.updateNav();

    const data = await getAllShoes();

    ctx.render(catalogTemplater(data));
}

function catalogTemplater(data) {

    if(data.length > 0){
        return html`
        <section id="dashboard">
          <h2>Collectibles</h2>
          <ul class="card-wrapper">
            ${data.map(pair => pair = cardTemplater(pair))}
          </ul>

        </section>`
    } else {
        return html`
        <section id="dashboard">
          <h2>Collectibles</h2>
          <h2>There are no items added yet.</h2>
        </section>`
    }



}

function cardTemplater(pair){
    return html`
            <li class="card">
              <img src="${pair.imageUrl}" alt="travis" />
              <p>
                <strong>Brand: </strong><span class="brand">${pair.brand}</span>
              </p>
              <p>
                <strong>Model: </strong
                ><span class="model">${pair.model}</span>
              </p>
              <p><strong>Value:</strong><span class="value">${pair.value}</span>$</p>
              <a class="details-btn" href="/details/${pair._id}">Details</a>
            </li>`
}