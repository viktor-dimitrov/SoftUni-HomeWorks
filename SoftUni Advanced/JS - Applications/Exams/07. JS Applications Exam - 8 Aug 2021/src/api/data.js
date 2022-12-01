import { del, get, post, put } from "./api.js";


export async function getAllItems(){
    const items = get('/data/books?sortBy=_createdOn%20desc');
    return items
}

export async function getItemById(id){
    const item = get('/data/books/' + id);
    return item;
}

export async function createItem(body){
    post('/data/books', body);
}

export async function editItem(id, body){
    put('/data/books/' + id, body)
}

export async function deleteItem(id){
    del('/data/books/' + id);
}

export async function getMyItems(userId){
   const items = get(`/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
   return items
}