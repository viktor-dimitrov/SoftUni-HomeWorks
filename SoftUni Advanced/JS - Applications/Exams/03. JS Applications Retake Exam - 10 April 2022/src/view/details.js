

import{html} from "../../node_modules/lit-html/lit-html.js";
import { deleteItem, getAllDonations, getItemById, makeDonate, myDonation} from "../api/data.js";
import { getUserData } from "../util.js";


export async function detailsView(ctx){
    const id = ctx.params.id;
  
    const user = getUserData();
    const requests = [getItemById(id), getAllDonations(id)];
    if (user){
        requests.push(myDonation(id, user._id))
    }

    const [item, count, canDonate] = await Promise.all(requests);

    console.log(count)



ctx.render(detailsTemplater(item, user, count, canDonate));



}


function detailsTemplater(obj, user, count, canDonate){

 


    return html`
        <section id="details-page">
            <h1 class="title">Post Details</h1>

            <div id="container">
                <div id="details">
                    <div class="image-wrapper">
                        <img src=${obj.imageUrl} alt="Material Image" class="post-image">
                    </div>
                    <div class="info">
                        <h2 class="title post-title">${obj.title}</h2>
                        <p class="post-description">Description: ${obj.description}</p>
                        <p class="post-address">Address: ${obj.address}</p>
                        <p class="post-number">Phone number: ${obj.phone}</p>
                        <p class="donate-Item">Donate Materials: ${count}</p>

                        <div class="btns">
                            ${(user && user._id == obj._ownerId) ? html`
                            <a href="/edit/${obj._id}" class="edit-btn btn">Edit</a>
                            <a href="/delete/${obj._id}" class="delete-btn btn">Delete</a>` : ''}

                            ${(user && user._id != obj._ownerId && canDonate == 0 ) ? html`
                            <a  href="/donate/${obj._id}" class="donate-btn btn">Donate</a>` : ''}

                        </div>

                    </div>
                </div>
            </div>
        </section>`
}

export async function onDelete(ctx){
    const id = ctx.params.id;

    const choice = confirm("Are you sure you want to delete this post?");

    if(choice) {
        await deleteItem(id);
        ctx.page.redirect("/")
    }

  
}

 export async function onDonate(ctx){
    const id = ctx.params.id
    await makeDonate(id);
    ctx.page.redirect(`/details/${id}`)
}