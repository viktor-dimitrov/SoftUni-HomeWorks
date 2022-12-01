import {html} from "../../node_modules/lit-html/lit-html.js";
import { editItem, getItemById } from "../api/data.js";

export async function editView(ctx){
    const id = ctx.params.id;
    const book = await getItemById(id);

    async function onEdit(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        const inputs = Object.fromEntries(formData);
        if (Object.values(inputs).some(input => input == '')){
            alert("Invalid entries!");
            return;
        }

        await editItem(id, inputs);
        ctx.page.redirect(`/details/${id}`);
    }

    ctx.render(editTemplate(book, onEdit));
}

function editTemplate(book, onEdit){
    return html`
        <section id="edit-page" class="edit">
            <form @submit=${onEdit} id="edit-form" action="#" method="">
                <fieldset>
                    <legend>Edit my Book</legend>
                    <p class="field">
                        <label for="title">Title</label>
                        <span class="input">
                            <input type="text" name="title" id="title" .value=${book.title}>
                        </span>
                    </p>
                    <p class="field">
                        <label for="description">Description</label>
                        <span class="input">
                            <textarea name="description"
                                id="description">${book.description}</textarea>
                        </span>
                    </p>
                    <p class="field">
                        <label for="image">Image</label>
                        <span class="input">
                            <input type="text" name="imageUrl" id="image" .value=${book.imageUrl}>
                        </span>
                    </p>
                    <p class="field">
                        <label for="type">Type</label>
                        <span class="input">
                            <select id="type" name="type" .value=${book.type}>
                                <option value="Fiction" selected>Fiction</option>
                                <option value="Romance">Romance</option>
                                <option value="Mistery">Mistery</option>
                                <option value="Classic">Clasic</option>
                                <option value="Other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Save">
                </fieldset>
            </form>
        </section>`
    
}