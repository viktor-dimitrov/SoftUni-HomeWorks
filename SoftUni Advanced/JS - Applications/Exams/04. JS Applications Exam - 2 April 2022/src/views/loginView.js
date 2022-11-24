import {html} from "../../node_modules/lit-html/lit-html.js"
import { login } from "../api/user.js";

export function loginView(ctx) {
ctx.render(logTemplater(logSubmit))


async function logSubmit(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    const {email, password} = Object.fromEntries(formData);

    if (email == '' || password == ''){
        alert('Invalid entries!')
        return
    }

    await login(email, password);
    ctx.updateNav();
    ctx.page.redirect("/");

   
}


}

function logTemplater(logSubmit){
    return html`
        <section id="loginPage">
            <form @submit = ${logSubmit} class="loginForm">
                <img src="./images/logo.png" alt="logo" />
                <h2>Login</h2>

                <div>
                    <label for="email">Email:</label>
                    <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
                </div>

                <div>
                    <label for="password">Password:</label>
                    <input id="password" name="password" type="password" placeholder="********" value="">
                </div>

                <button class="btn" type="submit">Login</button>

                <p class="field">
                    <span>If you don't have profile click <a href="/register">here</a></span>
                </p>
            </form>
        </section>`
}

