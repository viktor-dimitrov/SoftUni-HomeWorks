import {html} from "../../node_modules/lit-html/lit-html.js";
import { register } from "../api/user.js";


export function registerView(ctx){

    ctx.render(registerTemplate(onReg))

    async function onReg(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        const inputs = Object.fromEntries(formData);
        if(Object.values(inputs).some(input => input == '') || inputs.password != inputs['confirm-pass']){
            alert("Invalid entries!");
            return;
        }

        await register(inputs.email, inputs.password);
        ctx.updateNav();

        ctx.page.redirect("/catalog");

    }


}

function registerTemplate(onReg) {
  return html`
        <section id="register-page" class="register">
            <form @submit=${onReg} id="register-form" action="" method="">
                <fieldset>
                    <legend>Register Form</legend>
                    <p class="field">
                        <label for="email">Email</label>
                        <span class="input">
                            <input type="text" name="email" id="email" placeholder="Email">
                        </span>
                    </p>
                    <p class="field">
                        <label for="password">Password</label>
                        <span class="input">
                            <input type="password" name="password" id="password" placeholder="Password">
                        </span>
                    </p>
                    <p class="field">
                        <label for="repeat-pass">Repeat Password</label>
                        <span class="input">
                            <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Register">
                </fieldset>
            </form>
        </section>`

}