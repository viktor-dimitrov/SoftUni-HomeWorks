import {html} from "../../node_modules/lit-html/lit-html.js";
import { postShoes } from "../api/data.js";


export function addPairPage(ctx) {
    ctx.render(createTemplater(postSubmit));

async function postSubmit(e){
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);

    if(Object.values(inputs).some(value => value == '')){
        alert("Invalid entries!");
        return
    }
  
    await postShoes(inputs)
    ctx.page.redirect("/dashboard");
}

}

function createTemplater(postSubmit) {
    return html`
        <section id="create">
          <div class="form">
            <h2>Add item</h2>
            <form @submit = ${postSubmit} class="create-form">
              <input
                type="text"
                name="brand"
                id="shoe-brand"
                placeholder="Brand"
              />
              <input
                type="text"
                name="model"
                id="shoe-model"
                placeholder="Model"
              />
              <input
                type="text"
                name="imageUrl"
                id="shoe-img"
                placeholder="Image url"
              />
              <input
                type="text"
                name="release"
                id="shoe-release"
                placeholder="Release date"
              />
              <input
                type="text"
                name="designer"
                id="shoe-designer"
                placeholder="Designer"
              />
              <input
                type="text"
                name="value"
                id="shoe-value"
                placeholder="Value"
              />

              <button type="submit">post</button>
            </form>
          </div>
        </section>`
}