import {html} from "../../node_modules/lit-html/lit-html.js";
import { editItem, getItemById } from "../api/data.js";
import { showError } from "./notify.js";


export async function editView(ctx){
  
    const id = ctx.params.id;
    const item = await getItemById(id);

    ctx.render(editTemplate(item, onEdit));

    async function onEdit(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        const inputs = Object.fromEntries(formData);
        if (inputs.title == '' || inputs.description == '' || inputs.imageUrl == ''){
            showError("invalid entries!");
            return
        }

        await editItem(id, inputs)
        ctx.page.redirect(`/details/${id}`)


    }

}

function editTemplate(item, onEdit){
    return html`
            <section id="edit-meme">
            <form @submit=${onEdit} id="edit-form">
                <h1>Edit Meme</h1>
                <div class="container">
                    <label for="title">Title</label>
                    <input id="title" type="text" placeholder="Enter Title" name="title" .value=${item.title}>
                    <label for="description">Description</label>
                    <textarea id="description" placeholder="Enter Description" name="description">${item.description}</textarea>
                    <label for="imageUrl">Image Url</label>
                    <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value=${item.imageUrl}>
                    <input type="submit" class="registerbtn button" value="Edit Meme">
                </div>
            </form>
        </section>`
}