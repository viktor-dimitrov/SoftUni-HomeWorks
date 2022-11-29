import { html } from "../../node_modules/lit-html/lit-html.js";
import { getItems } from "../api/data.js";


export async function catalogView(ctx) {
    ctx.updateNav();
    const data = await getItems();

    ctx.render(catalogTempleter(data))
}

function catalogTempleter(data) {
    return html`
        <section id="dashboard-page">
            <h1 class="title">All Posts</h1>
        
            ${(data.length > 0) ? html`
            <div class="all-posts">
                ${data.map(obj => obj = cardTemplater(obj))}
            </div>` : html`
            <h1 class="title no-posts-title">No posts yet!</h1>`}
        
        </section>`
}


export function cardTemplater(obj) {

  


    return html`
                <div class="post">
                    <h2 class="post-title">${obj.title}</h2>
                    <img class="post-image" src=${obj.imageUrl} alt="Kids clothes">
                    <div class="btn-wrapper">
                        <a href="/details/${obj._id}" class="details-btn btn">Details</a>
                    </div>
                </div>`
}