import { html } from "../../node_modules/lit-html/lit-html.js";
import { login } from "../api/user.js";



export function loginView(ctx) {

    async function onLogin(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        const inputs = Object.fromEntries(formData);
        if(Object.values(inputs).some(input => input == '')) {
            alert("Invalid entries!");
            return;
        }
        await login(inputs.email, inputs.password);
        ctx.updateNav()
        ctx.page.redirect("/catalog");
    }


    ctx.render(loginTemplate(onLogin));
}


function loginTemplate(onLogin){
    return html`
      <section id="login">
        <div class="form">
          <h2>Login</h2>
          <form @submit=${onLogin} class="login-form">
            <input type="text" name="email" id="email" placeholder="email" />
            <input type="password" name="password" id="password" placeholder="password" />
            <button type="submit">login</button>
            <p class="message">
              Not registered? <a href="/register">Create an account</a>
            </p>
          </form>
        </div>
      </section>`
}