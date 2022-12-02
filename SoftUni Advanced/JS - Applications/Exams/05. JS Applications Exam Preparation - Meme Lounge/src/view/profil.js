import {html} from "../../node_modules/lit-html/lit-html.js";
import { getMyItems } from "../api/data.js";
import { getUserData } from "../util.js";


export async function profilView(ctx){
    const user = getUserData();
    const items = await getMyItems(user._id);

    console.log(user.username)

    ctx.render(profilTemplate(user, items));

}


function profilTemplate(user, items){
    return html`
        <section id="user-profile-page" class="user-profile">
            <article class="user-info">
                <img id="user-avatar-url" alt="user-profile" src="/images/${user.gender}.png">

                <div class="user-content">
                    <p>Username: ${user.username}</p>
                    <p>Email: ${user.email}</p>
                    <p>My memes count: ${items.length}</p>
                </div>
            </article>
            <h1 id="user-listings-title">User Memes</h1>
            <div class="user-meme-listings">
                ${(items.length > 0) ? html`
                ${items.map(obj => obj = myCardsTemplate(obj))}` : html`
                <p class='no-memes'>No memes in database.</p>`}
            </div>
        </section>`
}

function myCardsTemplate(obj){
    return html`
                <div class="user-meme">
                    <p class="user-meme-title">${obj.title}</p>
                    <img class="userProfileImage" alt="meme-img" src=${obj.imageUrl}>
                    <a class="button" href="/details/${obj._id}">Details</a>
                </div>`
}