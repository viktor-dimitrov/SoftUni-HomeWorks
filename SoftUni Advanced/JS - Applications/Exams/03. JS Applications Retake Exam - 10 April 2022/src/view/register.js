import {html} from "../../node_modules/lit-html/lit-html.js";
import { register } from "../api/user.js";


export function registerView(ctx) {
    ctx.render(regTemplater(regSubmit))

    async function regSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const inputs = Object.fromEntries(formData);
        if (Object.values(inputs).some(x => x == '')) {
            alert("Invalid entries!");
            return
        }
        const {email, password} = inputs;
        await register(email, password);
        
        ctx.page.redirect('/');
  


    }
}

function regTemplater(regSubmit) {
    return html`        <section id="register-page" class="auth">
    <form @submit=${regSubmit}  id="register">
        <h1 class="title">Register</h1>

        <article class="input-group">
            <label for="register-email">Email: </label>
            <input type="email" id="register-email" name="email">
        </article>

        <article class="input-group">
            <label for="register-password">Password: </label>
            <input type="password" id="register-password" name="password">
        </article>

        <article class="input-group">
            <label for="repeat-password">Repeat Password: </label>
            <input type="password" id="repeat-password" name="repeatPassword">
        </article>

        <input type="submit" class="btn submit-btn" value="Register">
    </form>
</section>`
}