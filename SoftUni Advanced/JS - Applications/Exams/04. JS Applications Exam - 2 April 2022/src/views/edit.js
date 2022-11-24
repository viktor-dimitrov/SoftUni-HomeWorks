import { editPet, getDetails } from "../api/data.js";
import{html} from "../../node_modules/lit-html/lit-html.js";

 export async function editView(ctx){
    const id = ctx.params.id;
    const petInfo = await getDetails(id);
    ctx.render(editTemplater(petInfo, onEdit));

    function onEdit(e){
        e.preventDefault();
        const form = document.getElementsByTagName('form')[0];
        const formData = new FormData(form);
        const body = Object.fromEntries(formData);

        editPet(id, body)
        ctx.page.redirect(`/details/${id}`);
    }

}

function editTemplater(pet, onEdit){
    return html`
        <section id="editPage">
            <form @submit= ${onEdit} class="editForm">
                <img src="${pet.image}">
                <div>
                    <h2>Edit PetPal</h2>
                    <div class="name">
                        <label for="name">Name:</label>
                        <input name="name" id="name" type="text" value="${pet.name}">
                    </div>
                    <div class="breed">
                        <label for="breed">Breed:</label>
                        <input name="breed" id="breed" type="text" value="${pet.breed}">
                    </div>
                    <div class="Age">
                        <label for="age">Age:</label>
                        <input name="age" id="age" type="text" value="${pet.age}">
                    </div>
                    <div class="weight">
                        <label for="weight">Weight:</label>
                        <input name="weight" id="weight" type="text" value="${pet.weight}">
                    </div>
                    <div class="image">
                        <label for="image">Image:</label>
                        <input name="image" id="image" type="text" value="${pet.image}">
                    </div>
                    <button class="btn" type="submit">Edit Pet</button>
                </div>
            </form>
        </section>`
}