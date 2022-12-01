
import page from "../node_modules/page/page.mjs";
import { html, render} from "../node_modules/lit-html/lit-html.js";
import { loginView } from "./view/login.js";
import { registerView } from "./view/register.js";
import { catalogView } from "./view/catalog.js";
import { getUserData } from "./util.js";
import { logout } from "./api/user.js";
import { detailsView } from "./view/details.js";
import { editView } from "./view/edit.js";
import { createView } from "./view/create.js";
import { myBooksView } from "./view/myBooks.js";

const main = document.getElementById("site-content");
const nav = document.getElementsByTagName('nav')[0];

function ctxDecorator(ctx, next){
    ctx.render = (content) => render(content, main);
    ctx.updateNav = updateNav;
    next()
}

page(ctxDecorator);
page("/index.html","/");
page("/login", loginView);
page("/register", registerView);
page("/catalog", catalogView);
page("/details/:id", detailsView);
page("/edit/:id", editView);
page("/create", createView);
page("/myBooks", myBooksView);

updateNav();
page.start();

function updateNav(){
    const user = getUserData();

    const guest = html`
                    <section class="navbar-dashboard">
                    <a href="/catalog">Dashboard</a>
                        <div id="guest">
                        <a class="button" href="/login">Login</a>
                        <a class="button" href="/register">Register</a>
                    </div>
                    </section>`

    const logged = html`
                    <section class="navbar-dashboard">
                    <a href="/catalog">Dashboard</a>
                        <div id="user">
                        <span>Welcome, ${(user) ? html`${user.email}` : ''}</span>
                        <a class="button" href="/myBooks">My Books</a>
                        <a class="button" href="/create">Add Book</a>
                        <a @click=${onLogout} class="button" href="javascript:void(0)">Logout</a>
                    </div>
                    </section>`;

    if (user){
        render(logged, nav)
    } else {
        render(guest, nav)
    }

async function onLogout(){
   await logout();
   page.redirect("/catalog")

}



}



