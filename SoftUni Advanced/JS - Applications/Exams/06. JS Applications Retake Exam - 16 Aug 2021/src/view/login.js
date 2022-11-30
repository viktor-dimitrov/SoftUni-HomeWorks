import {html} from "../../node_modules/lit-html/lit-html.js";
import { login } from "../api/user.js";


export function loginView(ctx){


    ctx.render(loginTemplate(onLog))

    async  function onLog (e){
        e.preventDefault();
        const formData = new FormData(e.target);
        const inputs = Object.fromEntries(formData);
        if(Object.values(inputs).some(input => input == '')){
            alert("Invalid entries!");
            return;
        }

        await login(inputs.email, inputs.password);
        
        ctx.updateNav();

        ctx.page.redirect("/");

    }


}

function loginTemplate(onLog){
    return html`
        <section id="login-page" class="auth">
            <form @submit=${onLog} id="login">

                <div class="container">
                    <div class="brand-logo"></div>
                    <h1>Login</h1>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Sokka@gmail.com">

                    <label for="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password">
                    <input type="submit" class="btn submit" value="Login">
                    <p class="field">
                        <span>If you don't have profile click <a href="/register">here</a></span>
                    </p>
                </div>
            </form>
        </section>`
}