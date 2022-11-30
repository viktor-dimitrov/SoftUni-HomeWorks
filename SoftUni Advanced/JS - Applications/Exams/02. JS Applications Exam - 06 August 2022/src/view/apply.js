import {html} from "../../node_modules/lit-html/lit-html.js";
import { postApply } from "../api/applications.js";
import { getItemById } from "../api/data.js";


export async function applyPage(ctx) {
    const id = ctx.params.id;
    await postApply(id);
    ctx.page.redirect(`/details/${id}`);
}