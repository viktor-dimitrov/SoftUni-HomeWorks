

import {html, render} from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";
import { logout } from "./api/user.js";
import { getUserData } from "./util.js";
import { catalogView } from "./view/catalog.js";
import { createView } from "./view/create.js";
import { detailsView } from "./view/details.js";
import { editView } from "./view/edit.js";
import { homeView } from "./view/home.js";
import { loginView } from "./view/login.js";
import { profilView } from "./view/profil.js";
import { registerView } from "./view/register.js";

const main = document.getElementsByTagName('main')[0];
const nav = document.getElementsByTagName('nav')[0];

page(ctxDecorator)
page("/index.html", "/");
page("/", homeView);
page("/login", loginView);
page("/register", registerView);
page("/catalog", catalogView);
page("/profil", profilView);
page("/create", createView);
page("/details/:id", detailsView);
page("/edit/:id", editView);

updateNav();
page.start();

function ctxDecorator(ctx, next){
    ctx.render = (content) => render(content, main)
    ctx.updateNav = updateNav;
    next()
}

function updateNav(){
const user = getUserData();

let logged = null;

if (user){
    logged = html`
    <div class="user">
    <a href="/catalog">All Memes</a>
        <a href="/create">Create Meme</a>
        <div class="profile">
            <span>Welcome, ${user.email}</span>
            <a href="/profil">My Profile</a>
            <a @click=${onLogout} href="javascript:void(0)">Logout</a>
        </div>
    </div>`
}



    const guest = html`
            <div class="guest">
            <a href="/catalog">All Memes</a>
                <div class="profile">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
                <a class="active" href="/">Home Page</a>
            </div>`

    if(user){
        render(logged, nav)
    } else {
        render(guest, nav)
    }

    async function onLogout(){
         logout();
         page.redirect("/");
    }

}