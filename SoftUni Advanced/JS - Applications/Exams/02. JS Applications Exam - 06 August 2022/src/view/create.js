import {html} from "../../node_modules/lit-html/lit-html.js";
import { createItem } from "../api/data.js";

export function createPage(ctx) {


    ctx.render(createTemplater(onPost));

    async function onPost(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const body = Object.fromEntries(formData);
        
        if (Object.values(body).some(value => value == '')) {
            alert("Invalied entries!");
            return;
        }
        await createItem(body);
        ctx.page.redirect('/catalog');
    }

}

function createTemplater(onPost) {
    return html`
        <section id="create">
          <div class="form">
            <h2>Create Offer</h2>
            <form @submit=${onPost} class="create-form">
              <input
                type="text"
                name="title"
                id="job-title"
                placeholder="Title"
              />
              <input
                type="text"
                name="imageUrl"
                id="job-logo"
                placeholder="Company logo url"
              />
              <input
                type="text"
                name="category"
                id="job-category"
                placeholder="Category"
              />
              <textarea
                id="job-description"
                name="description"
                placeholder="Description"
                rows="4"
                cols="50"
              ></textarea>
              <textarea
                id="job-requirements"
                name="requirements"
                placeholder="Requirements"
                rows="4"
                cols="50"
              ></textarea>
              <input
                type="text"
                name="salary"
                id="job-salary"
                placeholder="Salary"
              />

              <button type="submit">post</button>
            </form>
          </div>
        </section>`
}