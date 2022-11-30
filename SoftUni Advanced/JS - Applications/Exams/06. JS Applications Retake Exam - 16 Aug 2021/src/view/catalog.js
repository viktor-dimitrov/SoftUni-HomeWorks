import {html} from "../../node_modules/lit-html/lit-html.js";
import { getAllItems } from "../api/data.js";


export async function catalogView(ctx){

    const items = await getAllItems();

    ctx.render(catalogTemplate(items))
}

function catalogTemplate(items){
    return html`
        <section id="catalog-page">
            <h1>All Games</h1>

            ${(items.length > 0) ? html`${items.map(obj => obj = cardTemplate(obj))}` : html`<h3 class="no-articles">No articles yet</h3>`}

        </section>`
}

function cardTemplate(obj){
    return html`
            <div class="allGames">
                <div class="allGames-info">
                    <img src=${obj.imageUrl}>
                    <h6>${obj.category}</h6>
                    <h2>${obj.title}</h2>
                    <a href="/details/${obj._id}" class="details-button">Details</a>
                </div>
            </div>`
}