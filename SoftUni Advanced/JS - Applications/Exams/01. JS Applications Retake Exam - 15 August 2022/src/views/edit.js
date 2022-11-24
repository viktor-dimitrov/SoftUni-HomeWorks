import {html} from "../../node_modules/lit-html/lit-html.js";


export function editPage(ctx) {
    ctx.render(editTemplater(editSubmit))

    async function editSubmit(e){
        e.preventDefault();
    }
}


function editTemplater(editSubmit){
return html`
        <section id="edit">
          <div class="form">
            <h2>Edit item</h2>
            <form @submit = ${editSubmit} class="edit-form">
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