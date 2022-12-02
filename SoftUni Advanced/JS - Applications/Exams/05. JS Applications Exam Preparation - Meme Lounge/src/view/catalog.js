import {html} from "../../node_modules/lit-html/lit-html.js";
import { getAllItems } from "../api/data.js";
import { showError } from "./notify.js";



export async function catalogView(ctx){

    const items = await getAllItems();
    ctx.render(catalogTemplate(items));

}

function catalogTemplate(items){
    
return html`
        <section id="meme-feed">
            <h1>All Memes</h1>
            <div id="memes">
				<!-- Display : All memes in database ( If any ) -->

                ${(items.length > 0) ? html`
                ${items.map(obj => obj = cardTemplate(obj))}` : html`
                <p class="no-memes">No memes in database.</p>`}
				<!-- Display : If there are no memes in database -->
				
			</div>
        </section>`

}

function cardTemplate(obj) {
    return html `
                <div class="meme">
                    <div class="card">
                        <div class="info">
                            <p class="meme-title">${obj.title}</p>
                            <img class="meme-image" alt="meme-img" src=${obj.imageUrl}>
                        </div>
                        <div id="data-buttons">
                            <a class="button" href="/details/${obj._id}">Details</a>
                        </div>
                    </div>
                </div>`
}