
import page from "../node_modules/page/page.mjs"
import { html, render } from "../node_modules/lit-html/lit-html.js";
import { addPairPage } from "./views/addPair.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { dashboardPage } from "./views/dashboard.js";
import { searchPage } from "./views/search.js";
import { getUserData } from "./util.js";
import { logout } from "./api/user.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";



const main = document.getElementsByTagName('main')[0];
const nav = document.getElementsByTagName('nav')[0];


page(ctxDecorator)
page("/index.html","/")
page("/", homePage);
page("/login", loginPage);
page("/register", registerPage);
page("/dashboard", dashboardPage);
page("/addPair", addPairPage);
page("/search", searchPage);
page("/details/:id", detailsPage);
page("/edit/:id", editPage)

updateNav();
page.start();


function ctxDecorator(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.updateNav = updateNav;

    next();
}


function updateNav() {

    const user = getUserData();

    const links = html`
        <div>
            <a href="/dashboard">Dashboard</a>
            <a href="/search">Search</a>
        </div>
        ${(user) ? html`
        <div class="user">
            <a href="/addPair">Add Pair</a>
            <a @click=${onLogout} href="javascript:void(0)">Logout</a>
        </div>` : html`
        <div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        </div>`}
`

    async function onLogout() {
        await logout();
        page.redirect("/dashboard");
    }

    render(links, nav);

}
