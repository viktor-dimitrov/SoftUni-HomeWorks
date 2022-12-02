import { clearUserData, setUserData } from "../util.js";
import { get, post } from "./api.js";



const endpoints = {
    "login": "/users/login",
    "register": "/users/register",
    "logout":"/users/logout"

}



export async function login(inputs) {
    const {_id, email: resultEmail, accessToken, imageUrl, username, gender} = await post(endpoints.login, inputs );

    setUserData({
        _id,
        email: resultEmail,
        accessToken,
        imageUrl,
        username,
        gender
    });
}

export async function register(inputs) {
    const user = await post(endpoints.register, inputs );

    setUserData(user);
}

export async function logout(){
    get(endpoints.logout);
    clearUserData();

}
