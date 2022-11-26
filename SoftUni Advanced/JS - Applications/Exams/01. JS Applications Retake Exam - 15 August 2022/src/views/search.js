import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { searchShoes } from "../api/data.js";
import { getUserData } from "../util.js";


export async function searchPage(ctx) {


    ctx.render(searchTemplater(searchSubmit));

    async function searchSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const input = Object.fromEntries(formData);
        const query = input.search;
        const data = await searchShoes(query);
        const user = await getUserData();
        resultTemplater(data, user);
    }
}

function searchTemplater(searchSubmit) {
    return html`
        <section id="search">
            <h2>Search by Brand</h2>
        
            <form @submit=${searchSubmit} class="search-wrapper cf">
                <input id="#search-input" type="text" name="search" placeholder="Search here..." required />
                <button type="submit">Search</button>
            </form>
        
            <h3>Results:</h3>
        
            <div id="search-container"></div>
        
            </div>
        
        
        </section>`
}

function resultTemplater(data, user) {
    const container = document.getElementById("search-container");
    const noResults = html`<h2>There are no results found.</h2>`;
    const hasResults = html`
            <ul class="card-wrapper">
                ${data.map(el => el = cardsTemplater(el, user))}
            </ul>`

    if (data.length == 0) {
        render(noResults, container);
    } else {
        render(hasResults, container);
    }

}

function cardsTemplater(obj, user) {

    return html`
            <li class="card">
                <img src=${obj.imageUrl} alt="travis" />
                <p>
                    <strong>Brand: </strong><span class="brand">${obj.brand}</span>
                </p>
                <p>
                    <strong>Model: </strong><span class="model">${obj.model}</span>
                </p>
                <p><strong>Value:</strong><span class="value">${obj.value}</span>$</p>;
            
                ${(user) ? html`<a class="details-btn" href="/details/${obj._id}">Details</a>` : ''}
            
            </li>`
}