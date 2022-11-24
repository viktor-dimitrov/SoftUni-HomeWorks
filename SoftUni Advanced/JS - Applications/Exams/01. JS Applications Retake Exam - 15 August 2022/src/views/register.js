import {html} from "../../node_modules/lit-html/lit-html.js";
import { register } from "../api/user.js";


export function registerPage(ctx) {


    ctx.render(regTemplater(regSubmit));

    async function regSubmit(e){
        e.preventDefault();
    
        const formData = new FormData(e.target);
        const obj = Object.fromEntries(formData);
        
        if (obj.email == '' || obj.password == '' || obj['re-password'] == '' || obj.password != obj['re-password']) {
            alert('Ivalid Entries!');
            return;
        }

        await register(obj.email, obj.password);
        ctx.updateNav()
        ctx.page.redirect("/dashboard");

    }
}



function regTemplater(regSubmit){
return html`
        <section id="register">
          <div class="form">
            <h2>Register</h2>
            <form @submit= ${regSubmit}class="login-form">
              <input
                type="text"
                name="email"
                id="register-email"
                placeholder="email"
              />
              <input
                type="password"
                name="password"
                id="register-password"
                placeholder="password"
              />
              <input
                type="password"
                name="re-password"
                id="repeat-password"
                placeholder="repeat password"
              />
              <button type="submit">login</button>
              <p class="message">Already registered? <a href="/login">Login</a></p>
            </form>
          </div>
        </section>`

}