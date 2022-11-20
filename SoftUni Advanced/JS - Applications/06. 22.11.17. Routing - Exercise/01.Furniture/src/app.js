import {html, render} from "../node_modules/lit-html/lit-html.js"
import page from "../node_modules/page/page.mjs"
import { logout } from "./api/data.js";
import {catalogView} from "./views/catalog.js"
import { createView } from "./views/create.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";
import { loginView } from "./views/login.js";
import { myFuritureView } from "./views/my-furniture.js";
import { registerView } from "./views/registe.js";






const root = document.querySelector(".container")
const navBar = document.getElementsByTagName('nav')[0];

async function onLogout(){
    await logout();
    page.redirect('/');
    updateNav();
}

function updateNav(){
    const sessionStore = sessionStorage.getItem('user');

const userNav = html`
            <a id="catalogLink" href="/" class="">Dashboard</a>
            <div id="user">
                <a id="createLink" href="/create" >Create Furniture</a>
                <a id="profileLink" href="/my-furniture" >My Publications</a>
                <a @click=${onLogout} id="logoutBtn" href="javascript:void(0)">Logout</a>
            </div>`

const guestNav = html `
<a id="catalogLink" href="/" class="">Dashboard</a>
    <div id="guest">
                <a id="loginLink" href="/login">Login</a>
                <a id="registerLink" href="/register">Register</a>
            </div>
`

    if (sessionStore){
        render(userNav, navBar)
    } else {
        render(guestNav, navBar)
    }

}




function decorateContext(ctx, next){
    ctx.render = (content) => render(content, root);
  
    ctx.updateNav = () => updateNav();
   
      next()  
}


page(decorateContext);
page("index.html", "/")
page("/", catalogView);
page("/create", createView);

page("/details/:id", detailsView);
page("/details/*", catalogView);

page("/edit/:id", editView);
page("/edit/*", catalogView);
page("/login", loginView);
page("/my-furniture", myFuritureView);
page("/register", registerView);
//page("*", catalogView)
//page("/logout", await logout());

page.start();
updateNav();

