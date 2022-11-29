import {html} from "../../node_modules/lit-html/lit-html.js";
import { getMyItems } from "../api/data.js";
import { getUserData } from "../util.js";
import { cardTemplater } from "./catalog.js";


export async function myPostsView(ctx) {
    const user = getUserData();
    const userId = user._id;
    const items = await getMyItems(userId);
    console.log(items)




    ctx.render(myPostsTemplater(items))
}

function myPostsTemplater(items){
    return html`
        <section id="my-posts-page">
            <h1 class="title">My Posts</h1>

            <!-- Display a div with information about every post (if any)-->
            <div class="my-posts">
                ${(items.length > 0) ? html`${items.map(item => item = cardTemplater(item))}` : html` <h1 class="title no-posts-title">You have no posts yet!</h1>`}
            </div>

            <!-- Display an h1 if there are no posts -->
           
        </section>`
}