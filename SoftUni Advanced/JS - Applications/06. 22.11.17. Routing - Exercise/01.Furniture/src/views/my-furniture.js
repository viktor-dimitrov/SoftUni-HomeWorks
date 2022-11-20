import {html, render } from "../../node_modules/lit-html/lit-html.js";
import { myItems } from "../api/data.js";
import { itemsTemplator } from "./catalog.js";


export async function myFuritureView(ctx){

    const userId = JSON.parse(sessionStorage.getItem('user'))['_id'];

    const arrayOfObjects = await myItems(userId);
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

