import { deletePet, getDetails } from "../api/data.js";
import {html,} from "../../node_modules/lit-html/lit-html.js";
import { getUserData } from "../util.js";
import { donate, getDonationsCount, ownDonate } from "../api/donations.js";


export async function detailsView(ctx) {
    const petId = ctx.params.id;
    const userData = getUserData();

    const data = await getDetails(petId);
    const allDonations = await getDonationsCount(petId);
    const haveDonate = await ownDonate(petId, userData._id);
    const money = allDonations * 100;


    ctx.render(detTemplater(data, onDelete, userData, money, haveDonate, onDonate));

    async function onDonate(e){
        e.preventDefault();
        donate(petId);
        ctx.page.redirect(`/details/${petId}`);
    } 



    async function onDelete(e){
        e.preventDefault();
        const choice = confirm('Are you sure you want to DELETE this pet ???')
        if(choice){
            await deletePet(petId);
            ctx.page.redirect('/');
        }
    }


}

function detTemplater(pet, onDelete, userData, money, haveDonate, onDonate){

    return html `
        <section id="detailsPage">
            <div class="details">
                <div class="animalPic">
                    <img src="${pet.image}">
                </div>
                <div>
                    <div class="animalInfo">
                        <h1>Name: ${pet.name}</h1>
                        <h3>Breed: ${pet.breed}</h3>
                        <h4>Age: ${pet.age}</h4>
                        <h4>Weight: ${pet.weight}</h4>
                        <h4 class="donation">Donation: ${money}$</h4>
                    </div>
                    <!-- if there is no registered user, do not display div-->
                    ${(!!userData && userData._id == pet._ownerId) ? html`
                    <div class="actionBtn">
                        <a  href="/edit/${pet._id}" class="edit">Edit</a>
                        <a @click= ${onDelete} href="#" class="remove">Delete</a>
                    </div>` : ''} 

                    ${(!!haveDonate == false && userData._id != pet._ownerId) ? html`
                    <div class="actionBtn">
                        <a @click= ${onDonate} href="javascript:void(0)" class="donate">Donate</a>
                    </div> ` : ''} 
                   
                    
                
                </div>
            </div>
        </section>`
    
}