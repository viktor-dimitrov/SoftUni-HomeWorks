import { html } from "../../node_modules/lit-html/lit-html.js";
import { login } from "../api/user.js";

export function loginPage(ctx) {


    ctx.render(logTemplater(onLog));

    async function onLog(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const { email, password } = Object.fromEntries(formData);
        if (email == '' || password == '') {
            alert("Invalid entries!");
            return;
        }
        await login(email, password);
        ctx.updateNav()
        ctx.page.redirect("/catalog");
    }

}

function logTemplater(onLog) {
    return html`
        <section id="login">
            <div class="form">
                <h2>Login</h2>
                <form @submit=${onLog} class="login-form">
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