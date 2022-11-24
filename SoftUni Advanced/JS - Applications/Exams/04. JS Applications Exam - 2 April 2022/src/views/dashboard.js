import { getAllPets } from "../api/data.js"
import {html} from "../../node_modules/lit-html/lit-html.js";


export async function dashboardView(ctx){

    const data = await getAllPets();
   // console.log(data)
    ctx.render(dashTemplater(data))
}

function dashTemplater(data){
    return html`
        <section id="dashboard">
            <h2 class="dashboard-title">Services for every animal</h2>
            <div class="animals-dashboard">
                ${data.length != 0 ?
                    html`${data.map(pet => petTemplater(pet))}` : 
                    html ` 
                    <div>
                        <p class="no-pets">No pets in dashboard</p>
                    </div>`}
            </div>
        </section>`
}

function petTemplater(pet){
    return html `
                <div class="animals-board">
                    <article class="service-img">
                        <img class="animal-image-cover" src="${pet.image}">
                    </article>
                    <h2 class="name">${pet.name}</h2>
                    <h3 class="breed">${pet.breed}</h3>
                    <div class="action">
                        <a class="btn" href="/details/${pet._id}">Details</a>
                    </div>
                </div>`

}