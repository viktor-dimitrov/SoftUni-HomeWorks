import {html} from "../../node_modules/lit-html/lit-html.js";

import { deleteItem, getItemById } from "../api/data.js";
import { getUserData } from "../util.js";


export async function detailsView(ctx){
    ctx.updateNav();
    const id = ctx.params.id;
    const user = getUserData();
    const item = await getItemById(id);

    ctx.render(detailsTemplate(user, item, onDelete));

    async function onDelete(e){
        e.preventDefault();

        const choice = confirm("Are you sure you want to delete this meme ?");
        if(choice){
            await deleteItem(id);
            ctx.page.redirect("/catalog");

        }




    }

}

function detailsTemplate(user, item, onDelete){
    return html `
        <section id="meme-details">
            <h1>Meme Title: ${item.title}

            </h1>
            <div class="meme-details">
                <div class="meme-img">
                    <img alt="meme-alt" src= ${item.imageUrl}>
                </div>
                <div class="meme-description">
                    <h2>Meme Description</h2>
                    <p>
                    ${item.description}
                    </p>
                    <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->

                    ${(user && user._id == item._ownerId) ? html`
                    <a class="button warning" href="/edit/${item._id}">Edit</a>
                    <button @click=${onDelete} class="button danger">Delete</button>` : ''}

                    
                </div>
            </div>
        </section>`
}