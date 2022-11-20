import {html} from "../../node_modules/lit-html/lit-html.js";
import { deleter, details } from "../api/data.js"; 


export async function detailsView(ctx){
    let userId = '0';

    if(sessionStorage.getItem('user')) {
        userId = JSON.parse(sessionStorage.getItem('user'))['_id'];
    }

   const id = ctx.params.id;
   const dataObject = await details(id);
  
   const view = detailsTemplator(dataObject, userId, id, onDelete );
  
   ctx.render(view);



    function onDelete(e) {
        e.preventDefault();

        deleter(id);
        ctx.page.redirect('/');

    }

    
}

function detailsTemplator(obj, userId, id, handler) {
   
    return html `
    
    <div class="row space-top">
            <div class="col-md-12">
                <h1>Furniture Details</h1>
            </div>
        </div>
        <div data-id=${obj._ownerId} class="row space-top">
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                        <img src="..${obj.img}" />
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <p>Make: <span>${obj.make}</span></p>
                <p>Model: <span>${obj.model}</span></p>
                <p>Year: <span>${obj.year}</span></p>
                <p>Description: <span>${obj.description}</span></p>
                <p>Price: <span>${obj.price}</span></p>
                <p>Material: <span>${obj.material}</span></p>
                ${obj._ownerId == userId ? html`  <div  >
                    <a href= "/edit/${id}" class="btn btn-info">Edit</a>
                    <a @click = ${handler} href="#" class="btn btn-red">Delete</a>
                </div>` : ''} 
              
            </div>
        </div>`
}

