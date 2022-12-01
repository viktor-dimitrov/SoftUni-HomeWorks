import {html} from "../../node_modules/lit-html/lit-html.js";
import { getAllItems } from "../api/data.js";

export async function catalogView(ctx){
    ctx.updateNav();
    const items = await getAllItems();

    ctx.render(catalogTemplate(items))
}

function catalogTemplate(items){
    return html`
        <section id="dashboard-page" class="dashboard">
            <h1>Dashboard</h1>
            ${(items.length > 0) ? html`
            <ul class="other-books-list">${items.map(book => book = bookTemplate(book))}</ul>` : html`
            <p class="no-books">No books in database!</p>`}
        </section>`
}

export function bookTemplate(book){
    return html`
                <li class="otherBooks">
                    <h3>${book.title}</h3>
                    <p>Type: ${book.type}</p>
                    <p class="img"><img src=${book.imageUrl}></p>
                    <a class="button" href="/details/${book._id}">Details</a>
                </li>`
}