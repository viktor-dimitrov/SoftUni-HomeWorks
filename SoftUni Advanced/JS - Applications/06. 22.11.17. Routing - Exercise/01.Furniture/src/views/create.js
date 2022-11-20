import{html} from "../../node_modules/lit-html/lit-html.js";
import { createItems } from "../api/data.js";

let context = null;

export async function createView(ctx){
    context = ctx;
   const view = createTemplator(onSubmit);
   ctx.render(view)
}

 async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const entries = Object.fromEntries(formData);
    validation(entries);
    const isValid = document.getElementsByClassName('is-invalid').length;

    if (isValid == 0) {
        await createItems(entries)
        context.page.redirect("/");
    }
    

}

export function validation(obj) {
    const inputs = document.getElementsByTagName('input');

    obj.make.length < 4 ? inputs[0].classList = "form-control is-invalid" : inputs[0].classList = "form-control is-valid";
    obj.model.length < 4 ? inputs[1].classList = "form-control is-invalid" : inputs[1].classList = "form-control is-valid";   
    Number(obj.year) < 1950 || Number(obj.year) > 2050 ? inputs[2].classList = "form-control is-invalid" : inputs[2].classList = "form-control is-valid";
    obj.description.length < 10 ? inputs[3].classList = "form-control is-invalid" : inputs[3].classList = "form-control is-valid";
    Number(obj.price) <= 0 ? inputs[4].classList = "form-control is-invalid" : inputs[4].classList = "form-control is-valid";
    obj.img == ''  ? inputs[5].classList = "form-control is-invalid" : inputs[5].classList = "form-control is-valid";

}

function createTemplator(handler){
return html`
 <div class="row space-top">
            <div class="col-md-12">
                <h1>Create New Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${handler}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control " id="new-make" type="text" name="make">
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control " id="new-model" type="text" name="model">
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control" id="new-year" type="number" name="year">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class="form-control" id="new-description" type="text" name="description">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class="form-control" id="new-price" type="number" name="price">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class="form-control" id="new-image" type="text" name="img">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Create" />
                </div>
            </div>
        </form>
`

}