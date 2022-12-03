import page from "../node_modules/page/page.mjs";
import {html, render} from "../node_modules/lit-html/lit-html.js";
import { homeView } from "./view/home.js";
import { loginView } from "./view/login.js";
import { registerView } from "./view/register.js";
import { catalogView } from "./view/catalog.js";
import { createView } from "./view/create.js";
import { detailsView } from "./view/details.js";
import { editView } from "./view/edit.js";
import { getUserData } from "./util.js";
import { logout } from "./api/user.js";


const main = document.getElementsByTagName('main')[0];
const nav = document.getElementsByTagName('nav')[0];

function ctxDecrator (ctx, next){
    ctx.render = (content) => render(content, main)
    ctx.updateNav = updateNav;
    next();
}

page(ctxDecrator);
page("/index.html", "/");
page("/", homeView);
page("/login", loginView);
page("/register", registerView);
page("/catalog", catalogView);
page("/create", createView);
page("/details/:id", detailsView);
page("/edit/:id", editView);

updateNav();
page.start();


function updateNav(){
    const user = getUserData();

    const logged = html`
        <div>
            <a href="/catalog">Dashboard</a>
        </div>
        <div class="user">
            <a href="/create">Add Album</a>
            <a @click=${onLogout} href="javascript:void(0)">Logout</a>
        </div>`;

        const guest = html`
            <div>
                 <a href="/catalog">Dashboard</a>
            </div>
            <div class="guest">
                <a href="/login">Login</a>
                <a href="/register">Register</a>
            </div>`

if (user){
    render(logged, nav)
} else {
    render(guest, nav)
}

async function onLogout(e){
    await logout();
    page.redirect("/catalog");
}

}


