import {html} from "../../node_modules/lit-html/lit-html.js"
import { details, update } from "../api/data.js";
import {validation} from "./create.js";



export async function editView(ctx){
    const id = ctx.params.id;
    const info = await details(id);
    console.log(info)
    const view = editTemplater(info, onEdit)
    ctx.render(view);


    async function onEdit(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        const entries = Object.fromEntries(formData);
        validation(entries);
        const isValid = document.getElementsByClassName('is-invalid').length;
        
        if (isValid == 0) {
            await update(entries, id)
            ctx.page.redirect("/");
        }
        
        }

   
}




function editTemplater(obj, handler){
    return html`
     <div class="row space-top">
            <div class="col-md-12">
                <h1>Edit Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${handler}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control" id="new-make" type="text" name="make" value="${obj.make}">
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control" id="new-model" type="text" name="model" value="${obj.model}">
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control" id="new-year" type="number" name="year" value="${obj.year}">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class="form-control" id="new-description" type="text" name="description" value="${obj.description}">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class="form-control" id="new-price" type="number" name="price" value="${obj.price}">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class="form-control" id="new-image" type="text" name="img" value="${obj.img}">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material" value="${obj.material}">
                    </div>
                    <input type="submit" class="btn btn-info" value="Edit" />
                </div>
            </div>
        </form>
    `
}