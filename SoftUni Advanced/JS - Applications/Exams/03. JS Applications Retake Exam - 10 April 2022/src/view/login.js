import {html} from "../../node_modules/lit-html/lit-html.js";
import { login } from "../api/user.js";


export function loginView(ctx) {


    ctx.render(logTemplater(logSubmit))

    async function logSubmit(e){
        e.preventDefault();
       
        const formData = new FormData(e.target);
        const {email, password} = Object.fromEntries(formData);
        if(email == '', password == ''){
            alert("Invalid entries!");
            return
        }

        await login(email, password);
        
        ctx.page.redirect('/');
       
       

    }



}


function logTemplater(logSubmit) {
    return html`
        <section id="login-page" class="auth">
            <form @submit=${logSubmit} id="login">
                <h1 class="title">Login</h1>

                <article class="input-group">
                    <label for="login-email">Email: </label>
                    <input type="email" id="login-email" name="email">
                </article>

                <article class="input-group">
                    <label for="password">Password: </label>
                    <input type="password" id="password" name="password">
                </article>

                <input type="submit" class="btn submit-btn" value="Log In">
            </form>
        </section>`
}