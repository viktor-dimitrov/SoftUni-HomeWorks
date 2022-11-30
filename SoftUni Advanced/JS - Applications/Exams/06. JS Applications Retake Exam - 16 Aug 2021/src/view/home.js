import { html } from "../../node_modules/lit-html/lit-html.js";
import { getLatestItems } from "../api/data.js";


export async function homeView(ctx) {
    ctx.updateNav();

    const items = await getLatestItems();
    console.log(items)

    ctx.render(homeTemplate(items))
}

function homeTemplate(items) {
    return html`
        <section id="welcome-world">
        
            <div class="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero">
        
            <div id="home-page">
                <h1>Latest Games</h1>
        
                ${(items.length > 0) ? html`${items.map(obj => obj = homeCardTemplate(obj))}` : html`<p class="no-articles">No
                    games yet</p>`}
        
            </div>
        </section>`
}

function homeCardTemplate(obj) {
    return html`
    <div class="game">
        <div class="image-wrap">
            <img src=${obj.imageUrl}>
        </div>
        <h3>${obj.title}</h3>
        <div class="rating">
            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
        </div>
        <div class="data-buttons">
            <a href="/details/${obj._id}" class="btn details-btn">Details</a>
        </div>
    </div>`
}
