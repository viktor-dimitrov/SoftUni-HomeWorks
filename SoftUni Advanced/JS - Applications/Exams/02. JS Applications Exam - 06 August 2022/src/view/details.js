import { getCount, myApply } from "../api/applications.js";
import {html} from "../../node_modules/lit-html/lit-html.js";
import { deleteItem, getItemById } from "../api/data.js";
import { getUserData } from "../util.js";



export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const info = await getItemById(id);
    const user = getUserData(); 
    
    const counter = await getCount(id);
  
   
    let hasApply = false;
    let userId ='guest';

    if(user){
        userId = user._id;
        const apply = await myApply(id, userId);
        hasApply = !!apply;
    }
   



    ctx.render(detailsTemplater(info, onDelete, userId, counter, hasApply));

    async function onDelete(){
       await deleteItem(id);
       ctx.page.redirect('/catalog')
    }



}


function detailsTemplater(info, onDelete, userId, counter, hasApply){

    const buttons = html`
              <a href="/edit/${info._id}" id="edit-btn">Edit</a>
              <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>`

    return html`
        <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${info.imageUrl} alt="example1" />
            <p id="details-title">${info.title}</p>
            <p id="details-category">
              Category: <span id="categories">${info.category}</span>
            </p>
            <p id="details-salary">
              Salary: <span id="salary-number">${info.salary}</span>
            </p>
            <div id="info-wrapper">
              <div id="details-description">
                <h4>Description</h4>
                <span>${info.description}</span> 
              </div>
              <div id="details-requirements">
                <h4>Requirements</h4>
                <span>${info.requirements}</span>
              </div>
            </div>
            <p>Applications: <strong id="applications">${counter}</strong></p>

            <!--Edit and Delete are only for creator-->
            <div id="action-buttons">

            ${(userId == info._ownerId) ? html `${buttons}` : ''}

            ${(userId != 'guest' && userId != info._ownerId && hasApply != true) ? html`<a href="/apply/${info._id}" id="apply-btn">Apply</a>` : ''}

            </div>
          </div>
        </section>`
}