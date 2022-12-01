import {html} from "../../node_modules/lit-html/lit-html.js";
import { deleteItem, getItemById } from "../api/data.js";
import { countLike, myLike, postLike } from "../api/likes.js";
import { getUserData } from "../util.js";

export async function detailsView(ctx){

    const user = getUserData();
    const id = ctx.params.id;
    const requests = [getItemById(id), countLike(id)];

    if (user){
        requests.push(myLike(id, user._id));
    }
    
    const [book, count, hasLike] = await Promise.all(requests);

    async function onDelete(e){
        e.preventDefault();
        const choice = confirm("Are you sure , you want to delete this book?");
        if (choice){
            await deleteItem(id);
            ctx.page.redirect("/catalog");
        }
    }

    async function onLike(e){
        e.preventDefault();
        await postLike(id);
        ctx.page.redirect(`/details/${id}`);
    }

    ctx.render(detailsTemplate(user, book, onDelete, onLike, count, hasLike));
}

function detailsTemplate(user, book, onDelete, onLike, count, hasLike){

    return html`
        <section id="details-page" class="details">
            <div class="book-information">
                <h3>${book.title}</h3>
                <p class="type">Type: ${book.type}</p>
                <p class="img"><img src=${book.imageUrl}></p>
                <div class="actions">

                    ${(user && user._id == book._ownerId) ? html`
                    <a class="button" href="/edit/${book._id}">Edit</a>
                    <a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>` : ''}

                    ${(user && user._id != book._ownerId && hasLike == 0) ? html`
                    <a @click=${onLike} class="button" href="javascript:void(0)">Like</a>` : ''}

                    <div class="likes">
                        <img class="hearts" src="/images/heart.png">
                        <span id="total-likes">Likes: ${count}</span>
                    </div>
     
                </div>
            </div>
            <div class="book-description">
                <h3>Description:</h3>
                <p>${book.description}</p>
            </div>
        </section>`
}