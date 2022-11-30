import {html} from "../../node_modules/lit-html/lit-html.js";
import { editItem, getItemById } from "../api/data.js";

export async function editPage(ctx) {
    const id = ctx.params.id;
    const info = await getItemById(id);
    //console.log(info);

    ctx.render(editTemplater(info, onEdit));

    async function onEdit(e){
        e.preventDefault();
       
        const formData = new FormData(e.target);
        const body = Object.fromEntries(formData);
        if (Object.values(body).some(value => value == '')) {
            alert("Invalied entries!");
            return;
        }

        await editItem(id, body);
        ctx.page.redirect(`/details/${id}`)
        
    }
  

}


function editTemplater(info, onEdit){
    return html`
        <section id="edit">
          <div class="form">
            <h2>Edit Offer</h2>
            <form @submit=${onEdit} class="edit-form">
              <input
                type="text"
                name="title"
                id="job-title"
                value=${info.title}
              />
              <input
                type="text"
                name="imageUrl"
                id="job-logo"
                value=${info.imageUrl}
              />
              <input
                type="text"
                name="category"
                id="job-category"
                value=${info.category}
              />
              <textarea
                id="job-description"
                name="description"
                rows="4"
                cols="50"
              >${info.description}</textarea>
              <textarea
                id="job-requirements"
                name="requirements"
                rows="4"
                cols="50"
              >${info.requirements}</textarea>
              <input
                type="text"
                name="salary"
                id="job-salary"
                value=${info.salary}
              />

              <button type="submit">post</button>
            </form>
          </div>
        </section>`

}