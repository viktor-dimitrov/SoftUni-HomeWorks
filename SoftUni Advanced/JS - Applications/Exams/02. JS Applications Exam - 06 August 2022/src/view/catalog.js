import {html} from "../../node_modules/lit-html/lit-html.js";
import { getItems } from "../api/data.js";

export async function catalogPage(ctx) {
    ctx.updateNav();

    const dataArray = await getItems();
    
    ctx.render(catalogTemplater(dataArray));
}

function catalogTemplater(arr){
    return html`
        <section id="dashboard">
          <h2>Job Offers</h2>
           ${(arr.length == 0) ? html`<h2>No offers yet.</h2>` : arr.map(el => el = offerTemplater(el))};
        </section>`
}

function offerTemplater(obj){
    return html`
          <div class="offer">
            <img src=${obj.imageUrl} alt="/images/example3.png" />
            <p>
              <strong>Title: </strong
              ><span class="title">${obj.title}</span>
            </p>
            <p><strong>Salary:</strong><span class="salary">${obj.salary}</span></p>

            <a class="details-btn" href="/details/${obj._id}">Details</a>
          </div>`
}