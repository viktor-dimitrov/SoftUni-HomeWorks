import * as api from "./api.js";

const endpoints = {
    "register": "/users/register",
    "login": "/users/login",
    "logout": "/users/logout",
    "createItem": "/data/catalog",
    "getAllItems": "/data/catalog",
    "details": "/data/catalog/",
    "update": "/data/catalog/",
    "delete": "/data/catalog/",
    "myItems": "/data/catalog?where=_ownerId%3D%22"
}



export async function register(email, password){
    const response = await api.post(endpoints.register, {email, password});
    sessionStorage.setItem("user", JSON.stringify(response));
    return response
}

export async function login(email, password){
    const response = await api.post(endpoints.login, {email, password});
    sessionStorage.setItem("user", JSON.stringify(response));
   
    return response;
}

export async function logout(){
    const response = await api.get(endpoints.logout);
    sessionStorage.removeItem('user');
    return response;
}

export async function createItems(body){
    const response = await api.post(endpoints.createItem, body);
    return response;

}

export async function getAllItems (){
    const response = await api.get(endpoints.getAllItems);
    return response;
}

export async function details(id){
   
    const response = await api.get(endpoints.details + id);
    return response;
}

export async function deleter(id){
    const response = await api.del(endpoints.delete + id);
    return response;

}

export async function update(body, id){
    const response = await api.put(endpoints.update + id, body);
    return response;
}

export async function myItems(userId) {
    const response = await api.get(`/data/catalog?where=_ownerId%3D%22${userId}%22
    `);
    return response;
}


// You can make requests to the following endpoints: 
// ⦁	Register User (POST): http://localhost:3030/users/register
// ⦁	Login User (POST): http://localhost:3030/users/login
// ⦁	Logout User (GET): ⦁	http://localhost:3030/user⦁	s⦁	/logout

// ⦁	Create Furniture (POST): http://localhost:3030/data/catalog
// ⦁	All Furniture (GET): http://localhost:3030/data/catalog
// ⦁	Furniture Details (GET): ⦁	http://localhost:3030/data/⦁	catalog⦁	/⦁	:id
// ⦁	Update Furniture (PUT): ⦁	http://localhost:3030/data/⦁	catalog⦁	/⦁	:id
// ⦁	Delete Furniture (DELETE):  http://localhost:3030/data/catalog/:id
// ⦁	My Furniture (GET): http://localhost:3030/data/catalog?where=_ownerId%3D%22{userId}%22

