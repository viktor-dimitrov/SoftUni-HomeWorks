import {html} from "../../node_modules/lit-html/lit-html.js";
import { editShoes, getDetails } from "../api/data.js";


export async  function editPage(ctx) {
    const pairId = ctx.params.id;
    const info = await getDetails(pairId)
    console.log(info)
   

    ctx.render(editTemplater(info, editSubmit))

    async function editSubmit(e){
        e.preventDefault();

        const formData = new FormData(e.target);
        const inputs = Object.fromEntries(formData);
        if(Object.values(inputs).some(value => value == '')){
            alert("Invalid entries!");
            return
        }
         
        const {brand, model, imageUrl, release, designer, value} = inputs;
        await editShoes(pairId, {brand, model, imageUrl, release, designer, value});
        ctx.page.redirect(`/details/${pairId}`);

    }
}


function editTemplater(info, editSubmit){
return html`
        <section id="edit">
          <div class="form">
            <h2>Edit item</h2>
            <form @submit = ${editSubmit} class="edit-form">
              <input
                type="text"
                name="brand"
                id="shoe-brand"
                value="${info.brand}"
              />
              <input
                type="text"
                name="model"
                id="shoe-model"
                value="${info.model}"
              />
              <input
                type="text"
                name="imageUrl"
                id="shoe-img"
                value="${info.imageUrl}"
              />
              <input
                type="text"
                name="release"
                id="shoe-release"
                value="${info.release}"
              />
              <input
                type="text"
                name="designer"
                id="shoe-designer"
                value="${info.designer}"
              />
              <input
                type="text"
                name="value"
                id="shoe-value"
                value="${info.value}"
              />

              <button type="submit">post</button>
            </form>
          </div>
        </section>`

}