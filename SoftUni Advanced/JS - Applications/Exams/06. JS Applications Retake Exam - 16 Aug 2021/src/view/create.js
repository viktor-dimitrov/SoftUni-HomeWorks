import {html} from "../../node_modules/lit-html/lit-html.js";
import { createItem } from "../api/data.js";


export function createView(ctx){


    ctx.render(createTemplate(onCreate))

    async function onCreate(e){
        e.preventDefault();

        const formData = new FormData(e.target);
        const inputs = Object.fromEntries(formData);
        if(Object.values(inputs).some(input => input == '')){
            alert("Invalid entries!")
            return;
        }

        await createItem(inputs)

        console.log(inputs);
        ctx.page.redirect("/");
    } 


}

function createTemplate(onCreate){
    return html`
            <section id="create-page" class="auth">
            <form @submit=${onCreate} id="create">
                <div class="container">

                    <h1>Create Game</h1>
                    <label for="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" placeholder="Enter game title...">

                    <label for="category">Category:</label>
                    <input type="text" id="category" name="category" placeholder="Enter game category...">

                    <label for="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1">

                    <label for="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo...">

                    <label for="summary">Summary:</label>
                    <textarea name="summary" id="summary"></textarea>
                    <input class="btn submit" type="submit" value="Create Game">
                </div>
            </form>
        </section>`
}