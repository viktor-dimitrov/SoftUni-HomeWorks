import {html} from "../../node_modules/lit-html/lit-html.js";
import { delShoes, getDetails } from "../api/data.js";
import { getUserData } from "../util.js";


export async function detailsPage(ctx) {
    const pairId = ctx.params.id;
    const data = await getDetails(pairId);
    const user = getUserData();
    const userId = user._id

    ctx.render(detailsTemplater(data, userId, onDelete));

    async function onDelete(e){
       const id = e.target.getAttribute('data-id')

       await delShoes(pairId);
       ctx.page.redirect("/dashboard");
    }
    
}

function detailsTemplater(pair, userId, onDelete){
    return html`
        <section id="details">
          <div id="details-wrapper">
            <p id="details-title">Shoe Details</p>
            <div id="img-wrapper">
              <img src="${pair.imageUrl}" alt="example1" />
            </div>
            <div id="info-wrapper">
              <p>Brand: <span id="details-brand">${pair.brand}</span></p>
              <p>
                Model: <span id="details-model">${pair.model}</span>
              </p>
              <p>Release date: <span id="details-release">${pair.release}</span></p>
              <p>Designer: <span id="details-designer">${pair.designer}</span></p>
              <p>Value: <span id="details-value">${pair.value}</span></p>
            </div>
            <!--Edit and Delete are only for creator-->
            ${pair._ownerId == userId ? html`
            <div id="action-buttons">
              <a href="/edit/${pair._id}" id="edit-btn">Edit</a>
              <a @click = ${onDelete} href="javascript:void(0)" id="delete-btn" data-id= ${pair._id} >Delete</a>
            </div> ` : ''}
          </div>
        </section>`
}