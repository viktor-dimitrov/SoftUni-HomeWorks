import { html } from "../../node_modules/lit-html/lit-html.js";
import { register } from "../api/user.js";



export function registerView(ctx) {

    async function onRegister(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        const inputs = Object.fromEntries(formData);
        if(Object.values(inputs).some(input => input == '') || inputs.password != inputs['re-password'] ) {
            alert("Invalid entries!");
            return;
        }
        await register(inputs.email, inputs.password);
        ctx.updateNav();
        ctx.page.redirect("/catalog");
    }

    ctx.render(registerTemplate(onRegister));
}

function registerTemplate(onRegister){
    return html`
      <section id="register">
        <div class="form">
          <h2>Register</h2>
          <form @submit=${onRegister} class="login-form">
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit">register</button>
            <p class="message">Already registered? <a href="/login">Login</a></p>
          </form>
        </div>
      </section>`
}