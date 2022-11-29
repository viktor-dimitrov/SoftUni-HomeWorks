import {html} from "../../node_modules/lit-html/lit-html.js";
import { createItem } from "../api/data.js";


export async function createView(ctx){


    ctx.render(createTemplate(onCreate));


    async function onCreate(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        const inputs = Object.fromEntries(formData);

        if (inputs.title == '' || inputs.description == '' || inputs.imageUrl == ''){
            alert("invalid entries!");
            return
        }
        await createItem(inputs);

        ctx.page.redirect("/catalog");


        console.log(inputs)

    }

}

function createTemplate(onCreate){
    return html`
        <section id="create-meme">
            <form @submit=${onCreate} id="create-form">
                <div class="container">
                    <h1>Create Meme</h1>
                    <label for="title">Title</label>
                    <input id="title" type="text" placeholder="Enter Title" name="title">
                    <label for="description">Description</label>
                    <textarea id="description" placeholder="Enter Description" name="description"></textarea>
                    <label for="imageUrl">Meme Image</label>
                    <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
                    <input type="submit" class="registerbtn button" value="Create Meme">
                </div>
            </form>
        </section>`
}