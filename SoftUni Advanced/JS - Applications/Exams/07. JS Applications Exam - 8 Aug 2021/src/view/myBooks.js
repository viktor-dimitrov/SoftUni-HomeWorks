import {html} from "../../node_modules/lit-html/lit-html.js";
import { getMyItems } from "../api/data.js";
import { getUserData } from "../util.js";
import { bookTemplate } from "./catalog.js";

export async function myBooksView(ctx){

    const user = getUserData();
    const books = await getMyItems(user._id);

    ctx.render(myBooksTemplate(books));
}

function myBooksTemplate(books){
    return html`
        <section id="my-books-page" class="my-books">
            <h1>My Books</h1>
            ${(books.length > 0) ? html`
            <ul class="my-books-list">
                ${books.map(book => book = bookTemplate(book))}
            </ul>` : html`
            <p class="no-books">No books in database!</p>`}
        </section>`
}