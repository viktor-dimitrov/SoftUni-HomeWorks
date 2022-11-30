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
import { registerView } from "./view/register.js";

const main = document.getElementById("main-content");
const nav = document.getElementsByTagName("nav")[0];

function ctxDecorator(ctx, next){
    ctx.render = (content) => render(content, main);
    ctx.updateNav = updateNav

    next();
}


page(ctxDecorator);
page("/index.html","/");
page("/", homeView)
page("/login", loginView);
page("/register", registerView);
page("/create", createView);
page("/catalog", catalogView);
page("/details/:id", detailsView);
page("/edit/:id", editView)


updateNav();
page.start();


function updateNav(){

    const user = getUserData();

    const logged = html`
                <a href="/catalog">All games</a>
                <div id="user">
                    <a href="/create">Create Game</a>
                    <a @click=${onLogout} href="javascript:void(0)">Logout</a>
                </div>`

    const guest = html`
                <a href="/catalog">All games</a>
                <div id="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>`

                if (user) {
                    render(logged, nav);
                } else {
                    render(guest, nav);
                }

                function onLogout(){
                    logout();
                    page.redirect("/");
                }

}



