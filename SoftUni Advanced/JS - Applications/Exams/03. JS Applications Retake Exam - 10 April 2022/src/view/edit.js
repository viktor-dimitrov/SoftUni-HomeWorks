import { html } from "../../node_modules/lit-html/lit-html.js";
import { editItem, getItemById } from "../api/data.js";

export async function editView(ctx){
    const id = ctx.params.id;
    const item = await getItemById(id);


    async function onEdit(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        const inputs = Object.fromEntries(formData);
        if (Object.values(inputs).some(input => input == '')) {
            alert("invalid entries!!")
            return;
        }
        await editItem(id, inputs);
        ctx.page.redirect(`/details/${id}`);
    }
    

    ctx.render(editTemplater(item, onEdit));
}

function editTemplater(obj, onEdit){
    return html`
        <section id="edit-page" class="auth">
            <form @submit=${onEdit} id="edit">
                <h1 class="title">Edit Post</h1>

                <article class="input-group">
                    <label for="title">Post Title</label>
                    <input type="title" name="title" id="title" value=${obj.title}>
                </article>

                <article class="input-group">
                    <label for="description">Description of the needs </label>
                    <input type="text" name="description" id="description" value=${obj.description}>
                </article>

                <article class="input-group">
                    <label for="imageUrl"> Needed materials image </label>
                    <input type="text" name="imageUrl" id="imageUrl" value=${obj.imageUrl}>
                </article>

                <article class="input-group">
                    <label for="address">Address of the orphanage</label>
                    <input type="text" name="address" id="address" value=${obj.address}>
                </article>

                <article class="input-group">
                    <label for="phone">Phone number of orphanage employee</label>
                    <input type="text" name="phone" id="phone" value=${obj.phone}>
                </article>

                <input type="submit" class="btn submit" value="Edit Post">
            </form>
        </section>`

}