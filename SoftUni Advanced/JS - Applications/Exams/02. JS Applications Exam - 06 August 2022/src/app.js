

import page from "../node_modules/page/page.mjs";
import { html, render } from "../node_modules/lit-html/lit-html.js";
import { homePage } from "./view/home.js";
import { loginPage } from "./view/login.js";
import { registerPage } from "./view/register.js";
import { catalogPage } from "./view/catalog.js";
import { createPage } from "./view/create.js";
import { getUserData } from "./util.js";
import { logout } from "./api/user.js";
import { detailsPage } from "./view/details.js";
import { editPage } from "./view/edit.js";
import { applyPage } from "./view/apply.js";


const main = document.getElementsByTagName('main')[0];
const nav = document.getElementsByTagName('nav')[0];


page(ctxDecorator);
page("/index.html", "/");
page("/", homePage)
page("/login", loginPage);
page("/register", registerPage);
page("/catalog", catalogPage);
page("/create", createPage);
page("/details/:id", detailsPage);
page("/edit/:id", editPage);
page("/apply/:id", applyPage )

updateNav()
page.start();

function ctxDecorator(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.updateNav = updateNav

    next();
}

function updateNav() {

    const user = getUserData();

    const logged = html`
    <div>
        <a href="/catalog">Dashboard</a>
    </div>
    <div class="user">
        <a href="/create">Create Offer</a>
        <a @click=${onLogout} href="javascript:void(0)">Logout</a>
    </div>`

    const guests = html`
    <div>
        <a href="/catalog">Dashboard</a>
    </div>
    <div class="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>`

    if (user) {
        render(logged, nav)
    } else {
        render(guests, nav)
    }

    async function onLogout(){
        await logout();
        page.redirect('/catalog')
    } 
}