import {html} from "../../node_modules/lit-html/lit-html.js";
import { register } from "../api/user.js";


export function registerView(ctx){


    ctx.render(registerTemplate(onReg))

    async function onReg(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        const inputs = Object.fromEntries(formData);
        console.log(inputs)
        if(Object.values(inputs).some(input => input == '') || inputs.password != inputs['confirm-password']){
            alert("Invalid entries!");
            return;
        }

        await register(inputs.email, inputs.password);
        ctx.updateNav()

        ctx.page.redirect("/")

    }


}

function registerTemplate(onReg){
    return html`
        <section id="register-page" class="content auth">
            <form @submit=${onReg} id="register">
                <div class="container">
                    <div class="brand-logo"></div>
                    <h1>Register</h1>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="maria@email.com">

                    <label for="pass">Password:</label>
                    <input type="password" name="password" id="register-password">

                    <label for="con-pass">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password">

                    <input class="btn submit" type="submit" value="Register">

                    <p class="field">
                        <span>If you already have profile click <a href="/login">here</a></span>
                    </p>
                </div>
            </form>
        </section>`
}