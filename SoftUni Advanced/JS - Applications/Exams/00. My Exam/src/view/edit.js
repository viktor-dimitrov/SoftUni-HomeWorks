import { html } from "../../node_modules/lit-html/lit-html.js";
import { editItem, getItemById } from "../api/data.js";



export async function editView(ctx) {
    const albumId = ctx.params.id;
    const album = await getItemById(albumId);

    async function onEdit(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        const inputs = Object.fromEntries(formData);
        if(Object.values(inputs).some(input => input == '')){
          alert("Invalid entries!");
          return;
        }
        await editItem(albumId, inputs);
        ctx.page.redirect(`/details/${albumId}`)
    }


    ctx.render(editTemplate(album, onEdit));
}

function editTemplate(album, onEdit){
    return html`
      <section id="edit">
        <div class="form">
          <h2>Edit Album</h2>
          <form @submit=${onEdit} class="edit-form">
            <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" .value=${album.singer} />
            <input type="text" name="album" id="album-album" placeholder="Album" .value=${album.album} />
            <input type="text" name="imageUrl" id="album-img" placeholder="Image url" .value=${album.imageUrl} />
            <input type="text" name="release" id="album-release" placeholder="Release date" .value=${album.release} />
            <input type="text" name="label" id="album-label" placeholder="Label" .value=${album.label}/>
            <input type="text" name="sales" id="album-sales" placeholder="Sales" .value=${album.sales}/>

            <button type="submit">post</button>
          </form>
        </div>
      </section>`
}