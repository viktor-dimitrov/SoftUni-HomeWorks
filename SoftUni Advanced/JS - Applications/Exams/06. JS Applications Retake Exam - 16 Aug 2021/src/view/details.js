import { html } from "../../node_modules/lit-html/lit-html.js";
import { addComment, getAllComments } from "../api/comments.js";
import { deleteItem, getItemById } from "../api/data.js";
import { getUserData } from "../util.js";



export async function detailsView(ctx) {
    const id = ctx.params.id;
    const user = getUserData();
    const item = await getItemById(id);
    const comments = await getAllComments(id);

   // console.log(comments)

   

    async function onDelete(){
        const choice = confirm("You will delete this game dude!");
        if(choice){
            await deleteItem(id);
            ctx.page.redirect("/");
        }
    }

    async function onComment(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        const input = Object.fromEntries(formData);

        if(input.comment == ''){
            alert("Invalid entries!");
            return;
        }

        input.gameId = id;
        await addComment(input);
        ctx.page.redirect(`/details/${id}`)


       // console.log(input)

    }

console.log(item.title)
    ctx.render(detailsTemplate(user, item, comments, onDelete, onComment))
}

function detailsTemplate(user, item, comments, onDelete, onComment){
    return html`
        <section id="game-details">
            <h1>Game Details</h1>
            <div class="info-section">

                <div class="game-header">
                    <img class="game-img" src=${item.imageUrl} />
                    <h1>${item.title}</h1>
                    <span class="levels">MaxLevel: ${item.maxLevel}</span>
                    <p class="type">${item.category}</p>
                </div>

                <p class="text">${item.summary}</p>
                <div class="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                    ${(user && comments.length > 0) ? html`${comments.map(obj => obj = commentTemplate(obj))}` : html`<p class="no-comment">No comments.</p>`}
                   
                    </ul>
                </div>

               ${(user && user._id == item._ownerId) ? html`
               <div class="buttons">
                    <a href="/edit/${item._id}" class="button">Edit</a>
                    <a @click=${onDelete} href="javascript:void(0)" class="button">Delete</a>
                </div>` : ''}

            </div>

            <!-- Bonus -->
            <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
            ${(user && user._id != item._ownerId) ? html`
            <article class="create-comment">
                <label>Add new comment:</label>
                <form @submit=${onComment} class="form">
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input class="btn submit" type="submit" value="Add Comment">
                </form>
            </article>` : '' }
        </section>`
}

function commentTemplate(obj){
    return html`
                        <li class="comment">
                            <p>Content: ${obj.comment}</p>
                        </li>`
}