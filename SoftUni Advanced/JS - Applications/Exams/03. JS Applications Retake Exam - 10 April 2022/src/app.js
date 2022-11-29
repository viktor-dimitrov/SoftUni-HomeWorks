import page from "../node_modules/page/page.mjs";
import {html, render} from "../node_modules/lit-html/lit-html.js";
import { catalogView } from "./view/catalog.js";
import { loginView } from "./view/login.js";
import { registerView } from "./view/register.js";
import { createView } from "./view/create.js";
import { myPostsView } from "./view/myPosts.js";
import { getUserData } from "./util.js";
import { logout } from "./api/user.js";
import { detailsView, onDelete, onDonate } from "./view/details.js";
import { editView } from "./view/edit.js";




const main = document.getElementById("main-content");
const nav = document.getElementsByTagName('nav')[0];

page(ctxDecorator);
page("/index.html", "/");
page("/", catalogView);
page("/login", loginView);
page("/register", registerView);
page("/create", createView);
page("/posts", myPostsView);
page("/details/:id", detailsView);
page("/edit/:id", editView);
page("/delete/:id", onDelete)
page("/donate/:id", onDonate)




updateNav();
page.start();




function ctxDecorator(ctx, next) {
ctx.render = (content) => render(content, main)
ctx.updateNav = updateNav;
    next()
}

function updateNav(){

    const user = getUserData();

const logged = html `
                <a href="/">Dashboard</a>

<!-- Logged-in users -->
<div id="user">
    <a href="/posts">My Posts</a>
    <a href="/create">Create Post</a>
    <a @click=${onLogout} href="#">Logout</a>
</div>`

const guest = html `
                <a href="/">Dashboard</a>
                <div id="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>`;

if(user){
     render(logged, nav);
 } else {
    render(guest, nav);
 }


async function onLogout(e){
    e.preventDefault()
    await logout();
    page.redirect('/');
 }

}