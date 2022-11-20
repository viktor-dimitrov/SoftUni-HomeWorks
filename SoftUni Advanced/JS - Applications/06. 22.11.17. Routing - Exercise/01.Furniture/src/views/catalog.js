import { html } from "../../node_modules/lit-html/lit-html.js"
import { getAllItems } from "../api/data.js"



export async function catalogView (ctx){
   
    const arrayOfObjects = await getAllItems();
    const items = Object.values(arrayOfObjects).map(el => itemsTemplator(el));
  
    const view = html`
    
    <div class="row space-top">
            <div class="col-md-12">
                <h1>Welcome to Furniture System</h1>
                <p>Select furniture from the catalog to view details.</p>
            </div>
    </div>
    <div class="row space-top">
             ${items}
    </div>
        `
    ctx.render(view)
}

export function itemsTemplator(obj){
    return html`
                <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                            <img src="${obj.img}" />
                            <p>${obj.description}</p>
                            <footer>
                                <p>Price: <span>${obj.price} $</span></p>
                            </footer>
                            <div>
                                <a href="/details/${obj._id}" class="btn btn-info">Details</a>
                            </div>
                    </div>
                </div>
            </div>
    `
}