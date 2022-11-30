import {html} from "../../node_modules/lit-html/lit-html.js";
import { register } from "../api/user.js";

export function registerPage(ctx) {


    ctx.render(regTemplater(onReg));

    async function onReg(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const ent = Object.fromEntries(formData);
        if (ent['email'] == '' || ent['password'] == '' || ent['re-password'] == '' || ent['password'] != ent['re-password']){
            alert("Invalid entries!");
            return
        }
        const {email, password} = ent;
        await register(email, password);
     
        ctx.page.redirect("/catalog")
    }
}


function regTemplater(onReg){
    return html`
        <section id="register">
          <div class="form">
            <h2>Register</h2>
            <form @submit=${onReg} class="login-form">
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
              <button type="submit">register</button>
              <p class="message">Already registered? <a href="/login">Login</a></p>
            </form>
          </div>
        </section>`
}