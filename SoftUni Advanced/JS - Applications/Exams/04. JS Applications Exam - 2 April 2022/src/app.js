import { html, render } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs"
import {logout} from "./api/user.js";
import { createView } from "./views/create.js";
import { dashboardView } from "./views/dashboard.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";
import { homeView } from "./views/homeView.js";
import { loginView } from "./views/loginView.js";
import { registerView } from "./views/registerView.js";




const root = document.getElementById("content");
const nav = document.getElementsByTagName('nav')[0];

page(ctxDecorator);
page("/index.html","/");
page("/",homeView );
page("/dashboard", dashboardView);
page("/login", loginView);
page("/register", registerView);
page("/details/:id", detailsView);
page("/create", createView);
page("/edit/:id", editView);

updateNav();

page.start();


function ctxDecorator(ctx, next){
ctx.render = (content)=> render(content, root);
ctx.updateNav = updateNav

next();
}



function updateNav(){

    function onLogout(){
        logout();
        page.redirect("/");
    }

    const links = html`
            <section class="logo">
                <img src="./images/logo.png" alt="logo">
            </section>
            <ul>
                <!--Users and Guest-->
                <li><a href="/">Home</a></li>
                <li><a href="/dashboard">Dashboard</a></li>
               
                ${!sessionStorage.hasOwnProperty('userData') ? 

                html`<li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>` : 
                html`<li><a href="/create">Create Postcard</a></li>
                <li @click = ${onLogout} ><a href="javascript:void(0)">Logout</a></li>`}
            </ul>`
            
            render(links, nav);
}





