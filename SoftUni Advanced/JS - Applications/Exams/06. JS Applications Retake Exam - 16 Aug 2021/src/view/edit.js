import {html} from "../../node_modules/lit-html/lit-html.js";
import { editItem, getItemById } from "../api/data.js";


export async function editView(ctx){
    const id = ctx.params.id;
    const item = await getItemById(id)


    ctx.render(editTemplate(onEdit, item))

    async function onEdit(e){
        e.preventDefault();

        const formData = new FormData(e.target);
        const inputs = Object.fromEntries(formData);
        if(Object.values(inputs).some(input => input == '')){
            alert("Invalid entries!")
            return;
        }

        await editItem(id, inputs)

        ctx.page.redirect(`/details/${id}`);
    } 


}

function editTemplate(onEdit, item){
    return html`
        <section id="edit-page" class="auth">
            <form @submit=${onEdit} id="edit">
                <div class="container">

                    <h1>Edit Game</h1>
                    <label for="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" .value=${item.title}>

                    <label for="category">Category:</label>
                    <input type="text" id="category" name="category" .value=${item.category}>

                    <label for="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" .value=${item.maxLevel}>

                    <label for="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" .value=${item.imageUrl}>

                    <label for="summary">Summary:</label>
                    <textarea name="summary" id="summary">${item.summary}</textarea>
                    <input class="btn submit" type="submit" value="Edit Game">

                </div>
            </form>
        </section>`

}