import { html } from "../../node_modules/lit-html/lit-html.js";
import { deleteItem, getItemById } from "../api/data.js";
import { getAllLikes, likeIt, myLike } from "../api/likes.js";
import { getUserData } from "../util.js";

export async function detailsView(ctx) {

    const albumId = ctx.params.id;
    const user = getUserData();
    const requests =  [getItemById(albumId), getAllLikes(albumId)];
    if(user){
        requests.push(myLike(albumId, user._id));
    }
    const [album, count, hasLike] = await Promise.all(requests);

    async function onDelete(){
        const choice = confirm("If you click [OK] this album will be deleted !!!");
        if(choice){
           await deleteItem(albumId);
           ctx.page.redirect("/catalog");
        }
    }

    async function onLike(){
        await likeIt({albumId});
        ctx.page.redirect(`/details/${albumId}`);
    }

    ctx.render(detailsTemplate(user, album, onDelete, onLike, count, hasLike));
}

function detailsTemplate(user, album, onDelete, onLike, count, hasLike){
    return html`
      <section id="details">
        <div id="details-wrapper">
          <p id="details-title">Album Details</p>
          <div id="img-wrapper">
            <img src=${album.imageUrl} alt="example1" />
          </div>
          <div id="info-wrapper">
            <p><strong>Band:</strong><span id="details-singer">${album.singer}</span></p>
            <p>
              <strong>Album name:</strong><span id="details-album">${album.album}</span>
            </p>
            <p><strong>Release date:</strong><span id="details-release">${album.release}</span></p>
            <p><strong>Label:</strong><span id="details-label">${album.label}</span></p>
            <p><strong>Sales:</strong><span id="details-sales">${album.sales}</span></p>
          </div>
          <div id="likes">Likes: <span id="likes-count">${count}</span></div>

          <div id="action-buttons">

            ${(user && user._id != album._ownerId && hasLike == 0) ? html`
            <a @click=${onLike} href="javascript:void(0)" id="like-btn">Like</a>` : ''}
            
            ${(user && user._id == album._ownerId) ? html`
            <a href="/edit/${album._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>` : ''}

          </div>
        </div>
      </section>`
}